---
title: "Instalar Mongrel en Ubuntu 6.06"
date: '2006-11-29T18:20:00+00:00'
slug: '/blog/2006/11/instalar-mongrel-en-ubunto-6-06'
tags: ["rails", "ubuntu"]
category: 'desarrollo-web'
excerpt: "Instalar [Mongrel](http://mongrel.rubyforge.org/) en una Ubuntu 6.06 no es tan sencillo como teclear:`sudo gem install mongrel`. Si al escribir esto recibes un mensaje del tipo:`Building native extensi..."
---
Instalar [Mongrel](http://mongrel.rubyforge.org/) en una Ubuntu 6.06 no es tan sencillo como teclear:`sudo gem install mongrel`. Si al escribir esto recibes un mensaje del tipo:`Building native extensions.
This could take a while...
extconf.rb:1:in `require': no such file to load -- mkmf (LoadError)
from extconf.rb:1
`Es que te falta el paquete ruby1.8-dev… vaya manía la de debian (y Ubuntu) de fragmentar ruby en tantos paquetes, siempre falta alguno cuando lo necesitas. Para solucionarlo escribe esto:`sudo apt-get install ruby1.8-dev`Y a disfrutar.

Por cierto existe [un artículo más completo que este mio](http://sas.sparklingstudios.com/articles/tag/mongrel) (en inglés).

