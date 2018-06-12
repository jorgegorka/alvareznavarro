---
title: "Forma de imprimir páginas web"
date: '2006-12-13T11:50:00+00:00'
slug: '/blog/2006/12/forma-de-imprimir-pginas-web'
tags: ["css", "Internet", "trucos"]
category: 'desarrollo-web'
excerpt: "Jesus Encinar ha publicado un artículo donde comenta como debe estar formateada una página para que se pueda imprimir correctamente"
---
Jesus Encinar ha publicado un artículo donde comenta [como debe estar formateada una página para que se pueda imprimir correctamente](http://www.jesusencinar.com/2006/12/disea_tu_web_pa.html). Dice:

> todo lo que no es contenido debe ir a la derecha: los menús de navegación, la información adicional, los enlaces relacionados, la publicidad, las ofertas, las calculadoras, etc. Todo lo que no es crítico que se imprima debe ir a la derecha de la página.

Luego añade que "Los css han hecho esta situación aún peor.".

Voy a explicar porqué creo que está equivocado y que el uso de css **mejora y simplifica** la forma de imprimir páginas. Y la mejor forma de explicarlo es poner un ejemplo:

![portada de inmobiliaria argomat](http://jorgegorka.files.wordpress.com/Argomat_screen.jpg)

Esta es una captura de pantalla de la web de uno de nuestros clientes una [inmobiliaria de Logroño llamada Argomat](http://www.argomat.com) como se puede ver la estructura de la página es un título superior con el logotipo de la empresa después el menú principal alineado a la parte izquierda y a continuación los datos del inmueble.
Gracias a la posibilidad que nos brinda el uso de css para generar un conjunto de estilos aplicados a la impresión y sin tener que tocar o remaquetar el codigo xhtml conseguimos que:

- Aparezca en la parte superior el nombre de la inmobiliaria y un eslogan.
- Quitamos el menú de navegación y la imagen del encabezado, que no aportan nada en la versión impresa.
- Quitamos las imagenes y el degradado de fondo.
- Cambiamos la tipografía y su tamaño por una más conveniente y que permita una mayor legibilidad en papel.
- Alineamos a la derecha el contenido principal con los datos del inmueble.

![imprimir - vista preliminar](http://jorgegorka.files.wordpress.com/Argomat_print.jpg)

De esta manera conseguimos crear una página más atractiva para el usuario y que resalta además aquellos elementos que consideramos de interés (como la dirección y el teléfono de contacto).

Otra ventaja es que estos estilos se aplican a toda la web y no solo a una página en concreto lo que nos **evita tener que crear versiones para imprimir de todas nuestras páginas** y menos aún tener que condicionar el diseño de la página a la posibilidad de que los usuarios quieran imprimirla.

A modo de ejemplo y para demostrar la sencillez del proceso adjunto el código css empleado en esta web.

`body {`

font-size: 12pt;

}

#navbar, #thumbvivi {

display: none;

}

#entry {

width: auto;

border: 0;

margin: 0 5%;

padding: 0;

float: none !important;

color: black;

background: transparent;

}

a:link {

font-weight: normal;

text-decoration: none;

}

#footer {

font-size: 10pt;

}

En resumen: La separación entre la presentación y el contenido facilita enormemente el desarrollo de sitios web ya que nos permite presentar los contenidos de la mejor forma posible en función del dispositivo empleado para verlos (monitor, impresora, pda, lector de voz...etc...) lo que lleva aparejada una **reducción de los costes** de creación del sitio web.

Recomiendo la [lectura del artículo de Jesus Encinar](http://www.jesusencinar.com/2006/12/disea_tu_web_pa.html) ya que los comentarios que se hacen son muy interesantes e instructivos.
