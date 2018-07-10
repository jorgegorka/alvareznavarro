---
title: "Master Analítica Web semana 12 - Módulo Técnico"
date: '2011-07-07T00:35:47+00:00'
slug: '/blog/2011/07/master-analitica-web-semana-12-modulo-tecnico'
tags: ["garb", "master analítica web"]
category: 'business'
excerpt: "Saber implementar correctamente una herramienta de analítica es fundamental para conseguir extraer toda la información que una web nos puede aportar. Normalmente nos limitamos a añadir el código encarg..."
draft: false
headerImage:
---
Saber implementar correctamente una herramienta de analítica es fundamental para conseguir extraer toda la información que una web nos puede aportar. Normalmente nos limitamos a añadir el código encargado de contabilizar las páginas que nos proporciona la herramienta de medición, pero esto no es suficiente. Existen diversas situaciones en las que debemos personalizar, modificar y añadir más elementos a una página web para poder controlar correctamente lo que sucede en ella.

En posts anteriores he hablado de como realizar modificaciones al código nos puede aportar muchas ventajas como:[Reescribir las urls con \_trackPageView](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf3de4b0400995a88b59/1392758589581/reescribe-tus-urls-en-google-analytics-con-tr?format=original "reescribir urls")o[conocer el tiempo de carga de nuestras páginas](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf3de4b0400995a88b5c/1392758589780/medir-el-tiempo-de-carga-de-tu-pagina-con-goo?format=original "medir tiempo carga de páginas con analytics").

Para conocer a fondo todos los entresijos de las herramientas, las diferentes formas de medición, el uso de las A.P.I., etc. contamos con la presencia de[Andrés Flores](http://kschool.com/analitica-web/profesores/andres-flores/ "Andrés Flores"). Andrés trabaja de analista web en Privalia y es todo un experto conocedor del funcionamiento de la mayoría de herramientas de analítica del mercado y de su correcta implementación.

Andrés nos explicó como etiquetar correctamente formularios, películas Flash, páginas virtuales, transacciones de e-commerce, sitios multidominio, etc...

Nos habló de las consideraciones a la hora de seleccionar una herramienta:

- Limitaciones en la captura
- Limitaciones en el reporting
- SLA (Software License Agreement)
- Tiempo real
- Presupuesto

O de los diferentes pasos en la gestión de la vida de los datos:

- Recolección
- Almacén
- Proceso
- Explotación

Estuvimos también haciendo pruebas con el API de Google Analytics y pudimos comprobar que para automatizar tareas de carga de datos (que nos llevarían mucho tiempo de forma manual) e incluso para extraer información adicional, que no se presenta en los informes de Google, es necesario conocer y manejar con soltura el API.

Estuve probando el plugin[Garb](https://github.com/vigetlabs/garb "google analytics rails wrapper")para ruby on rails y lo cierto es que es bastante sencillo acceder a toda la información del API de Google Analytics y procesar y automatizar la recolección de información sin necesidad de hacerlo de forma manual.
