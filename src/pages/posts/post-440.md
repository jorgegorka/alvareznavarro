---
title: "Meteor - Desarrollando aplicaciones web en el siglo XXI"
date: '2014-04-22T17:39:00+00:00'
slug: '/desarrollo-web/2014/4/meteor-desarrollando-aplicaciones-web-en-el-siglo-xxi'
tags: ["meteor", "rails", "mvc"]
category: 'javascript'
excerpt: "Hace unos días acabo de subir a producción mi primera aplicación web desarrollada íntegramente con Meteor.  Estas son mis impresiones después de unos meses de probar este framework de desarrollo de aplicaciones web."
draft: false
headerImage: 
---
Hace unos días acabo de subir a producción mi primera aplicación web desarrollada íntegramente con Meteor. Estas son mis impresiones después de unos meses de probar este framework de desarrollo de aplicaciones web.

## Que ha cambiado en los últimos 10 años

Una de las primeras cosas que me ha hecho replantearme [Meteor](http://meteor.com) es que la forma en la que desarrollamos aplicaciones web tiene que cambiar. Hace 10 años la tecnología y las restricciones no son en absoluto comparables a la actual.

Hace 10 años el Adsl y la fibra no tenían la penetración que tienen ahora ni, por supuesto, la velocidad actual.

Los navegadores eran todavía bastante básicos y por desgracia dominaba Internet Explorer con sus versiones 5, 5.5 y 6. Esto hacía que el uso de javascript y css fuese simbólico. De hecho, hace 10 años **una máxima era que las página debían funcionar con javascript** desactivado ya que el soporte de los navegadores era muy malo y también por razones de accesibilidad.

<figure>
  <blockquote>
    <span></span>el navegador de los usuarios se ha convertido en una poderosa herramienta que no solo procesa html sino que realiza efectos con css, ejecuta javascript de forma rápida y eficiente y gracias a las APIs de html5 es capaz de hacer cosas como guardar datos para su consulta en modo offline<span></span>
  </blockquote>

</figure>

Por lo tanto la forma de desarrollar era (y es aún así para la gran mayoría de sitios) que el cliente solicitaba una página, el servidor realiza todo el trabajo de generarla y devuelve un html con el resultado y el navegador del cliente se limita a generar la página basándose en dicho html.

Hoy en día esto ya no es así, los navegadores modernos (chrome, safari, firefox) soportan javascript de forma muy eficiente, html 5 y css3 nos han brindado infinidad de mejoras para el desarrollo de aplicaciones web tanto de escritorio como para móviles.

Es decir, el navegador de los usuarios se ha convertido en una poderosa herramienta que no solo procesa html sino que realiza efectos con css, ejecuta javascript de forma rápida y eficiente y gracias a las APIs de html5 es capaz de hacer cosas como guardar datos para su consulta en modo offline.

**Ya no tiene sentido programar como hace 10 años y hacer que el servidor soporte toda la carga de la generación de páginas**. Este proceso además de costoso en recursos es lento e impide utilizar nuestras aplicaciones cuando no hay conexión.

Por ello están apareciendo una serie de frameworks que aprovechan la potencia de los navegadores para hacer muchas de las operaciones que antes se desarrollaban en el servidor en el navegador del cliente dejando a los servidores trabajar lo mínimo imprescindible.

Frameworks como [AngularJS](https://angularjs.org/), [Ember](http://emberjs.com/) o [Backbone](http://backbonejs.org/) nos permiten trasladar gran parte de la lógica de la aplicación al lado del cliente, ahorrando recursos y ganando en velocidad por lo que proporcionamos una mayor experiencia de usuario al usuario de nuestra aplicación. El problema es que son frameworks que trabajan solo en el lado del cliente, por lo que tenemos que volver a programar todo otra vez en el lado del servidor y probablemente en otro lenguaje distinto.

## Meteor - Qué es y que ventajas aporta

Meteor es un framework que tiene en cuenta todo lo que hemos hablado anteriormente y además nos proporciona una serie de ventajas adicionales sobre otros frameworks.

**Javascript:** Esta es una grandísima ventaja, en mi opinión. Meteor está escrito en javascript sobre la base de node.js lo que nos permite utilizar el mismo lenguaje programando en el lado del servidor y en el lado del cliente.  **Nos guste o no, los navegadores solo entienden javascript** por lo que para programar en el lado del cliente solo podemos utlizar este lenguaje. Porqué no optimizar los recursos y hacer lo mismo en el lado del servidor?  Es más Meteor va más allá y permite que el mismo código que escribimos para el cliente lo podamos emplear en el servidor. Se acabó tener que escribir toda la lógica dos veces, una en javascript para el cliente y otra en el lenguaje que empleemos en el servidor (ruby, java, .net....).

**Actualización de páginas en tiempo real** : Si estamos mostrando al usuario una lista con los 10 productos más vendidos y en ese momento se produce una actualización en el servidor, el cliente verá actualizada la lista automáticamente. No es necesario recargar la página. Meteor se encarga de regenerar la página (de forma muy inteligente, haciendo los mínimos cambios posibles en el DOM) con la nueva información.

**Base de datos en el cliente** : Meteor nos permite decidir que información de nuestra base de datos queremos mostrar al usuario y se encarga automáticamente de mantener dicha información sincronizada entre el servidor y el cliente. Cuando el cliente actualiza un registro Meteor (a través de un protocolo propio llamado DDP) se encarga de sincronizar la información con el servidor y viceversa. Las ventajas que nos aporta este nuevo protocolo son inmensas. Podemos trabajar en el lado del cliente con una copia de los datos y reordenar, filtrar, buscar, etc... sin necesidad de llamar al servidor. Se acabó el lidiar con protocolos REST.

**Aplicaciones más rápidas** : El servidor ya no tiene que estar generando html para cada petición, simplemente se preocupa de tener los datos sincronizados. Por lo tanto la cantidad de información que viaja en cada petición es menor y el tiempo de proceso también lo que hace que el cliente note un aumento de velocidad.  Además Meteor ha desarrollado un mecanismo llamado "Latency compensation" que se encarga de que cuando se realiza un cambio (por ejemplo, la modificación de un registro) el cliente ve automáticamente el resultado de dicha modificación. Si como resultado de procesar dicha modificación en el servidor existe algún problema o el resultado cambia, el cliente es actualizado automáticamente con los datos del servidor.

### Resumen

Meteor saca partido de todas las tecnologías actuales que no estaban disponibles hace 10 años.

Nos permite escribir aplicaciones web más eficientes, versátiles y modernas.  La comunidad, sin ser todavía amplia si que es lo suficientemente grande como para que existan bastantes librerías y utilidades, además de recursos y documentación (en inglés).

Os dejo aquí algunos enlaces que os pueden servir de interés si queréis saber un poco más de este framework de desarrollo, que para mí, desde ahora es el framework que uso para nuevos proyectos.

[https://www.meteor.com/](https://www.meteor.com/)

[http://www.youtube.com/user/MeteorVideos](http://www.youtube.com/user/MeteorVideos)

[https://www.discovermeteor.com/](https://www.discovermeteor.com/)

[http://www.meteorpedia.com/read/Main\_Page](http://www.meteorpedia.com/read/Main_Page)

[https://www.eventedmind.com/](https://www.eventedmind.com/)

[http://yauh.de/articles/376/best-learning-resources-for-meteorjs](http://yauh.de/articles/376/best-learning-resources-for-meteorjs)

[http://www.meetup.com/Meteor-Madrid/](http://www.meetup.com/Meteor-Madrid/)

