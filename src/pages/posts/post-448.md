---
title: "Higher Order Components - HOC - in React Native"
date: '2018-03-18T12:08:02+00:00'
slug: '/desarrollo-web/2018/3/higher-order-components-hoc-in-react-native'
tags: ["javascript", "react-native", "react"]
category: 'web-development'
excerpt: "Higher Order Components is a useful pattern that has a lot of uses to make your React code easy to read and maintain. In this post I'm going to explain how to use Higher Order Components, HOC from now on, to keep your code DRY."
draft: false
headerImage:
---
Higher Order Components is a useful pattern that has a lot of uses to make your React code easy to read and maintain. In this post I'm going to explain how to use Higher Order Components, HOC from now on, to keep your code DRY.

Let's start with our code. This is a component that gets data from a server (in my case it's a Graphql server with Apollo on the client)and presents the results to the user:

    class ResultListFinder extends React.Component { render() { if (this.props.data && this.props.data.error) { return \<InformDataError /\>; } const { resultsQuery } = this.props; if (resultsQuery.loading) { return \<Loading /\>; } const { results } = resultsQuery; return ( \<View\>// Iterate and display the results\</View\> ); } }export default graphql(FindAllResultsQuery, { name: 'resultsQuery'})(ResultListFinder);

The former code is a pattern that it's needed on each component that receives data from a server. First we need to check if there was an error and the query didn't succeed (server was down, query was malformed, etc..). Secondly we need to check if the query is still in progress and didn't finish loading data. It's only after we've check those two conditions that we can safely assume that we have the required data and we can present it to the user.

## Refactoring to use HOC

Let's add our first HOC we are going to remove the code that checks for errors and we'll create a HOC that takes care of that. This is the code of the new HOC

    import React from 'react';import InformDataError from '../data\_error\_message';function WithFailedQuery(Composable) { return class extends React.Component{ render() { const { data } = this.props; if (data && data.error) { return \<InformDataError error={ data.error } /\>; } else { return \<Composable { ...this.props } /\>; } } } }export default WithFailedQuery;

Really simple code here. We have a component called WithFailedQuery (by convention HOCs start with the word _with_, but feel free to name them whatever it makes sense to you). It will receive another component called Composable. Then if there is an error it will render the component that informs the user of the error. If there is no error we render the component that we received as a param and we pass all the props to it.

This is the code of our original component:

    class ResultsList extends React.Component { render() { const { resultsQuery } = this.props; if (resultsQuery.loading) { return \<Loading /\>; } const { results } = resultsQuery; return ( \<View\>// Iterate and display the results\</View\> ); } }const ResultListFinderWithFailedQuery = WithFailedQuery(ResultsList);const ResultListFinder = graphql(FindAllResultsQuery, { name: 'resultsQuery'})(ResultListFinderWithFailedQuery);export default ResultListFinder

Using our new HOC is very easy, we just need to send our mail component as a param to the HOC (remember this will be the composable param in the HOC code). Then we mix the result with the graphql query. Order is important here so the props can be passed to each compnent. Finally we export the result.

We have now a reusable functionality (check data errors) that we can use in any of our components.. But we are not finished yet, let's add another HOC that takes care of the loading functionality. This is the code:

    import React from 'react';import LoadingMessage from '../loading\_message';function WithLoadingQuery(Composable) { return class extends React.Component{ render() { const { resultsQuery } = this.props; if (resultsQuery.loading) { return \<LoadingMessage /\>; } else { return \<Composable { ...this.props } /\>; } } } }export default WithLoadingQuery;

As you can see it's very similar to the first HOC simple and easy to read. If you like functional components you are probably thinking that these two HOCs can be easily written as functional components. I don't like them. I found them hard to read so I seldom use them. I write class components almost all the time.

Now our main components looks like this:

    class ResultsList extends React.Component { render() { const { results } = this.props.resultsQuery; return ( \<View\>// Iterate and display the results\</View\> ); } }const ResultListFinderWithFailedQuery = WithFailedQuery(ResultsList);const ResultListFinderWithLoadingQuery = WithLoadingQuery(ResultListFinderWithFailedQuery);const ResultListFinder = graphql(FindAllResultsQuery, { name: 'resultsQuery'})(ResultListFinderWithLoadingQuery);export default ResultListFinder

We have now a simpler main component that is easy to read and better yet if we want to add another component that performs a query we can reuse both WithFailedQuery and WithLoadingQuery.

## Improving code with compose

So far, so good, right? All looks fine but all those assignments that we need to do before exporting ResultListFinder are a bit ugly. What if we want to include more HOCs? (maybe another one that checks that results are empty and display a message to the user).

If we are creating HOCs to be reused then we need to minimise the code that we write and make it as DRY as possible, while maintaining it easy to read. _If you need to choose between easy to read and short code always choose easy to read._

To improve our code we are going to use a function called compose. Compose is included in a library called [Recompose](https://github.com/acdlite/recompose). It's a nice library with lots of HOCs ready to use. I'm not needing all those HOCs right now so what I've done is I've copy/pasted the compose function to my code in order to avoid including the whole recompose library. This is the code we need:

    // This code has been copied from here:// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js// Check out their website: https://github.com/acdlite/recomposeexport default function composeHOC(...funcs) { if (funcs.length === 0) { return arg =\> arg } if (funcs.length === 1) { return funcs[0] } return funcs.reduce((a, b) =\> (...args) =\> a(b(...args))) }

I've renamed the function from compose to composeHOC to avoid problems because Apollo has another function called compose.

If we import that function in our code the result will be like this. R **emember, the order in which we "compose" our components it's important.**

    import composeHOC from '../lib/compose';class ResultsList extends React.Component { render() { const { results } = this.props.resultsQuery; return ( \<View\>// Iterate and display the results\</View\> ); } }export default ResultListFinder = composeHOC( graphql(FindAllResultsQuery, { name: 'resultsQuery' }), WithFailedQuery, WithLoadingQuery)(ResultsList);export default ResultListFinder

## Summary

We have now a nice and reusable pattern that allow us to share functionality between our components easily. The code in these examples has been extracted from a react-native application that uses Apollo to communicate to a Graphql server (a ruby on rails server in case you are wondering). I think the code is generic enough to be used almost in any React app.

I look forward to your questions, suggestions or improvements in the comments.

**Thanks for reading!!**

### References:

[Query components with Apollo](https://dev-blog.apollodata.com/query-components-with-apollo-ec603188c157)

[Higher Order Components](https://reactjs.org/docs/higher-order-components.html)

[A gentle introduction to Higher Order Components](https://www.robinwieruch.de/gentle-introduction-higher-order-components/)

[Recompose](https://github.com/acdlite/recompose)
