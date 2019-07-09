---
title: 'Secure Firestore rules for Firebase'
date: '2019-07-02T09:30:00+00:00'
slug: '/blog/2019/7/secure-firestore-rules-for-firebase'
tags: ['svelte', 'firebase', 'firestore', 'javascript']
category: 'web-development'
excerpt: 'Firestore rules gives us a powerful way to secure our Firebase database. Rules allows us to control who has access to each document to create, read, write or delete it.'
draft: false
headerImage: 'https://alvareznavarro-images.s3.eu-central-1.amazonaws.com/curva_rio.jpg'
---

Firestore rules give us the possibility to configure and secure a Firebase database. In this article you will learn how to create a set of rules that are easy to read and maintain.

All the code mentioned in this article is availaible in the [Svelte & Firebase repository](https://github.com/jorgegorka/svelte-firebase) and you can download it for free.

### Table of contents

- Some thoughts on security
- Basic rules
  - Grant/Deny access to documents
  - Use functions to improve clarity
- Advanced rules
  - Return only a subset of documents
  - Allow special permissions to administrators
  - Filter by current user
- Summary

## Some thoughts on security

In a web application we can not trust the client. All the code that is being executed in somebody else's computer can be tampered and hacked.

If we do not configure our database properly anybody will be able to request any data from our database.

All the checks in Firestore rules take place in the Firebase servers so there is no chance for users to change them.

The only information we can trust is the authentication data. After a user successfully log in all comunications between our application and the Firebase database include a token with the session information.

This token is the only valid piece of information that can not be modified by the user.

The token gives us the possibility to save some extra information (user claims) that we can use to improve our rules.

Let's see all this in action:

## Basic rules

This is an example of the basic structure for securing a document:

```:javascript
  match /teams/{teamId} {
    allow read: if isSignedIn();
    allow create: if userAndAdmin();
    allow update, delete: if companyAdmin()
  }
```

[Firestore rules](https://firebase.google.com/docs/firestore/security/rules-structure) have basic _read_ and _write_ rules. Read rules can be broken into _get_ and _list_ while _write_ rules can be broken into _create_, _update_ and _delete_.

In the former example we are creating a rule for _reads_, another rule for _create_ and another one for _update_ and _delete_

### Grant/Deny access to documents

The way to allow access to a document is

```:javascript
allow (read/write): if <condition>;
```

We just need to define the operation that we want to allow and add a condition. If the condition is true the rule will succeed and the document will be returned to the client. If the condition fails the document will not be returned to the client.

If we have more than one rule for a single document Firebase will succedd if **any** of the rules return true.

### Use functions to improve clarity

A good tip to help you improve clarity and reuse code is to use functions to define your logic and use that functions in the rule definition.

Let's create our first rule. We want visitors to be able to read the contents of the teams document only if they are logged in.

This is how we would create that rule:

```:javascript
  match /teams/{teamId} {
    allow read: if isSignedIn();
  }
```

and this is the function we create:

```:javascript
  function isSignedIn() {
    return (request.auth.uid != null)
  }
```

We are checking the _request_ object, available in all rules, to see if there is an auth uid. If the request has been made by a logged in user auth.uid will return the user id of the user. It will be empty otherwise.

Now with this rule in place **only** logged in users will be able to read the teams documents.

## Advanced rules

Now that we know how to create basic rules let's add some more rules to improve the security of our database.

### Return only a subset of documents

With the only rule that we've created so far if you are logged in you have access to all the teams in our database. In our application users belong to a company so it makes sense that they can see only teams that belong to their company.

Let's create a function that checks that.

```:javascript
  function userBelongsToCompany() {
    return request.auth.token.companyId == resource.data.companyId
  }
```

I've mentioned before user claims. Those are pieces of information we can add to the session token with useful data. In our case when we create an employee we add two pieces of information: the Id of the company and the role. Check this code to see [how to add custom user claims](https://github.com/jorgegorka/svelte-firebase/blob/master/functions/index.js#L31).

We are comparing the _request.auth.token.companyId_ with the _resource.data.companyId_. In _resource.data_ Firestore gives us access to each document that will be returned. If the companyId of the document does not match the companyId of the user the document won't be returned.

Now that we have the _userBelongsToCompany_ function we can change our rule to use it:

```:javascript
  match /teams/{teamId} {
    allow read: if isSignedIn() && userBelongsToCompany();
  }
```

Now in order to read a document, or a list of documents two conditions must be met. The user must be logged in and the companyId of the user must match the companyId of the documents returned.

### Allow special permissions to administrators

Roles are a very common feature in many web applications. This is how we can apply roles to our rules :-).

```:javascript
  function userIsAdmin() {
    return request.auth.token.role == 'admin'
  }
```

We have another user custom claim defined called _role_. It's now very easy for us to check if the user is an admin.

For the sake of clarity we add another function like this:

```:javascript
  function userAndAdmin() {
    return isSignedIn() && userBelongsToCompany() && userIsAdmin()
  }
```

Now if we want that only admins would be able to create new teams we add a this new rule.

```:javascript
  match /teams/{teamId} {
    allow read: if isSignedIn() && userBelongsToCompany();
    allow create: if userAndAdmin();
  }
```

Only admin users that belong to our company can create new teams. Regular users can only read them.

### Filter by current user

What if we want that regular users can edit their own documents but not others, while admins can edit any document? ... Rules to the rescue.

```:javascript
  function adminOrOwner() {
    return userBelongsToCompany() && (userAndAdmin() || resource.data.employeeId == request.auth.uid)
  }
```

I bet you saw that comming, right? We check a field in the data returned called _employeeId_ and compare it to the id of the logged in user. If they match the rule will be successful. If they don't it would still succedd if the user is an admin. Whether the user is an admin or not they must belong to our company so the first check is the _userBelongsToCompany_ function.

This is how we would implement that rule if we want employees (for instace) to be able to edit their own records.

```:javascript
  match /employees/{employeeId} {
    allow update: if adminOrOwner()
  }
```

## Summary

You need to spend time thinking about who should have access to your Firestore databases. Never trust a client request since it may be compromised. Do all your checkings in the server using Firestore rules and the session information. With the help of custom user claims and functions it should be very easy to secure your database.

If you want to see these rules in action in a live application download the free [Svelte and Firebase template](https://github.com/jorgegorka/svelte-firebase).
