---
title: "Medir el tiempo de carga de tu página con Google Analytics"
date: '2011-05-06T06:52:00+00:00'
slug: '/blog/2011/05/medir-el-tiempo-de-carga-de-tu-pagina-con-google-analytics'
tags: ["google analytics"]
category: 'Analítica'
excerpt: "[caption id= align=alignnone width=300.0][![Test-Page-Load-Time]("
---
[caption id="" align="alignnone" width="300.0"][![Test-Page-Load-Time](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf3ce4b0400995a88b4d/1392758824328/Test-Page-Load-Time.jpg)](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf3ce4b0400995a88b4d/1392758588288/Test-Page-Load-Time.jpg?format=original) Test-Page-Load-Time[/caption]

La nueva versión de [Google Analytics](http://www.google.com/intl/es/analytics/) implementa una novedosa métrica: **[El tiempo de carga de la página](http://analytics.blogspot.com/2011/05/measure-page-load-time-with-site-speed.html)**.

Este informe es muy interesante y necesario ya que nos ayudará a mejorar la calidad de nuestra web. Veamos porqué.

**Beneficios de conocer el tiempo de carga de una página.**

Los motivos por los que nos interesa conocer el tiempo de carga de una página son tres:

1. **Usuarios más felices** : Aquí tienes [algunos ejemplos](http://www.pearanalytics.com/blog/2009/how-webpage-load-time-related-to-visitor-loss/) que demuestran que[la paciencia de quienes visitan nuestra web es limitada](http://www.useit.com/alertbox/response-times.html).

- Un estudio de Amazon en el año 2007 reveló que por cada 100 milisegundos de incremento en el tiempo de carga de una página las ventas se reducían en un 1%.
- Google descubrió que incrementando el número de resultados que ofrece de 10 a 30 incrementaba el tiempo de carga de la página en medio segundo y eso suponía una disminución de tráfico del 20%.
- Un estudio de Akamai indica que puedes perder hasta el 33% de tus visitantes si tu página tarda más de 4 segundos en cargar.

2. **Mejor posicionamiento en Google** : [Google tiene en cuenta el tiempo de carga de nuestras páginas](http://www.mattcutts.com/blog/site-speed/) como indicador de calidad y lo emplea en su ranking de posicionamiento. Si nuestras páginas cargan rápido estamos demostrando que somos una web seria y eficiente y por lo tanto es lógico que Google nos muestre más arriba en sus resultados.

3. **Descubrir cuellos de botella** : Saber que páginas tardan más en cargar nos sirve para detectar problemas y conocer sitios de nuestra web donde debemos corregir u optimizar su funcionamiento. Un informe que resultará esencial es el de las páginas más vistas junto a su tiempo de carga. [Optimizar aquellas páginas que se visitan muchas veces](http://sixrevisions.com/web-development/decrease-webpage-load-times/) ayudará a mejorar tanto el rendimiento de nuestros servidores como la experiencia de uso de nuestra web. Recientemente mi compañero [Francisco Santos](http://www.linkedin.com/in/frsantos) ha dado una estupenda charla donde habla de como mejorar y optimizar el rendimiento de una web. Descubrir los lugares susceptibles de mejora y medir el tiempo de carga de las páginas, tanto desde el lado del servidor como desde el lado del cliente, es una estrategia ganadora.

**Implementando la medición del tiempo de carga de una página en Google Analytics**

**Por defecto el informe de velocidad de carga de páginas está desactivado**. Debemos modificar el código javascript de Google Analytics para comenzar a medir el tiempo de carga de las páginas. (ver nota al pié)

Hacer esto es muy sencillo y no se requieren excesivos conocimientos técnicos.

Si utilizamos la versión asíncrona de Google Analytics debemos añadir una línea tras la llamada a trackPageiew():

\_gaq.push(['\_trackPageview']);

\_gaq.push(['\_trackPageLoadTime']);

Si utilizamos la versión "tradicional" del código de Google Analytics el cambio es muy similar debiendo añadir la línea que dice \_trackPageLoadTime:

pageTracker.\_trackPageview();

pageTracker.\_trackPageLoadTime();

Por supuesto este cambio deberá realizarse en todas las páginas que queramos medir y lo más recomendable es instalarlo en todas las páginas.

Una vez añadido, Analytics empezará a contar [el tiempo de carga de nuestras páginas](http://www.google.com/support/analyticshelp/bin/answer.py?hl=en&answer=1205784&topic=1120718&utm_source=gablog&utm_medium=blog&utm_campaign=newga-blog&utm_content=sitespeed) y tendremos acceso a informes como el siguiente:

 [caption id="" align="alignnone" width=""] ![Ga_page_speed](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf3ce4b0400995a88b50/1392758588516/ga_page_speed-scaled600.png) Ga\_page\_speed[/caption] 

**Resumen**

**La velocidad de respuesta de nuestra web es vita** l. Ofrecer a nuestros visitantes una experiencia de uso de nuestra web agradable, positiva y rápida es fundamental. Conocer a priori que páginas serán las más visitadas, que secciones las más vistas es muy complicado.  **Debemos establecer una política de análisis y mejora contínua**. Por eso es muy importante no solo centrarnos en el desarrollo y lanzamiento de una web, sino en su mantenimiento. Contar con [partners tecnológicos de primer orden](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original) que nos ofrezcan además de desarrollar y lanzar nuestra web también capacidad de mantenerla y mejorarla nos ayudará a conseguir esa mejora, ese medio segundo extra que pueden marcar la diferencia entre el éxito y el fracaso de nuestro proyecto.

## Actualización 19-11-2011

**Google Analytics ha actualizado su script y ya no es necesario añadir ningún código a las páginas. El tiempo de carga se mide de forma automática.**

