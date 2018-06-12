---
title: "Medir las páginas de error con Google Analytics"
date: '2011-03-16T07:27:13+00:00'
slug: '/blog/2011/03/medir-las-paginas-de-error-con-google-analytics'
tags: ["google analytics"]
category: 'desarrollo-web'
excerpt: "Me he inscrito al Master de Analítica Web que imparte Secuoyas"
---
Me he inscrito al [Master de Analítica Web](http://www.secuoyasacademy.com/master-analitica-web.html) que imparte [Secuoyas](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original). Creo que tiene unos contenidos muy interesantes y unos profesores de primer nivel así que doy por seguro que será un tiempo muy bien aprovechado.

Como preparación para el master me estoy estudiando en profundidad el funcionamiento de Google Analytics, AdWords y Website Optimizer. Creo que si conozco las herramientas será mucho más fácil aplicar y sacar partido a los conocimientos que recibiré.

Leyendo "[Advanced Web Metrics with Google Analytics](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)"he encontrado una forma de medir tanto las páginas que están dando error en nuestra web como las páginas o enlaces que están conduciendo a los usuarios a dichos errores.

**Controlar páginas de error y enlaces rotos Google Analytics**

Cuando ocurre un error en nuestra web normalmente servimos una página genérica indicando el error al usuario y que alternativas u opciones tiene y ayudándole para que pueda llegar a la página que busca.

En estas páginas (las dos más comunes son la 404 y la 500) añadiremos un pequeño cambio en el código de seguimiento de Google para poder saber más de dicho error.

Buscaremos en el código de seguimiento de Google que hemos añadido a nuestra página (normalmente justo antes de la etiqueta \</body\>) el método \_trackPageview y le añadiremos los siguientes parámetros \_trackPageview("error " + document.location.pathname);

Si queremos controlar el tipo de error ocurrido podemos ser más específicos y por ejemplo en la página de error 404 (la que ocurre cuando una página no se encuentra) pondremos esto:\_trackPageview("error 404" + document.location.pathname);

El código d_ocument.location.pathname_ guarda la dirección de la página que ha provocado el error.

De esta forma el error quedará registrado y será muy sencillo aplicar filtros en Analytics para ver únicamente las páginas con error.

Además de eso si para cada página de error seleccionamos el resumen de navegación podremos ver en que página se encontraba el usuario antes de producirse el error lo que nos será de gran utilidad para detectar enlaces rotos o posibles problemas.

Un truco sencillo de implementar y de gran utilidad para conocer y detectar posibles problemas en nuestro sitio web.

La información de este truco está sacada del libro "[Advanced Web Metrics with Google Analytics](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)" escrito por [Brian Clifton](http://www.advanced-web-metrics.com/blog/about-brian-clifton/). Un libro excelente, muy bien escrito y de recomendada lectura para todo aquel que quiera conocer en profundidad el funcionamiento de Google Analytics.
