---
title: "React Native imports:  The rule of 5."
date: '2018-03-27T10:07:15+00:00'
slug: '/desarrollo-web/2018/3/react-native-imports-the-rule-of-5'
tags: ["react-native", "react", "javascript"]
category: 'Desarrollo Web'
excerpt: "I'm going to talk about a metric that I've created that serves me as a warning signal to detect if a react component is doing too much stuff."
draft: false
headerImage: 
---
I'm going to talk about a metric that I've created that serves me as a warning signal to detect if a react component is doing too much stuff.

I'm a a big fan of the [S.O.L.I.D. principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) for development. They lead to code that is easy to read, to understand and most important easy to change when your business rules change.

Of the 5 principles there are two that I put special attention to the S and the I. The S stands for [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) to me the most important of them all, and the I that stands for [Interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle).

This is an example of how this rule of 5 makes me think about the code and refactor if necessary.

## The rule of 5

The rule of 5 is very easy to define: **I try to keep the number of imports below 5.**

This is an example of a react native screen file:

    import React from 'react';import { graphql } from 'react-apollo';import { View } from 'react-native';import composeHOC from '../../../lib/compose';import { WithFailedQuery, WithLoadingQuery } from '../../shared/hoc';import { AllLandmarksQuery } from '../../../queries';import LandmarksListIndex from './index';import LandmarksMapIndex from '../map/index';class LandmarksListFinderQuery extends React.Component { render() { const { navigation, resultsQuery, userLocation } = this.props; const { landmarks } = resultsQuery; return ( \<View\> { this.props.showItemList ?\<LandmarksListIndexlandmarks={ landmarks } navigation={ navigation } landmarkType="landmark"/\> : \<LandmarksMapIndexnavigation={ navigation } landmarks={ landmarks } userLocation={ userLocation } /\> } \</View\> ); } }export default LandmarksListFinder = composeHOC( graphql(AllLandmarksQuery, { name: 'resultsQuery', options: ({ maximumDistance, userLocation }) =\> ({ variables: { distance: maximumDistance, latitude: userLocation.latitude, longitude: userLocation.longitude } }) }), WithFailedQuery, WithLoadingQuery, )(LandmarksListFinderQuery);

I make two distinctions with imports. First I have all imports that include code from third party libraries and then I put all imports that include code from my own app. What I try to do is to keep both sections below 5. **If I have to import more than 5 third party libraries or if I have to import more than 5 files from my own code then a red light turns on in my brain**.

The file in this example loads a query from a graphql server and then shows the results as a list or in a map. There are only 3 imports from third party libraries which is fine but I have 5 imports of my own code. There is a warning sign in my brain now. Why do I need too many files?

I'm importing a compose file to mix the graphql query with a couple of [Higher Order Components that handle errors and shows a loading sign](https://www.alvareznavarro.es/desarrollo-web/2018/3/higher-order-components-hoc-in-react-native). I am including the query and then I'm including two react components that present the results as a list of items or in a google map.

My brain now starts to think. How can I reduce the number of files? One obvious way is to remove all the logic in the render method. Now this component is doing two things: It loads the required data from the server and decides which other component will show the data.I can create a component that handles all that logic of displaying the items list or the map. By doing that I would be able to remove the two imported files but I will have to import the new component so I'll have 4 imports instead of 5. Also this refactor won't need the View component so third party imports will change from 3 to 2.

Should I do it now? Should I wait until a new requirement arrives and I'm forced to add a new import?... It depends on time constraints and what my current knowledge of the business logic is. If I think this will not change then I can probably leave the code as it is and refactor it in the future. But if I know that there are many chances that the presentation of the results can change then I would refactor the code right now.

## Summary

Sometimes you are too busy meeting deadlines that you forget about best practices and only focus on getting things done. That's not bad at all and that's what you are paid for but it is always good to have a good set of metrics that helps you to stay on track, reminds you that there is room for improvement and help you write code that is easy to understand and easy to change in the future.

The rule of 5 imports has proven itself very useful to me. I hope it can help you too.

