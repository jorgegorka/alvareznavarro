---
title: "HTML 5 - Nuevos elementos: Header y Footer"
date: '2011-02-07T09:25:52+00:00'
slug: '/desarrollo-web/2011/02/html-5-nuevos-elementos-header-y-footer'
tags: ["html5"]
category: 'web-development'
excerpt: " **Nuevos elementos: Header y Footer****HEADER**El elemento header permite definir contenido que servirá como introducción al contenido principal.  Header puede aparecer más de una vez pero nunca d..."
draft: false
headerImage:
---
 **Nuevos elementos: Header y Footer**

**HEADER**

El elemento header permite definir contenido que servirá como introducción al contenido principal.  Header puede aparecer más de una vez pero nunca dentro del mismo elemento "padre".

Contenido susceptible de aparecer como header son: Títulos identificativos, logotipos, menús de navegación, índices o formularios de búsqueda

Ejemplo:

\<body\>

\<header\>

 \<h1\>Mi maravilloso blog\</h1\>

 \<nav\>

  \<ul\>

   \<li\>Artículos\</li\>

   \<li\>Acerca de\</li\>

   \<li\>Contactar\</li\>

  \</ul\>

 \</nav\>

\</header\>

\<article\>

 \<header\>

  \<h1\>Título de mi maravilloso post\</h1\>

  \<time datetime=”2011-01-04T22:04:49+01:00” pubdate\>

   Martes,4 de Enero de 2011

   \</time\>

  \</header\>

.... resto de la página

**FOOTER**

El elemento footer permite vincular información del tipo enlaces adicionales, información de copyright, autoría del documento y similares, al contenido principal.

Footer puede aparecer más de una vez pero nunca dentro del mismo elemento "padre".

\<body\>

....contenido principal

\<footer\>

\<small\>

 © 2011 Metaleros sin fronteras | Diseño web Tom araya

\</small\>

\<nav\>

 \<ul\>

  \<li\>Conciertos\</li\>

  \<li\>Entrevistas\</li\>

  \<li\>Noticias\</li\>

  \<li\>Contactar\</li\>

 \</ul\>

\</nav\>

\</footer\>

\</body\>
