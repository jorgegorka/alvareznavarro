---
title: "Meteor Docker container restarting every 30 seconds"
date: '2017-03-29T21:13:50+00:00'
slug: '/desarrollo-web/2017/3/meteor-docker-container-restarting-every-30-seconds'
tags: ["meteor", "node.js"]
category: 'web-development'
excerpt: "I had a really weird problem today deploying to production using mup. After deployment the docker container was reseting itself every 30 seconds or so. Alarm! Achtung!After inspecting the container w..."
draft: false
headerImage:
---
I had a really weird problem today deploying to production using mup. After deployment the docker container was reseting itself every 30 seconds or so. Alarm! Achtung!

After inspecting the container with _docker logs containerName_ I've been able to conclude that the problem was due to two node packages: bcrypt and unicode.

I've solved the first problem removing the bcrypt node package. It's not optimal but at least it's working because meteor already provides a slower but fully functional bcrypt package.

The second problem with Unicode was really weird. This is the log:

    make: Entering directory '/bundle/bundle/programs/server/npm/node\_modules/buffertools/build' CXX(target) Release/obj.target/buffertools/buffertools.o SOLINK\_MODULE(target) Release/obj.target/buffertools.node COPY Release/buffertools.node make: Leaving directory '/bundle/bundle/programs/server/npm/node\_modules/buffertools/build' \> unicode@0.6.1 postinstall /bundle/bundle/programs/server/npm/node\_modules/unicode \> node install.js try to read file /usr/share/unicode/UnicodeData.txt … /usr/share/unicode/UnicodeData.txt not found. try to read file /usr/share/unicode-data/UnicodeData.txt … /usr/share/unicode-data/UnicodeData.txt not found. try to read file UnicodeData.txt … UnicodeData.txt not found. try to download … GET unicode.org:80/Public/UNIDATA/UnicodeData.txt

It looked like the package couldn't get the unicode data from unicode.org. I was able to install the package in my local machine so I'm afraid this problem can be related to my server being blocked (not sure why).

What I did to solve it was to log in to the docker machine and install the unicode data using the package manager:_apt-get install unicode-data_ and that solved the issue since npm is smart enough to not request that data if it's already present in the system.

I know both solutions are actually hacks but I have my client's website working again and now I have time to think about those errors more carefully and try to find the root of the problem. I will probably add the apt-get command to my docker image but I am not sure why all of a sudden bcrypt has stopped working (I have not updated the bcrypt recently).
