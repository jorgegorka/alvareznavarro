---
title: "Reescribe tus urls en Google Analytics con _trackPageView"
date: '2011-06-20T10:21:51+00:00'
slug: '/blog/2011/06/reescribe-tus-urls-en-google-analytics-con-_trackpageview'
tags: ["google analytics"]
category: 'marketing'
excerpt: "Cuando escribimos la url de una página lo hacemos pensando en que sea legible, si es posible fácil de recordar por los usuarios y que además de un solo vistazo nos pueda decir de que va el contenido, e..."
draft: false
headerImage:
---
Cuando escribimos la url de una página lo hacemos pensando en que sea legible, si es posible fácil de recordar por los usuarios y que además de un solo vistazo nos pueda decir de que va el contenido, es decir que sea autoexplicativa. Sin embargo estas urls, que son totalmente válidas y correctas, no aportan toda la información que nos puede interesar a la hora de realizar un análisis del contenido.

**Reescribir urls con \_trackPageView**

Supongamos que tenemos una librería y las páginas web de cada libro se generan de la siguiente forma: _www.milibreria.com/la-importancia-de-llamarse-ernesto-oscar-wilde.html_Esta url aporta a los visitantes información clara y relevante sobre el contenido que pueden encontrar si visitan esa página.

A la hora de realizar un análisis de contenido podríamos saber de forma sencilla cuantas veces se ha visitado esa página o incluso filtrar para saber cuantas obras de Oscar Wilde se han visitado. Sin embargo nos puede interesar conocer los datos por tipo de obra, categoría, género, etc...

Una primera solución podría ser añadir toda esa información a la url y generar urls del tipo_www.milibreria.com/comedia/ficcion/ingles/la-importancia-de-llamarse-ernesto-oscar-wilde.html _Sin embargo así estamos generando urls menos amigables para los visitantes y mucho más difíciles de recordar.

Para solventar este problema podemos utilizar la posibilidad que nos ofrece Google Analytics de sobreescribir la dirección url mediante[el uso de \_trackPageView](http://code.google.com/apis/analytics/docs/gaJS/gaJSApiBasicConfiguration.html#_gat.GA_Tracker_._trackPageview "trackPageView API").

Al generar la página añadiremos un parámetro a la llamada a \_trackPageView con el nombre de nuestra url y de esta forma los visitantes seguirán viendo urls amigables y entendibles y nosotros internamente podremos generar urls que nos aporten mucha más información. Siguiendo con el ejemplo de la librería, cuando generamos la página de_www.milibreria.com/la-importancia-de-llamarse-ernesto-oscar-wilde.html_cambiaremosla llamada a

\_gaq.push(['\_trackPageview']);

por

\_gaq.push(['\_trackPageview', '/comedia/ficcion/ingles/oscar-wilde/la-importancia-de-llamarse-ernesto']);

Ahora al analizar el contenido en Google Analytics dispondremos de información más completa y podremos realizar informes de páginas más visitadas filtradas por género, categoría y conocer mucho mejor los gustos de nuestros visitantes.

**Procesos con una única url**

Otro caso en el que \_trackPageView es de gran utilidad, es cuando un proceso emplea siempre la misma url pero con diferentes parámetros.

Supongamos que nuestro proceso de pago se divide en tres pasos pero en los tres pasos se usa la misma url cambiando los parámetros, por ejemplo:_www.milibreria.com/proceso-pedido?paso=1 __www.milibreria.com/proceso-pedido?paso=2__ www.milibreria.com/proceso-pedido?paso=3_

Si sobreescribimos las urls empleando \_trackPageView podríamos guardar la información de la siguiente forma:

\_gaq.push(['\_trackPageview', '/proceso-pedido/datos-cesta']);

\_gaq.push(['\_trackPageview', '/proceso-pedido/datos-cliente']);

\_gaq.push(['\_trackPageview', '/proceso-pedido/confirmacion-pago']);

De esta forma obtenemos información más precisa y además podemos definir embudos de conversión mucho más claros y que nos permiten controlar el proceso de compra con mayor eficacia.

**Resumen**

Una de las tareas que un buen analísta debe hacer es [obtener información de calidad](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf3de4b0400995a88b56/1392758589187/?format=original "Implantación de herramientas de medición") que nos aporte conocimiento y nos ayude a proponer soluciones que se conviertan en beneficio real y medible.

Un uso inteligente de \_trackPageView nos ayudará a obtener la información que necesitamos para poder aportar valor.
