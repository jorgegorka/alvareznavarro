---
title: "Meteor reactive on updates but not on inserts"
date: '2015-10-11T23:37:04+00:00'
slug: '/desarrollo-web/2015/10/meteor-reactive-on-updates-but-not-on-inserts'
tags: ["meteor", "javascript", "reactivity"]
category: 'web-development'
excerpt: "As soon as an activity was modified on the server the client was updated but new activities although were inserted correctly in the database were not updated on the client."
draft: false
headerImage:
---
I had a strange problem today. I am developing the new dashboard for [Happy Mood Score](https://happymoodscore.com). Now there is a whole gamification system integrated into the application where employee's activities give them points, badges, levels... and managers can see the activity in real time in the dashboard.

So my problem was that updates were reactive but inserts were not. **As soon as an activity was modified on the server the client was updated but new activities although were inserted correctly in the database were not updated on the client.**

This is my publish function:

    Meteor.publish 'activities', (limit=10)-\>return @ready() if !@userIdcheck limit, Match.Integercompany = new CurrentCompany(0, @userId).find() Activities.find({companyId: company.\_id}, {sort: {createdAt: -1}, limit: limit})

As you can see it is a very simple and standard publish function. And this is the code I have on the client where I get the activities.

    @DashboardController = AdminController.extendwaitOn: -\>Meteor.subscribe('activities')Template.rightDashboard.helpersactivities: -\>Activities.find()

Again nothing special on this code. After spending around 30 minutes testing things I realized what the problem was. The problem was in the helper, this is the correct code:

    Template.rightDashboard.helpersactivities: -\>Activities.find({}, {sort: {createdAt: -1}})

Now everything makes sense. With my first helper I was subscribed to the last 10 activities and when they were updated changes were reflected. If a new activity was created the dashboard was not updated because I already had 10 activities.

**Adding the sort method to the cursor I am explicitly asking for the last 10 activities and therefore when a new activity was created it was inserted into the dashboard.**

It is easy to forget that collections are different on both the server and the client. Meteor does such a good job synchronising them that it looks like there is just one collection. When we are on the client we always need to make sure we are dealing with the right set of data.
