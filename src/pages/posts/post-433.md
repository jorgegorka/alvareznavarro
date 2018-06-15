---
title: "AngularJS y el futuro del desarrollo web"
date: '2012-10-17T20:24:12+00:00'
slug: '/desarrollo-web/2012/10/angularjs-y-el-futuro-del-desarrollo-web'
tags: ["angularjs", "javascript"]
category: 'Desarrollo Web'
excerpt: "El desarrollo web pasa por aplicaciones corriendo en el navegador del cliente capaces de trabajar con y sin conexión y en cualquier dispositivo. AngularJS es el futuro del desarrollo web."
draft: false
headerImage: 
---
![javascript framework](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf50e4b0400995a88c4a/1392758608721/AngularJS-300x84.png?format=original "AngularJS framework")Estamos desarrollando aplicaciones web con arquitecturas concebidas hace más de 10 años. En el mudo actual con todo tipo de dispositivos, tamaños de pantallas, formas de uso (táctil, no táctil, offline, online...) quizás no sea la forma más adecuada.<!--more-->

**El problema**

Hace 2 años publiqué un post en el que hablaba sobre la necesidad de [cambiar el modelo cliente/servidor en el desarrollo web](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf50e4b0400995a88c4d/1392758608911/?format=original "programación Javascript"), donde toda la lógica de la aplicación reside en el servidor, para tender hacia un modelo donde la lógica reside en el cliente y permite el uso de aplicaciones web incluso cuando no hay conexión a Internet.

Con el auge de los dispositivos móviles el uso de aplicaciones web cuando no hay conexión se convierte en algo necesario.

Comentaba en dicho post que hoy por hoy en los navegadores web solo se puede programar en Javascript y por lo tanto si vamos a desarrollar nuestra aplicación en Javascript para que esté disponible en el lado del cliente, también parece lógico desarrollar en dicho lenguaje en el lado del servidor para estandarizar y aprovechar al máximo nuestro conocimiento del lenguaje.

**La solución**

Hasta ahora no había visto ninguna tecnología que permitiese realizar este tipo de desarrollo de forma eficiente y aunque existen muchos frameworks de desarrollo web en Javascript casi todos se basan en el modelo actual cliente/servidor.

[AngularJS](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original "framework de desarrollo web") cambia este [tipo de concepto](http://docs.angularjs.org/guide/concepts "angularjs concepts") y es un framework que permite dotar de un mayor peso al cliente web y además lo hace de una forma eficiente y sencilla.

Como principal novedad aporta una extensión del leguaje HTML que le permite manipular datos.

Hasta ahora HTML permitia un marcado del tipo de datos a representar, su contenido y el aspecto. AngularJS añade el [tratamiento de datos](http://docs.angularjs.org/guide/compiler "extension html") a esta ecuación y el navegador ya dispone de información suficiente como para saber como mostrar todos los registros de un array o filtrar los registros para mostrar un subconjunto de ellos, por poner 2 ejemplos.

![](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf51e4b0400995a88c50/1392758609125/view_component-300x209.png?format=original "AngularJS view component")

Otra característica relevante es que la conexión entre los datos en el navegador y nuestro modelo [se realiza de forma automática y bidireccional](http://docs.angularjs.org/guide/dev_guide.mvc.understanding_view "vistas en angularjs"), no tenemos que actualizar de forma manual nada, angularjs actualizará automáticamente nuestra vista cuando se produzcan cambios en el modelo y viceversa. En el modelo actual de desarrollo cualquier cambio en el navegador del cliente implica enviar esos datos al modelo y repintar de nuevo la parte actualizada para reflejar esos cambios. Todo ese trabajo se realiza automáticamente en AngularJS sin necesidad de repintar ni actualizar manualmente.



AngularJS está desarrollado por Google lo que si bien no le garantiza el éxito si que garantiza un producto de calidad, con recursos y soporte. Además quien impide a Google incluir en su navegador Chrome todas estas funcionalidades de forma nativa.

**Resumen**

Los grandes avances en el desarrollo de aplicaciones web dan más y más peso a Javascript como lenguaje de desarrollo. No voy a entrar en el debate, estéril por otra parte, de si Javascript es un lenguaje adecuado y bien construido. Es el lenguaje que entienden todos los navegadores y por lo tanto la única alternativa para desarrollar en el lado del cliente.

AngularJS pone a nuestro alcance la posibilidad de desarrollar aplicaciones web que proporcionan una mejor experiencia a quienes la usan, que debe ser la finalidad de todo desarrollador web. En mi opinión es hacía este tipo de desarrollos hacía donde avanzaremos en un futuro cercano.

**Actualización: 1 julio 2013**

He escrito un post sobre [como crear una aplicación AngularJS desde cero](/jorge-alvarez-moreno-1/2013/07/como-instalar-angularjs-desde-cero "instalar angularjs paso a paso").



