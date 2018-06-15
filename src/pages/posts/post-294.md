---
title: "Meteor tools: Shell - server console"
date: '2015-07-18T11:25:19+00:00'
slug: '/blog/meteor-shell-server-side-console'
tags: ["meteor", "tools"]
category: 'web-development'
excerpt: "Debugging Meteor is easier since Meteor 1.0.2 Now we can use a console similar to the one we have available on the client. You just need to write meteor shell and all the power of a server-side console is available to you."
draft: false
headerImage:
---
## What is the Meteor shell

Starting with Meteor 1.0.2 we have available a console on the server, similar to the console we have available on the client in the browser.

Starting the console is very easy. First **we need to be sure that the meteor server is up and running** then we just need to open a terminal and write:

    meteor shell

The console supports command history and auto-completion which will save us a good amount of typing when using the console.

The console is the perfect place to deal with database problems like queries that don't work as expected or to check and improve the query performance.

Sometimes a server method is called after some complex conditions and simulating those conditions on the browser can be very time-consuming. In the console, you can call the method directly and provide it with your desired params and check its behaviour.

    Meteor.call('methodName', param1, param2... paramN)

Another handy use of the console is to call third party APIs. Debugging code that use an external API is not easy but with the console things get really simple. You can call the external API and see the response.

## Meteor shell available commands

This is the list of available commands (we have access to this list anytime writing .help):

    \> .help .break Terminate current command input and display new prompt .clear Alias for .break .exit Disconnect from server and leave shell .help Show this help information .load Load JS from a file into the REPL session .reload Restart the server and the shell .save Save all evaluated commands in this REPL session to a file

_ **reload** _After doing some changes to the code calling reload will restart the meteor server and the console so changes you have made to the code are reflected on the console.

_ **load** _ Allows you to load a javascript file into the session. It is a very convenient way of testing a new library or utility file without actually including it in the application. Just load the file, test the functionality with your current code and if you are happy with the results you can then add it to the application.

_ **save** _ This is another useful feature. After debugging your application just write save and a file name like:

    .save my-changes.txt

and all the commands of the current session are saved into a file.

The **meteor shell is a powerful utility** that will save you a lot of time when you are optimising, debugging or checking your application. Unfortunately, at the time of writing this post it is not yet documented in the [official Meteor documentation](http://docs.meteor.com/#/full/meteorhelp).
