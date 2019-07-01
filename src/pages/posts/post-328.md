---
title: 'Svelete & Firebase template'
date: '2019-06-26T11:00:21+00:00'
slug: '/blog/2019/6/svelete-firebase-user-authentication'
tags: ['svelte', 'firebase', 'spa']
category: 'web-development'
excerpt: "Authenticate a user using Firebase. Once the user is authenticated using Svelte we can redirect the user to an admin section or a public section based on the user's permissions"
draft: false
headerImage: 'https://alvareznavarro-images.s3.eu-central-1.amazonaws.com/green_tree.jpg'
---

User management is a vital part of any web application. Let's see how we can manage users using Firebase and Svelte. All the examples in this article are available in this [free template to create web applications easily using Svelte and Firebase](https://svelte-firebase-template.web.app/).

We'll cover these subjects

- Firebase authentication
- Sign up
- Log in
- Admin area
- Session management
- Summary

## Introduction

It's very hard to find a web or mobile application without any user management. Most of the time we encourage visitors of our app to create an account and log in. Managing user data is a delicate subject. It's frequent to read stories about companies that have suffered an attack and the information about their users have been compromised. By using Firebase we are minimising those problems because all user's sensible data and authentication process is managed by Google. We can leverage Google's experience and resources to keep data safe.

## Firebase authentication

Firebase gives us a robust and secure way of administering users. It has plenty of authentication methods availabe from standard email/password to phone authentication or using third party providers like Facebook, Twitter or Microsoft. In our web application we'll use the most common way and we'll manage our users using email and password.

First thing you need to do is enabling Email/Password access in your Firebase project.

![Firebase email/password auth](https://alvareznavarro-images.s3.eu-central-1.amazonaws.com/firebase-email-password-auth.png)

Once Email/Password is enabled we can sign up users in our application.

## Sign up

When a new user sign up we will create a company for that user and all the data (teams, employees, actions...) will be assigned to that company.

The user will become the company's administrator and will be able to create accounts for other users to access the application.

Check the complete code to [generate a sign up form](https://github.com/jorgegorka/svelte-firebase/tree/master/src/views/public/signup).

After a visitor has entered their name, email and password we'll try to create an account for them using this code:

```:javascript
const { user } = await Auth.createUserWithEmailAndPassword(email, password)
```

That's all we need to create a user in Firebase. It couldn't be simpler. That method is doing two things, though. It's creating a new user but it's also automatically making the user logged in.

Now that we have a user we want to create a company and make them the admin of that company. In order to do so we are going to use a Firebase Cloud Function. The code is the following:

```:javascript
  const createCompany = Functions.httpsCallable('createCompany')
  createCompany({ companyName: name })
    .then(() => {
      notificationMessage.set({
        message: 'Your account was created successfully. Please log in',
        type: 'success-toast'
      })
      // We logout the user to generate a new jwt with right token info
      Auth.signOut().then(() => {
        navigateTo('/login')
      })
    })
    .catch(error => {
      notificationMessage.set({ message: error.message, type: 'danger-toast' })
      console.log(error)
    })
```

We are calling a function named _createCompany_ and we are sending an object as a param. This object has the company name as a property.

In that function we will create a new company, we'll also create a new employee and assign it to the current user. After that we will assign the companyId and a role _admin_ to our users (since they are the only user of our application and therefore the admin) as a custom user claim.

In another article I'll talk about user claims and why they are paramout to secure our applications.

Check the code for the [createCompany function](https://github.com/jorgegorka/svelte-firebase/blob/master/functions/index.js#L7-L35)

When the _createCompany_ function returns we'll sign out the current user (remember that's been logged in automatically by _createUserWithEmailAndPassword_). We need to do this because the user claims are not updated automatically and since our method did change them we need to ask the user to log in again to refresh those tokens.

## Log in

Logging in a user is very easy. We just need to ask the user for their email and password and then call the method _signInWithEmailAndPassword_ that's all.

```:javascript
  Auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      notificationMessage.set({ message: 'Welcome back!', type: 'success-toast' })
      disableAction = false
      navigateTo('admin')
    })
    .catch(error => {
      notificationMessage.set({ message: error.message, type: 'danger-toast' })
      disableAction = false
    })
```

As you can see all we need to do is call that method and then if user and password are correct we show a welcome message and redirect the user to the admin area. If there is an error we display the error message to the user.

If credentials (user/password) are valid a session will be created automatically therefore if the user closes the browser and opens it again they don't have to enter the credentials again.

This is the [complete code for log in](https://github.com/jorgegorka/svelte-firebase/tree/master/src/views/public/login)

## Admin area

Our Admin area is a protected section and only logged in users can access it. Let's see how it is done with an example:

First we leverage that [Svelte Router SPA](https://github.com/jorgegorka/svelte-router) has a fantascic support for layouts and nested layouts. The first thing that we do is to create all protected routes under _/admin_. This is how it looks in our routes file:

```:javascript
const protectedRoutes = [
  {
    name: 'admin',
    component: AdminLayout,
    nestedRoutes: [
      { name: 'index', component: DashboardIndex },
      {
        name: 'employees',
        component: EmployeesLayout,
        nestedRoutes: [{ name: 'index', component: EmployeesIndex }, { name: 'show/:id', component: EmployeesShow }]
      },
      {
        name: 'teams',
        component: TeamsIndex
      },
      { name: 'teams/show/:id', component: TeamsShow }
    ]
  }
]
```

Now all protected routes will be nested inside admin and **AdminLayout** will be the first component to be rendered. We will use that to our benefit and we just have to check if there is a valid user in **AdminLayout**.

In order to do that check we use a [reactive statement](https://svelte.dev/docs#3_$_marks_a_statement_as_reactive). That's a Svelte feature that will run the code inside the statement every time the values that they depend on have changed.

```:javascript
$: if (!$currentUser) {
   showPage = false
 } else {
   if ($currentUser.id === 0) {
     notificationMessage.set({ message: 'Please log in first in order to access this page.', type: 'warning-toast' })
     navigateTo('/login')
   } else {
     showPage = true
   }
 }
```

We are checking for currentUser and if it exists then we check if there is a user id. If there is one then we know that the user has been logged in successfully. If the user id is zero then we know there is no active user and we show a message and redirect the user to the login page.

You will know

Since currentUser is just a [Svelte store](https://svelte.dev/docs#svelte_store) and stores are asyncronous, it may occur that it does not exist because it's still being loaded. While it's being loaded we use a variable called _showPage_ that presents a loading indicator so the visitor can see that something is going on.

```:javascript
{#if !showPage}
 <Loading />
{:else}
 <div>Page content</div>
{/if}
```

## Session management

To control when/if the user logged in or logged out we rely on another amazing Firebase method called _onAuthStateChanged_. This method will be triggered automatically by Firebase Auth when there is a change in the active session.

This is what we do:

```:javascript
Auth.onAuthStateChanged(() => {
  if (Auth.currentUser) {
    const userInfo = {
      email: Auth.currentUser.email,
      id: Auth.currentUser.uid,
      phoneNumber: Auth.currentUser.phoneNumber,
      photoUrl: Auth.currentUser.photoUrl
    }

    Employees.findOne(Auth.currentUser.uid).then(doc => {
      userInfo.employee = doc.data()
      userInfo.employee.id = doc.id
      userInfo.displayName = userInfo.employee.name

      Auth.currentUser.getIdTokenResult().then(idToken => {
        userInfo.companyId = idToken.claims.companyId
        userInfo.isAdmin = idToken.claims.role === 'admin' || idToken.claims.role === 'superAdmin'

        currentUser.set(userInfo)
      })
    })
  } else {
    currentUser.set({ id: 0 })
  }
})
```

When _onAuthStateChanged_ we first check if there is a currentUser. If so then we know that the user has an active session. If there is no currentUser then we set the id to zero to indicate that there is no active session and the user needs to enter their credentials to create a new valid session again.

If there is a valid user then we create a currentUser [Svelte store](https://svelte.dev/docs#svelte_store) and populate it with useful information about the user and their role. We'll use this store in our application to check information about the user.

## Summary

User management is a critical part of a web application. Having all the user information stored in Firebase will reduce the chances of a data leak.

We've implemented a complete user workflow (sign up, log in, authenticate) with very few lines of code.

The complete code along with more features is available to donwload in the [Firebase & Svelte template](https://github.com/jorgegorka/svelte-firebase) repository.
