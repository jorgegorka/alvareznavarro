---
title: "React native with Apollo Graphql works on iOS but not on Android"
date: '2018-02-24T11:37:35+00:00'
slug: '/desarrollo-web/2018/2/react-native-with-apollo-graphql-works-on-ios-but-not-on-android'
tags: ["react-native", "apollo", "graphql"]
category: 'web-development'
excerpt: "My React Native app was working without problems on iOS but when I started expo to run the app on my android phone I had this weird graphql error: Unhandled (in react-apollo:Apollo )"
draft: false
headerImage:
---
I am developing a React Native application that uses [Graphql](http://graphql.org) to communicate to a Ruby on Rails server. I'm using the amazing [Apollo](https://www.apollographql.com) library for this purpose.

The app was working without problems on iOS but when I started expo to run the app on my android phone I had this weird error:

    Unhandled (in react-apollo:Apollo(Translate(LandmarksList))), ApolloError@http://10.5.48.159:19001/./node\_modules/react-native-scripts/build/bin/crna-entry.delta?platform=android&dev=true&minify=false:103922:40 currentResult@http://10.5.48.159:19001/./node\_modules/react-native-scripts/build/bin/crna-entry.delta?platform=android&dev=true&minify=false:104057:47 dataForChild@http://10.5.48.159:19001/./node\_modules/react-native-scripts/build/bin/crna-entry.delta?platform=android&dev=true&minify=false:103034:83 render@http://10.5.48.159:19001/./node\_modules/react-native-scripts/build/bin/crna-entry.delta?platform=android&dev=true&minify=false:103103:53 finishClassComponent@http://10.5.48.159:19001/./node\_modules/react-native-scripts/build/bin/crna-entry.delta?platform=android&dev=true&minify=false:8026:43 updateClassComponent@http://10.5.48.159:19001/./node\_modules/react-native-scripts/build/bin/crna-entry.delta?platform=android&dev=true&minify=false:8007:38

After spending some time debugging and googling about the problem it turns out to be the link to the graphql server (a Ruby on Rails app in my case).

iOS simulator uses the same IP as the host whereas android doesn't so [the solution](https://github.com/apollographql/react-apollo/issues/1228) was as simple as updating the IP of the graphql server:

    const httpLink = new HttpLink({ uri: 'http://10.5.48.159/graphql'});

You probably have _localhost_ or your local IP on the uri field. If you change it to the IP that is being used by react native then it will work. Tip: You can see your own IP address checking the errors in the log:_ApolloError@http://10.5.48.159:19001/_
