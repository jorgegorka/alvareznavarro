---
title: "HTML 5 - Elementos obsoletos"
date: '2011-01-17T06:41:00+00:00'
slug: '/desarrollo-web/2011/01/html-5-elementos-obsoletos'
tags: []
category: 'Desarrollo Web'
excerpt: "Inicio hoy una serie de posts sobre HTML5 tomando como base [la charla]( dí en [Aspgems]("
draft: false
headerImage: 
---
Inicio hoy una serie de posts sobre HTML5 tomando como base [la charla](http://www.slideshare.net/jorgegorka/presentacin-en-aspgems-html5)que dí en [Aspgems](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original) el día 12/1/11 y en los que intentaré profundizar en los principales aspectos de la especificación HTML 5.

Al ser [una especificación](http://dev.w3.org/html5/spec/Overview.html) que está siendo debatida, modificada y actualizada inevitablemente algunas de las cosas que en estos posts se mencionen acabarán siendo incorrectas y/o incompletas. Intentaré mantener los posts actualizados y te invito a utilizar los comentarios para indicarme cualquier cambio o mejora.

Presentación y contenido

HTML 5 hace especial hincapié en separar presentación y contenido. Para elloconvierte en obsoletos muchos elementos y atributos que todavía encontramos frecuentemente en gran parte de las páginas web. La gran mayoría de editores web wysiwyg hacen uso y abuso de estos elementos.

Separar presentación y contenido es una norma básica y un indicador de la calidad de una página web. Aquellas webs que lo mezclan presentan 3 problemas fundamentales:

**Mala accesibilidad**

Cuando hablamos de accesibilidad tendemos a pensar que esto solo afecta a los usuarios con alguna discapacidad física sin darnos cuenta de que todos nos convertimos en discapacitados muchas veces a lo largo del día. Navegar sin volumen porque estamos en una sala compartida, navegar utilizando mal el puntero porque vamos en el metro o andando por la calle, tipos de letra ilegibles en un smartphone, webs en flash que no se ven en los ipad, iphone, etc....

**Mayor coste de mantenimiento**

Las webs que mezclan el contenido y la presentación son mas caras de crear y de mantener. Si queremos cambiar el color de un texto, el tamaño de letra de un menú, etc... debemos repasar y modificar todas las páginas del sitio web mientras que hacer lo mismo en una web bien hecha requiere modificar un único fichero CSS.

 

**Mayor tamaño de página**

Al incluir la presentación en el contenido nos vemos obligados a escribir código redundante que detalle la apariencia de los elementos en cada una de las páginas donde aparecen.

 

La gran mayoría de elementos empleados para la presentación se han eliminado de HTML 5, excepto el elemento style y el atributo style. Otros han cambiado su significado y ya no denotan la apariencia sino que definen el tipo de contenido que incluyen. Estos son los elementos obsoletos:

 

Listado de elementos obsoletos

**basefont,big,center,font,s,strike,tt,u,frame,frameset,noframes,acronym,applet,dir,align,link,vlink,alink,**

**bgcolor,height,width,scrolling,valign,hspace,vspace,cellpadding,cellspacing,border,target,longdesc**

Elementos que cambian su significado

**small**

Desde ahora el elemento small se debe emplear para hacer referencia a condiciones legales, informaciones de copyright, exenciones de responsabilidad, etc..  Normalmente en España denominamos a eso como "letra pequeña" por lo que resultará muy sencillo para nosotros aplicarlo de forma correcta.

Ejemplo:

\<small\>(c) 2011 Nuestra empresa. Nuestra empresa no se hace responsable de los comentarios realizados en nuestro blog. Siendo estos, responsabilidad de quien lo realiza\</small\>

**b**

El elemento b se empleará cuando deseemos resaltar algún aspecto de un parrafo pero sin otorgarle importancia semántica al elemento resaltado.  La norma indica que b debe usarse como último recurso y emplear los encabezados (h1..h6), el elemento em, strong o mark en función del tipo de contenido a resaltar.

**i**

Emplearemos i cuando queramos indicar algun aspecto diferenciador en el parrafo actual. Por ejemplo: un nombre propio, una frase en otro idioma, una idea, un pensamiento. Al igual que b debe ser usado en último recurso cuando otros elementos como em o como dfn, por ejemplo, no encajen.

**s**

El elemento s indicará contenidos en un párrafo que ya no son relevantes y/o fiables.

Por ejemplo:

\<p\>Visitanos\</p\>

\<p\>\<s\>Dirección antigua: Avda. de las Acacias, 22\</s\>\</p\>

\<p\>\<strong\>Nueva dirección: Avda. de las Acacias, 666\</strong\>\</p\>

**style**

Tanto el elemento style como el atributo style permanecen en la especificación. Si bien se desaconseja su uso y se recomienda utilizar las hojas de estilo siempre que sea posible, pueden existir situaciones específicas donde esto no sea posible o recomendable. Es en estas situaciones excepcionales donde podremos aplicar estilos a los elementos utilizando su atributo style.

Dos elementos que me han sorprendido que desaparezcan son **target y longdesc**.

El primero, porque la única alternativa que se propone para abrir contenido en nuevas ventanas es mediante javascript y el segundo ya que era muy empleado y útil para mejorar la accesibilidad de las webs. Seguramente en breve veremos cambios en la especificación que propongan alternativas a ambos elementos.

Resumen

HTML 5 define unas bases muy acertadas para la creación y desarrollo de webs, obligando a separar el contenido de la presentación. Esta forma de trabajo nos llevará a ser desarrolladores web más eficientes y a crear páginas de mayor calidad y a menor coste.

El uso de elementos que HTML 5 define como obsoletos es un síntoma de que nuestro proceso de desarrollo debe mejorar. Incluso con el soporte incompleto de HTML 5 por parte de los navegadores actuales, la mayoría de elementos marcados como obsoletos son fácilmente reemplazables por estilos incluidos en hojas CSS y por elementos que aportan un mayor valor semántico a nuestras webs.

En un próximo post hablaremos de semántica y veremos las nuevas etiquetas y elementos definidos por la especificación.

