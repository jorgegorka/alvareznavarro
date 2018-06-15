---
title: "Nginx: upstream sent too big header while reading response header from upstream"
date: '2017-03-14T18:22:08+00:00'
slug: '/desarrollo-web/2017/3/nginx-upstream-sent-too-big-header-while-reading-response-header-from-upstream'
tags: ["meteor", "nginx", "cookies"]
category: 'web-development'
excerpt: "After updating my server to Meteor version 1.4.3.1 I've been experiencing some problems with Nginx.All services looked fine but when requesting a page..."
draft: false
headerImage:
---
After updating my server to Meteor version 1.4.3.1 I've been experiencing some problems with Nginx.

All services looked fine but when requesting a page I was getting the response:

_\*12 upstream sent too big header while reading response header from upstream_

That problem caused requests not being served correctly and the Nginx server returning **502 Bad Gateway.**

After some reading about what the problem was and how to solve it these changes to the Nginx configuration have solved my problem and everything is working fine again.

    server { listen 80; proxy\_buffering on; proxy\_buffer\_size 128k; proxy\_buffers 4 256k; proxy\_busy\_buffers\_size 256k; }

This post really helped me to understand what the problem and the solution were: [https://talk.plesk.com/threads/nginx-error-upstream-sent-too-big-header.338232/](https://talk.plesk.com/threads/nginx-error-upstream-sent-too-big-header.338232/)
