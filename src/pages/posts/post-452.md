---
title: "New components for Apollo GraphQL 2.1"
date: '2018-04-22T11:24:28+00:00'
slug: '/desarrollo-web/2018/4/new-components-for-apollo-graphql-21'
tags: []
category: 'web-development'
excerpt: "A few weeks ago I wrote an article about how to use Higher Order Components with Apollo client. Now that we have Apollo components let's refactor that code and see how it can be improved."
draft: false
headerImage: 
---
The guys at MDG have launched a new version of their Apollo Client 2.1 with a really nice feature: components for queries and mutations. A few weeks ago I wrote an article about how to use Higher Order Components with Apollo client. Now that we have Apollo components let's refactor that code and see how it can be improved.

Although it's not mandatory here is a link to my other article: [Higher Order Components in React Native](https://www.alvareznavarro.es/desarrollo-web/2018/3/higher-order-components-hoc-in-react-native).

## The compose approach

This is an actual file from a React Native app that I'm currently developing. It fetches data based on some params and renders the result in one of two ways, as a list of items or it pinpoints them on a map. It uses compose to mix the query with the components that handle the loading and error status and the component that display the results.

It send some variables to the query needed to restrict the results to a certain location and distance.

    import React from 'react';import { graphql } from 'react-apollo';import { View } from 'react-native';import composeHOC from '../../../lib/compose';import { WithFailedQuery, WithLoadingQuery } from '../../shared/hoc';import { AllRoutesQuery } from '../../../queries';import RoutesListIndex from './index';import RoutesMapIndex from '../map/index';class RoutesListFinderQuery extends React.Component { render() { const { navigation, resultsQuery, userLocation } = this.props; const { routes } = resultsQuery; return ( \<View\> { this.props.showItemList ?\<RoutesListIndexroutes={ routes } navigation={ navigation } /\> : \<RoutesMapIndexnavigation={ navigation } routes={ routes } userLocation={ userLocation } /\> } \</View\> ); } }export default RoutesListFinder = composeHOC( graphql(AllRoutesQuery, { name: 'resultsQuery', options: ({ maximumDistance, userLocation }) =\> ({ variables: { distance: maximumDistance, latitude: userLocation.latitude, longitude: userLocation.longitude } }) }), WithFailedQuery, WithLoadingQuery, )(RoutesListFinderQuery);

The first iteration of our refactor will put the new Query component into play and will remove all HOC components and the need of compose. It will also simplify how the graphql info and the params are passed to the query.

## Using the Query component instead of compose

    import React from 'react';import { Query } from 'react-apollo';import { AllRoutesQuery } from '../../../queries';import RoutesListIndex from './index';import RoutesMapIndex from '../map/index';class RoutesListFinderQuery extends React.Component { render() { const { navigation, userLocation, maximumDistance, showItemList } = this.props; let params= { distance: maximumDistance, latitude: userLocation.latitude, longitude: userLocation.longitude } return ( \<Query query={ AllRoutesQuery } variables={ params }\> {({ loading, error, data }) =\> { if (loading) return null; if (error) return `Error!: ${error}`; const { routes } = data; if (showItemList) { return ( \<RoutesListIndexroutes={ routes } navigation={ navigation } /\> ); } else { return( \<RoutesMapIndexnavigation={ navigation } routes={ routes } userLocation={ userLocation } /\> ); } }} \</Query\> ); } }export default RoutesListFinderQuery;

The generation of the query is now way more simple. We just need to pass the graphql data and the params as props and the component will perform the query and will return the data for us. It will also return information about possible errors and the loading state.

## Reusable loading and error management

With the HOC approach we had two components that were managing the loading and error state. Let's refactor again to add a reusable component that takes care of this tasks. After this refactor the code will be split into 3 separated files:

    import React from 'react';import { Query } from 'react-apollo';import { AllRoutesQuery } from '../../../queries';import ResultsManager from '../../shared/results\_manager';import RoutesListFinder from './finder';class RoutesListFinderQuery extends React.Component { render() { const { navigation, userLocation, maximumDistance, showItemList } = this.props; return ( \<Query query={ AllRoutesQuery } variables={{ distance: maximumDistance, latitude: userLocation.latitude, longitude: userLocation.longitude }}\> { ({ loading, error, data }) =\> { return( \<ResultsManager loading={ loading } error={ error }\>\<RoutesListFinder { ...this.props } data={ data } /\>\</ResultsManager\> ); }} \</Query\> ); } }export default RoutesListFinderQuery;

The query component now looks cleaner. It performs the query and passes all the info to a ResultsManager component. The function of this new component will be to handle the loading and error state and when the query has been performed and data has arrived it will render the children component.

This is how ResultManager looks like:

    import React from 'react';import LoadingMessage from './loading\_message';import DataErrorMessage from './data\_error\_message';class ResultsManager extends React.Component { render() { const { loading, error, children } = this.props; if (loading) return \<LoadingMessage /\>; if (error) return \<DataErrorMessage errorMessage={ error } /\>return children; } }export default ResultsManager;

Really simple component. It will return the loading message while data is loading. It will display a nice formatted error if any and eventually if all goes well it will return the content of the children props. Nice an clean.

I've also moved the logic that displays the results to its own component to add more clarity and keep components as S.O.L.I.D. as possible.

    import React from 'react';import { View } from 'react-native';import RoutesListIndex from './index';import RoutesMapIndex from '../map/index';class RoutesListFinder extends React.Component { render() { const { navigation, data, userLocation, showItemList } = this.props; const { routes } = data; return ( \<View\> { showItemList ?\<RoutesListIndexroutes={ routes } navigation={ navigation } /\> : \<RoutesMapIndexnavigation={ navigation } routes={ routes } userLocation={ userLocation } /\> } \</View\> ); } }export default RoutesListFinder;

## Summary

The new Query and Mutation components are a much needed improvement to Apollo Client. We can now write cleaner code that is easier to understand and update if our business rules change.

This refactor also helps me follow my own [Rule of Five](https://www.alvareznavarro.es/desarrollo-web/2018/3/react-native-imports-the-rule-of-5) about imports, that is a metric I use as a smell of a component doing too many things.

