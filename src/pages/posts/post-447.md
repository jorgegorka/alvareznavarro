---
title: "Apollo Graphql PromiseRejectionHandledWarning: Promise rejection was handled asynchronously"
date: '2018-02-25T12:10:46+00:00'
slug: '/desarrollo-web/2018/2/apollo-graphql-promiserejectionhandledwarning-promise-rejection-was-handled-asynchronously'
tags: ["react-native", "graphql", "apollo"]
category: 'Desarrollo Web'
excerpt: "This weird error that took me a while to debug and in the end it had a very simple solution.TL;DRError message: PromiseRejectionHandledWarning: Promise rejection was handled asynchronouslySolution: I was sending an integer when a param of type string was expected."
draft: false
headerImage: 
---
Apollo Graphql and React Native are two great tools that combine really well together but every now and then there are some nasty errors with confusing error message. Apollo should really improve the way errors are handled and presented to developers. I know it's not easy but it's very frustrating spending hours debugging and trying things that in the end were trivial to fix should the appropriate error being raised.

This weird error that took me a while to debug and in the end it had a very simple solution.

TL;DR

Error message: **PromiseRejectionHandledWarning: Promise rejection was handled asynchronously**

Solution: **I was sending an integer when a param of type string was expected.**

For those of you that want to know exactly what was going on this is my initial setup:

    render() { const { landmarksFilterQuery } = this.props; if (landmarksFilterQuery.loading) { return \<Loading /\>; } const { landmarksFilter } = landmarksFilterQuery; const { maximumLandmarks } = landmarksFilter; return ( \<View\>\<LandmarksList maximumLandmarks={ maximumLandmarks } /\>\</View\> ); } }const LandmarksDistanceFilter = gql`query landmarksilterQuery {landmarksFilter @client {maximumLandmarks}}`;export default compose( graphql(LandmarksFilter, { name: 'landmarksFilterQuery' }) )(LandmarksIndex);

I am using Apollo to manage my state. No need to use Redux for that. As I am already using Apollo for fetching and retrieving data it makes sense to use it to manage the internal state of the react native app. And it's very easy with: [apollo-link-state](https://www.apollographql.com/docs/link/links/state.html)you just use queries and mutations. Really clever.

As you can see in the former query I want to return a number of Landmarks based on the value of maximumLandmarks. This value can be set in other parts of the react native app like the user settings or a filter screen.

This is the code inside LandmarksList that takes the prop maximumLandmarks and pass it to the graphql query:

    const AllLandmarksQuery = gql`query allLandmarksQuery($distance: String) {landmarks(distance: $distance) {idnamecategorieslistImage}}`;export default graphql(AllLandmarksQuery, { name: 'allLandmarksQuery', options: ({ maximumLandmarks }) =\> ({ variables: { distance: maximumLandmarks } }) })(LandmarksList);

All was working fine until by mistake I defaulted maximumLandmarks to 10 instead of '10' and then I started to receive that confusing and unrelated error message. Luckily when I noticed the problem everything started to work again.

