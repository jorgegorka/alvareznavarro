---
title: "Do you know how your customers use your product?"
date: '2017-03-16T17:32:00+00:00'
slug: '/blog/do-you-know-how-your-customers-use-your-product'
tags: ["startups", "google analytics"]
category: 'management'
excerpt: "When create your own startup and have a technological background, as I do, is very easy to think that what your customers need is a product full of features.  But what your customers need is a product that makes their lives easier."
draft: false
headerImage: 
---
When you create your own startup and have a technological background, as I do, is very easy to think that what your customers need is a product full of features. But what your customers need is a product that makes their lives easier, period.

> Having a product with the right features is more important than having a product with a lot of features.

That is why I spend a few hours every week looking at the usage patterns of [Happy Mood Score](https://www.happymoodscore.com).

To know how people are using HMS I use Google Analytics and Events.

 ![](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/58e6712e46c3c414863a55db/1491497281163/Total+event+distribution.jpgTotal+event+distribution?format=original)

The firs step is to define what I want to know. The most important thing I want to track in Happy Mood Score is:

- 

Feedback

- 

Peer to peer rewards

- 

Ideas

Then there are other metrics that I want to know also like: adding new employees, 1on1 notes or teams.

All those metrics will tell me important information about the use of HMS. **To capture that information I use a Google Analytics feature called: Events**. In Google Analytics adding an event is very easy. You need to add the following line of code:

    ga('send', 'event', 'Category', 'Action', 'Label', Value);

For instance: Let's say that I want to track when someone creates a new High 5 ([High 5s are peer to peer rewards](https://www.happymoodscore.com/features/) in Happy Mood Score). I would add the following event after the High 5 has been created successfully.

    ga('send', 'event', 'High5', 'New', 'UserDashboard', 0);

- 

**Category:** I am tracking which tool is being used, in this case the High 5.

- 

**Action:** I am saving the specific action the user is doing like: New, Edit, Delete.

- 

**Label:** Where is the user doing that. Users can give a High 5 to other users in different parts of the application. Now I know which place is being used the most.

- 

**Value:** This is a numeric field so I use it to know if the High 5 has a message included. If that is the case then it will be 1 or 0 if no message is present.

As you can see there is a lot of interesting information that I know using events.

Combine this information with some custom metrics like, for instance, if the company is in the trial period or not, and you will have a lot of useful information to make informed decisions.

Now I can create custom reports that will tell me:

- 

_How many new employees are adding companies in the trial period?_

- 

_How many High 5s are created each week/month?_

- 

_Which areas of the application are being used the most/least?_

- 

_Which day do people create more feedback, High 5s, ideas?_

There is also a report called "Events Flow" where I can learn things like:

 ![](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/58e670ff197aea71b4597873/1491497226875/event+flow.jpgevent+flow?format=original)

After reporting their status 50% of the people send a feedback message and then 16% of that people send an average of 2 High 5s to co-workers.

How cool is that? **A lot of information available with a small effort**.

I know there are other tools available, like Mixpanel, but I found them very expensive specially for a [bootstrapped startup](https://www.alvareznavarro.es/blog/2017/2/why-every-startup-should-start-bootstrapped) like us.

Are you tracking the usage of your product? I would love to know how you do it and any tips, improvements or suggestions.

