---
title: "How to deploy a Gatsby website to Amazon S3 using Gitlab CI"
date: '2018-06-11T08:47:41+00:00'
slug: '/blog/2018/6/how-to-deploy-a-gatsby-website-to-amazon-s3-using-gitlab-ci'
tags: ["javascript", "GatsbyJS", "Gitlab", "S3"]
category: 'web-development'
excerpt: "If you've never heard of GatsbyJS its an amazing static website generator that will help you to create progressive web apps using the JAM Stack. Don't let the word static website generator confuses you. Static does not mean not interactive. With GatsbyJS you can generate really interactive websites leveraging the power of React and GraphQL."
draft: false
headerImage: ''
---
If you've never heard of [GatsbyJS](https://www.gatsbyjs.org/) it's an amazing static website generator that will help you to create progressive web apps using the JAM Stack.

More information in case you want to know what a [progressive web application](https://developers.google.com/web/progressive-web-apps/) is. And this is an explanation of the [JAM Stack](https://jamstack.org/).

Don't let the word static website generator confuses you. Static does not mean not interactive. With GatsbyJS you can generate modern, interactive websites leveraging the power of React and GraphQL.

One of my goals for this summer is to move my blog (yes, this one you are reading now) from Squarespace to [Amazon S3](https://aws.amazon.com/). I'm going to use [Gitlab](https://gitlab.com) and [GatsbyJS](https://www.gatsbyjs.org/). The workflow will be like this:

1. I create content for the blog and once all is good changes are pushed automatically to my Gitlab repository.
2. Using Gitlab CI the pushed changes will be automatically compiled and deployed to my Amazon S3 bucket where the website lives.
3. Changes are live.

As you can see it's a simple but powerful workflow. I can modify anything, add a new post, page, etc... See the new changes applied in my local version and once I'm happy with the result I just need to push the changes to my repo and they will be deployed to my live site thanks to Gitlab CI.

Thanks to the power of git I can revert any change, any time.

## Step First: Amazon S3 Bucket

Let's start with the process. The first step is to create a bucket in Amazon S3 that will contain our website. In order to increase security we are going to add a new user with permissions to write only in that new bucket.

Go to Amazon, select S3 and press the "Create bucket" button

 ![Create bucket](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e482e88251b8e2e3ee7e6/1528711232817/Screen+Shot+2018-06-11+at+10.53.53.png.53.png?format=original)

Don't worry about permissions, we will change them later. Just create the bucket with the default options and once it's been created click on it. I'm going to create a bucket called _alvareznavarro_ . Once the bucket has been created you will see a page like this:

 ![Bucket properties page](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e4896758d467b0ba39a9f/1528711342038/Screen+Shot+2018-06-11+at+10.56.37.png.37.png?format=original)

Click on Static website hosting and this is what you will see:

 ![Static website hosting configuration](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e491a88251b8e2e3efca8/1528711487090/Screen+Shot+2018-06-11+at+10.57.04.png.04.png?format=original)

Select the option called: "Use this bucket to host a website" and write the name of your index page. Gatsby uses index.html by default so write that. You can also add an error page. I'm going to follow amazon suggested name and call the page error.html.

You can notice that the visible url of your website appears at the top of the page just before the "Use this bucket to host a website option". It's called Endpoint. You can open that url in a new tab so we can check our website later on.

Now save your changes and you will be back to the bucket configuration page. Press on the Permissions tab and click on the button called "Bucket Policy".

 [caption id="" align="alignnone" width="2500.0"] ![Bucket permission setup](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e4a5e0e2e727080de415d/1528711799885/Screen+Shot+2018-06-11+at+10.58.46.png.46.png?format=original) Bucket permission setup [/caption]

We are going to setup the permissions for this bucket. Because it will contain our website we want everybody to be able to read all the contents of this bucket. Everything should be public. Copy and paste this script but **remember to replace the bucket name with your own name**.

    { "Version": "2012-10-17", "Statement": [{ "Sid": "PublicReadGetObject", "Effect": "Allow", "Principal": "\*", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::alvareznavarro/\*" }] }

Once this step is done we have am S3 bucket where all the contents will be readable by anybody. So far, so good. Nothing more needed in S3 now go to Services and choose Amazon IAM.

What we are going to do here is to create a policy that allows to write content to that bucket. We will use this policy with a use that we are going to create later on.

Visit Amazon IAM and in the left sidebar click on policies and then the button called "Create policy"

 ![IAM policy that allows to write content in our bucket](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e4d8bf950b7e55e49e7e7/1528712622444/Screen+Shot+2018-06-11+at+11.02.13.png.13.png?format=original)

Select the tab named JSON and copy/paste the following script. Again remember to change the bucket name and use your own.

    { "Version": "2012-10-17", "Statement": [{ "Sid": "VisualEditor0", "Effect": "Allow", "Action": [ "s3:GetObject", "s3:PutObject", "s3:DeleteObject"], "Resource": "arn:aws:s3:::alvareznavarro/\*" }, { "Sid": "VisualEditor1", "Effect": "Allow", "Action": "s3:ListObjects", "Resource": "\*" } ] }

Save the changes and give the policy a name, mine is called _publicWebsiteBucket_. You can call the policy however makes more sense to you.

Now let's go to the final step in Amazon. We are going to create a new user and we will assign that policy to the user. By doing that we will have a user that can only write content to our bucket but nothing else. If the credentials of that user are compromised then we are limiting the amount of damage we may suffer.

In Amazon IAM in the left sidebar click on the option called Users and then click the button named "Add user"

 ![Create a user with programatic access](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e4f4b562fa722fbbb39c2/1528713062832/Screen+Shot+2018-06-11+at+11.04.01.png.01.png?format=original)

Give a name to your user, mine is called _publicWebsiteUser_ and select the **Programatic access** option then click "Next: Permissions".

 ![Attach our policy to the user](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e4fb30e2e727080dec154/1528713168177/Screen+Shot+2018-06-11+at+11.04.52.png.52.png?format=original)

We are going to attach our policy to this user and the way of doing so is by clicking on the "Attach existing policies directly" tab. You will see a list of all policies. Go to filter and search for the name of the policy you've created before. Then select that policy by clicking on the left checkbox and click "Next: Review".

 ![You new user with the credentials info.  ](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e506470a6ad65229cab28/1528713373300/Screen+Shot+2018-06-11+at+11.05.46.png.46.png?format=original)

Now you can see your new user and the credentials assigned to this user. This is the last time you will be able to see these credentials so copy them and save them because we are going to use them later on in [Gitlab](https://gitlab.com).

Let's recap what we've done so far.

1. Create a new bucket and configured as Static website hosting.
2. Update the bucket permissions to be readable by everybody.
3. Create a new policy that allows to write content to the bucket.
4. Create a user and assign the policy created in step 3 to this user. Now this user can only write content to our bucket and nothing more.

Now it's time to move to Gitlab.

## Step Two: Gitlab repository

Create a repository in Gitlab. Give it the name that better suits your needs. I'm going to name it _alvareznavarro_ same as the S3 bucket so I don't need to remember a lot of names. The permission is not important. You can create the repository public or private. I think public makes more sense because all the content is going to be public in you website anyway.

Go to the repo and in the left sidebar click on Settings -\>CI/CD. Click on Variables and here you need to add the credentials that you copied when you created the Amazon User. Check this screen:

 ![CI Settings for our repo.](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e52676d2a73d2cc2b42fe/1528713865700/Screen+Shot+2018-06-11+at+11.09.28.png.28.png?format=original)

Create these two variable name and paste the corresponding values. Now when Gitlab tries to deploy our website to S3 it will authenticate using these credentials.

Gitlab is ready. This is a summary of the steps in Gitlab

1. Create a repository in gitlab.
2. Go to settings and add the credentials from the Amazon user.

## Step Three: Create the website

Time to create or brand new GatsbyJS website.

First you need to install GatbsbyJS which is very easy. Go to the terminal and write:

    npm install --global gatsby-cli

Now create a new website like this: (again mine is called _alvareznavarro_, yours can be called whatever you like).

    gatsby new alvareznavarrocd alvareznavarro/gatsby develop

If you have followed these steps open a browser and visit http://localhost:8000 and you should see a default site.

Our next step is also the last one. We are going to deploy this website to our Amazon S3 bucket.

Create a new file in the root of your [GatsbyJS](https://www.gatsbyjs.org/) repo called .gitlab-ci.yml then copy/paste this code (remember to change the bucket name and use your own):

    image: node:lateststages: - build- deployvariables: BUCKET\_NAME: alvareznavarrocache: paths: - node\_modules/buildGatsby: stage: buildscript: - npm install- ./node\_modules/.bin/gatsby build --prefix-pathsartifacts: paths: - publiconly: - masterdeploys3: image: "python:latest"# We use python because there is a well-working AWS Sdkstage: deploydependencies: - buildGatsbybefore\_script: - pip install awscliscript: - aws s3 cp public s3://${BUCKET\_NAME} --recursiveenvironment: name: 's3-deploy'url: http://${BUCKET\_NAME}.s3.eu-central-1.amazonaws.com # This is the url of the bucket we saved before

This script has two parts: One called build where we generate the website using gatsby build. The generated website will live under a directory called public.

In the second part of the script we copy the contents of the public directory to our S3 bucket.

Now let's make everything work. It's time to push all the contents of our repo to Gitlab. Because this is a new directory we need to sync it with our Gitlab repo write this:

    git initgit remote add origin git@gitlab.com:yourgitlabuser/yourrepo.gitgit add .git commit -m "Basic layout"git push origin master

We are initialising our local directory as a git repo then we add the Gitlab repo as the origin and after adding all files content is committed and pushed to Gitlab.

Now you just need to wait a few minutes and the contents of your website will be compiled and uploaded to your S3 bucket.

You can check the status of the process in Gitlab inside CI/CD -\> Piplelines

 ![Gitlab pipelines status](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5b1e6ae070a6ad65229f8ec3/1528720133480/Screen+Shot+2018-06-11+at+14.27.24.png.24.png?format=original)

Time to summarise all steps we did on our computer:

1. Create a new GatsbyJS website.
2. Add a file with steps to build and deploy our website.
3. Commit and push your changes.

### Summary

And that's all. Now you have a website that will be updated every time you push changes to your gitlab repository. It's easy and secure.

I would like to thank [Riccardo Padovani](https://rpadovani.com/) for his post:[AWS S3 + GitLab CI = automatic deploy for every branch of your static website](https://rpadovani.com/aws-s3-gitlab). This very post has been heavily inspired by his work.

As I progress in creating my blog I'll add new posts explaining what plugins I'm using, theme, add ssl and custom domain.
