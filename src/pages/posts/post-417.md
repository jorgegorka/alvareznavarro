---
title: "La paginación y el SEO"
date: '2010-10-14T14:10:00+00:00'
slug: '/desarrollo-web/2010/10/la-paginacion-y-el-seo'
tags: ["seo"]
category: 'web-development'
excerpt: " **Actualizado el 23-11-2011** La paginación es una parte muy importante de sitios web que contienen gran cantidad de información ya que permite dividir cantidades muy grandes de datos en partes más pe..."
draft: false
headerImage:
---
 **Actualizado el 23-11-2011** La paginación es una parte muy importante de sitios web que contienen gran cantidad de información ya que permite dividir cantidades muy grandes de datos en partes más pequeñas y manejables por los usuarios. Además puede servir también como una herramienta de navegación ya que si, por ejemplo, vemos un listado de productos ordenados por precio de menor a mayor, visitando la última página encontraremos los de mayor precio.

**Cómo debemos organizar la paginación de nuestra web?**

En primer lugar y como en cualquier cosa que hagamos en nuestra web debemos pensar en nuestros usuarios. Y después veremos como conseguir que aquello que es lo mejor para nuestros usuarios sea también accesible y útil para los buscadores que visitan nuestra web.

 [caption id="" align="alignnone" width=""] ![Amazon](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/53385c63e4b080dbf7df7441/5303cf37e4b0400995a88b1c/1392758583169/amazon-com-scaled600.jpg) Amazon[/caption]

**Elementos de una buena paginación**

Los elementos principales de una buena paginación son:

- Una lista ordenada y numerada correlativamente
- Un indicador de en que página nos encontramos
- Unos enlaces a las páginas siguiente y anterior

Con estos tres elementos tenemos más que suficiente para conseguir una buena paginación. Clara y sencilla de usar. Veamos en detalle cada uno de ellos.

**Una lista ordenada y numerada correlativamente.**

Es el elemento principal de nuestra paginación. Dicha lista sirve para que el usuario sepa de forma sencilla la cantidad de resultados que tiene a su disposición. Dependiendo de la búsqueda el usuario sabrá que o bien hay muchos resultados y le conviene refinar un poco mejor su búsqueda o bien era esto precisamente lo que quería.

 [caption id="" align="alignnone" width=""] ![Youtube](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/53385c63e4b080dbf7df7441/5303cf37e4b0400995a88b1f/1392758583365/youtube-scaled600.jpg) Youtube[/caption]

Muchas veces, debido al gran número de resultados, es inviable mostrar la lista con todas las páginas disponibles. En estos casos lo mejor es mostrar las 8 ó 10 primeras páginas una elipsis (...) y las 2 ó 3 últimas páginas.

No siempre es necesario utilizar números correlativos. Si, por ejemplo, nuestro sitio muestra recetas de cocina y dichas recetas están ordenadas alfabéticamente es mejor sustituir los números por las letras del alfabeto, que aportan mayor información al usuario y le permiten navegar hasta la receta de su interés de forma más rápida.

Si mostramos elementos ordenados cronológicamente podemos sustituir los números por los nombres de los meses, por años, etc...

También recomendamos que las páginas que ya hemos visitado se presenten en otro color distinto que facilite al usuario saber si ya había estado en dicha página antes.

 [caption id="" align="alignnone" width=""] ![Readwriteweb](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/53385c63e4b080dbf7df7441/5303cf37e4b0400995a88b22/1392758583565/readwriteweb-scaled600.jpg) Readwriteweb[/caption]

**Un indicador de en que página nos encontramos**

Es un elemento fundamental ya que al navegar por una web empleando la paginación perdemos fácilmente la referencia de en que página nos encontramos.

 ![Google](http://jorgegorka.files.wordpress.com/2010/10/google-scaled600.jpg?w=300)

**Enlaces a las páginas siguiente y anterior**

Son muy empleados por los usuarios ya que facilitan la navegación. Si queremos avanzar en lugar de tener que prestar atención a la página en la que nos encontramos y pulsar en el número siguiente, vamos directamente al enlace de siguiente y lo pulsamos.

Es recomendable añadir unas flechas indicadoras a las palabras siguiente \>\> y \<\< anterior que también sean clickables.

Si nuestra paginación no muestra un enlace a las últimas páginas puede ser interesante añadir unos enlaces de primero / último. Si bien no es imprescindible y solo merecen la pena si aportan valor y por el tipo de ordenación el usuario puede tener interés en ir directamente a la última o últimas páginas.

**Accesibilidad**

No hay una normativa específica para la paginación ( ni la norma 508 ni las [WCAG 2.0](http://www.w3.org/TR/WCAG20/) dicen nada específicamente ) pero parece claro que al tratarse de una lista lo mejor es emplear la etiqueta ul o bien si mostramos todas las páginas podemos emplear ol.

Los elementos de esta lista deberán ser accesibles mediante teclado.

**SEO**

Existe gente que recomienda etiquetar los enlaces de la paginación como "nofollow" y delegar en el sitemap el acceso de los buscadores a todas las páginas. L

 [caption id="" align="alignnone" width=""] ![Elpais](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/53385c63e4b080dbf7df7441/5303cf37e4b0400995a88b25/1392758583771/elpais-com-scaled600.jpg) Elpais[/caption]

o cierto es que esta no es una buena práctica ya que impedimos que el Page Rank "fluya" a través de nuestra web desde las páginas de resultados hacia las páginas con contenido.

En las etiquetas title y description de nuestro head deberemos indicar que se trata de una paginación mostrando la página en la que nos encontramos y si es relevante el total de resultados/páginas disponibles.

Búsquedas muy parecidas o diferentes ordenaciones de los resultados pueden hacer que nuestro contenido se presente de muchas formas, siendo realmente el mismo contenido y como sabemos a Google no le gusta que dupliquemos contenido innecesariamente. Para evitar mostrar contenido duplicado lo mejor es emplear la opción de personalizar parámetros que nos ofrece la herramienta [Webmaster Tools](http://www.google.com/webmasters/tools/).

Si, por ejemplo, nuestra paginación permite ordenar a los usuarios por fecha, tanto ascendente como descendente, desde Webmaster Tools podemos decirle a Google que solo tenga en cuenta la ordenación ascendente e ignore la descendente ya que el contenido es exactamente el mismo.

 ![Webmastertools](http://jorgegorka.files.wordpress.com/2010/10/webmastertools-scaled600.jpg?w=300)

Conviene aclarar que Google entiende perfectamente que ver unos resultados ordenados por fecha o bien ordenados por nombre no son los mismos resultados y esto no afecta al hecho de tener contenido duplicado.

**Resumen**

Siguiendo unas pequeñas normas básicas es posible realizar una paginación que no solo permita a nuestros visitantes encontrar lo que buscan de forma más eficiente sino que además ayudará a mejorar la indexación de nuestro sitio por parte de Google.

**Actualización: 23-11-2011**

Google ahora entiende y soporta el [uso de rel="prev" y rel="next" en las paginaciones](http://googlewebmastercentral.blogspot.com/2011/09/pagination-with-relnext-and-relprev.html), que como bien indica @supercoco9 en los comentarios es una forma estándar y sencilla de añadir contexto y semántica a los enlaces de paginación.

Además y en determinados casos Google comenta que para mejorar la experiencia del usuario intentará [mostrar una página con todo el contenido en caso de que exista tanto la versión paginada como la versión con todo el contenido](http://googlewebmastercentral.blogspot.com/2011/09/view-all-in-search-results.html) (en un artículo largo, por ejemplo). En este caso debemos usar la etiqueta _canonical_ para apuntar desde las distintas páginas con el contenido paginado a la página con todo el contenido.

 [caption id="" align="alignnone" width=""][![pagination_view_all](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/53385c63e4b080dbf7df7441/5303cf37e4b0400995a88b28/1392758583977/pagination_view_all.jpeg)](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf37e4b0400995a88b28/1392758583977/pagination_view_all.jpeg?format=original) pagination\_view\_all[/caption]
