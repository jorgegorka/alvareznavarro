---
title: "Acabaremos todos programando en Javascript?"
date: '2010-12-17T09:58:00+00:00'
slug: '/desarrollo-web/2010/12/acabaremos-todos-programando-en-javascript'
tags: ["javascript"]
category: 'Desarrollo Web'
excerpt: "[caption id= align=alignnone width=] ![Javascript]("
draft: false
headerImage: 
---
[caption id="" align="alignnone" width=""] ![Javascript](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/53385c63e4b080dbf7df7441/5303cf38e4b0400995a88b2d/1392758584268/javascript-scaled600.jpg) Javascript[/caption]

Cada día nos acercamos un poco más al futuro, para comprobar que es exactamente igual que el pasado.

Por qué digo esta tontería, pues porque esta claro que el futuro próximo pasa por volver a usar terminales tontos, dotados exclusivamente de un navegador que se encarga de cargar todas las aplicaciones que usamos y que están en servidores remotos.

Yo creo que ese modelo está lleno de ventajas ya que permite independencia tanto de localización física como de dispositivo. Está claro que siempre quedarán irreductibles galos que preferirán todo en local, pero cuando salió el automóvil también había gente que prefería ir a los sitios a lomos de su caballo.

Pero para que este modelo funcione debemos proporcionar a los usuarios de las aplicaciones una mejor experiencia de uso que las aplicaciones instaladas localmente en sus ordenadores. Para conseguir esta mejor experiencia de uso creo que hay dos tecnologías que van a jugar un papel fundamental:

[HTML 5](http://es.wikipedia.org/wiki/HTML_5)

y

[Javascript](http://es.wikipedia.org/wiki/Javascript)

.

El HTML 5 porque definitivamente deja de ser un Lenguaje de Marcado para convertirse en una herramienta de desarrollo de aplicaciones web "serias": Las nuevas pautas para la creación de formularios, la integración del multimedia, los websockets, etc..... La web ya no es solamente una serie de páginas de texto enlazadas entre sí (dejo de ser eso hace mucho tiempo). Algunos dicen que HTML 5 traerá la web semántica aunque en mi opinión eso de la web semántica es el nuevo hype absurdo, más humo que poder vender.

El otro pilar en que se fundamenta esta mejora en la experiencia de usuario es el javascript. Hace 8 años era inviable utilizar javascript para desarrollar aplicaciones web. Las diferencias entre el javascript de Netscape Navigator e Internet Explorer eran muy grandes y existía gran cantidad de gente que no lo tenía habilitado. Por lo tanto debías asegurarte que tu aplicación web funcionaba sin javascript si querías que fuese vista y usada por el máximo de personas.

Luego llegaron las librerías como P

[rototype](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)

y

[JQuery](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)

que simplificaban el uso de javascript y encapsulaban esas diferencias (algunas todavía existentes). Los nuevos navegadores se toman muy en serio javascript e incluyen unos motores de ejecución optimizados y eficientes lo que permite su uso intensivo.  Y cada día nos encontramos con nuevas y sorprendentes mejoras que dotan a los navegadores de nuevas funcionalidades que ayudarán a crear más y mejores aplicaciones web como por ejemplo la

[integración de un API para gráficos 3D](http://blog.chromium.org/2010/12/webgl-now-in-beta-here-comes-3d-web.html)

.

Hoy en día es posible crear aplicaciones web en las que toda la lógica (o la mayor parte) reside en ficheros javascript lo que evita que el usuario esté realizando constantes peticiones al servidor. Otros usos, como

[Node.js](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)

permiten la creación de aplicaciones web mucho más complejas y dinámicas. Además empleando el API de almacenamiento en local que define HTML5 permitiré que mi aplicación te funcione cuando no estás conectado a la red y se sincronice automáticamente cuando vuelvas a estar online.

Y si tengo que programar gran parte de la lógica de mi aplicación en javascript, porqué no programarla toda, incluso en la parte de servidor y así no tengo que estar tratando con lenguajes diferentes según donde resida dicha lógica.

**Resumen: **

Hoy en día javascript es una parte muy importante en el desarrollo de aplicaciones web y la tendencia es que lo sea cada vez más. Los navegadores modernos como Safari, Chrome o Firefox permiten un uso eficiente de javascript con independencia del dispositivo utilizado.

Además existen librerías que nos ayudan a programar javascript de forma agradable e incluso herramientas como

[CoffeeScript](http://jashkenas.github.com/coffee-script/)

que es un lenguaje que permite una sintaxis más amigable y que luego se compila a javascript.

Otras como JavascriptMVC nos permiten utilizar paradigmas aceptados y empleados en el desarrollo web.

La tendencia es aumentar la lógica en el lado cliente para poder permitir el uso de las aplicaciones web en entornos en los que no hay conectividad. Por lo tanto no parece descabellado pensar que si toda la lógica de una aplicación web en el lado del cliente está programada en javascript, también pueda estarlo la del lado servidor.

