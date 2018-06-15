---
title: "uninitialized constant REXML::VERSION"
date: '2008-09-14T19:07:00+00:00'
slug: '/blog/2008/09/uninitialized-constant-rexml-version'
tags: ["Internet", "rails", "ruby"]
category: 'Desarrollo Web'
excerpt: "Al actualizar a Rails 2.1.1 aparece un pequeño problema: **uninitialized constant REXML::VERSION**Esto es debido a que el fichero rexml.rb define el número de version con la palabra Version y Rails e..."
draft: false
headerImage: 
---
Al actualizar a Rails 2.1.1 aparece un pequeño problema: **uninitialized constant REXML::VERSION**

Esto es debido a que el fichero rexml.rb define el número de version con la palabra Version y Rails espera que dado que es una constante esté escrita en mayúsculas (ya que es así como se definen las constantes en ruby).

Para corregirlo hay que modificar el fichero rexml.rb que se encuentra en /usr/lib/ruby/1.8/rexml/rexml.rb y añadir otra línea (mejor que corregir la línea actual, para no cargarse nada) debajo de donde pone: _Version = "3.1.3"_ añadimos _VERSION = "3.1.3"_

Y todo volverá a la normalidad.

[English version](http://blog.brightbox.co.uk/posts/uninitialized-constant-rexmlversion-with-rails-211-and-rails-22 "version en ingles")

