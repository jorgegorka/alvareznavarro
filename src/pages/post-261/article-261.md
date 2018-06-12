---
title: "Crear eventos con Google Tag Manager"
date: '2013-12-13T17:02:24+00:00'
slug: '/blog/2013/12/crear-eventos-con-google-tag-manager'
tags: ["eventos", "google tag manager", "javascript"]
category: 'desarrollo-web'
excerpt: "Una de las grandes mejoras introducidas por Google este verano ha sido la posibilidad de poder medir eventos desde Google Tag Manager. Para ver un ejemplo de como utilizar Google Tag Manager voy a implementar la funcionalidad descrita en un post que escribí en Junio titulado: Medir el tiempo de lectura de una página web. "
---
Una de las grandes mejoras introducidas por Google este verano ha sido la posibilidad de poder medir eventos desde Google Tag Manager. Para ver un ejemplo de como utilizar Google Tag Manager voy a implementar la funcionalidad descrita en un post que escribí en Junio titulado: [Medir el tiempo de lectura de una página web](https://jorge-alvarez-8tee.squarespace.com/jorge-alvarez-moreno-1/2013/06/medir-el-tiempo-de-lectura-de-una-pagina-web).

Ahora mismo hay un código de javascript implementado en la web que lanza un evento a Google Analytics cada minuto que un usuario pasa en una página. De esta forma puedo saber con mayor exactitud el tiempo que cada visitante pasa leyendo los artículos y eso en un blog me parece una métrica fundamental.

Quiero hacer esto mismo pero con la flexibilidad y ventajas que aporta Google Tag Manager:

- **Evitar tocar wordpress**. Con la solución actual tenía que subir un fichero con el código a wordpress cada vez que hacía un cambio y además modificar las plantillas para que cargasen dicho fichero al mostrar la página.
- **Flexibilidad en cambios y en configuración.** Ahora puedo cambiar la funcionalidad de forma sencilla (por ejemplo haciendo la medición cada 2 minutos en lugar de cada minuto).

## Creando etiquetas en Google Tag Manager

Para crear toda la funcionalidad voy a necesitar 2 etiquetas.

1. La primera etiqueta se va a encargar de medir el tiempo. Cada minuto dirá "Han pasado 60 segundos".
2. La segunda etiqueta estará pendiente de la anterior y cada vez que oiga lo de "Han pasado 60 segundos" lanzará el evento a Google Analytics (por cierto estoy usando la Universal Analytics).

Como veis es un proceso muy sencillo y que no tiene que llevar más de 10 minutos de configuración.

## Midiendo el tiempo

El propósito de esta primera etiqueta es lanzar un aviso cada vez que pasen 60 segundos. Para crear la etiqueta accede a tu cuenta de GTM y pulsa en el botón de crear etiqueta.

 [caption id="" align="alignnone" width="300.0"] ![nuevo tag de eventos](/post-261/images/new_tag_event-300x146.png) nuevo tag de eventos[/caption]

Le ponemos un nombre identificativo a la etiqueta y seleccionamos el tipo de etiqueta que queremos

 [caption id="" align="alignnone" width="300.0"] ![seleccionar time interval](/post-261/images/Google_Tag_Manager-3-300x207.png) seleccionar time interval[/caption]

Una vez seleccionado el tipo de tag que vamos a crear ya podemos añadir los datos de configuración. En nuestro caso solamente necesitamos dos: Darle un nombre al evento (en el ejemplo timer1minute) y una duracción. Como **tenemos que expresar la duración en milisegundos** si lo que queremos es que el evento ocurra cada 60 segundos hemos de escribir 60000.

 [caption id="" align="alignnone" width="300.0"] ![nombre y duracion](/post-261/images/event_name_interval-2-300x281.png) nombre y duracion[/caption]

Guardamos los cambios y ya tenemos creada nuestra primera etiqueta. De momento no hemos escrito nada complicado ni difícil y ya tenemos la mitad del trabajo hecho. Vamos con la segunda y última parte.

## Añadir información de un evento a Google Tag Manager

Para añadir la información del evento vamos a crear una segunda etiqueta.

 [caption id="" align="alignnone" width=""] ![nuevo evento en google tag manager](/post-261/images/new_tag_event-3-300x154.png) nuevo evento en google tag manager[/caption]

Al igual que antes le asignamos un nombre y un tipo

 [caption id="" align="alignnone" width="300.0"] ![datos del evento](/post-261/images/event_tag_edit-4-300x256.png) datos del evento[/caption]

Para el tipo de etiqueta como yo estoy usando Universal Analytics selecciono esa opción. Si tu todavía utilizas la versión estándar debes seleccionar la opción Google Analytics.

En el apartado de Tracking ID debes poner tu código de Analytics UA-XXXXXX-X Yo lo tengo configurado como una macro para no tener que repetir el código en cada tag que creo (un poco más adelante explico que es una macro y como crearlas).

En el tipo de seguimiento seleccionamos Event y ya podremos poner los datos habituales al configurar un evento, es decir, la categoría, la acción, la etiqueta y el valor.

En categoría yo he decidido poner el texto "Page" en Action utilizo una de las macros que Tag Manager nos proporciona por defecto y que se llama {{url path}} esto en realidad es la parte de la url que sigue al dominio. Veamos un ejemplo:

Si estamos viendo una página llamada http://www.alvareznavarro.es/blog/super\_post.html el valor de {{url path} será:

/blog/super\_post.html.

En el campo etiqueta selecciono otra macro pero esta la he tenido que crear yo, Tag Manager no nos la proporciona por defecto y simplemente es la fecha y hora actual.

## Creando macros

Primero de todo empecemos diciendo que es una macro. Simplemente es un texto (por ejemplo {{url path}}) que hace referencia a un valor.  Su utilidad radica en que si el valor cambia yo no tengo que buscar todos los sitios donde había puesto ese valor y modificarlos. Voy al menú de macros selecciono la macro le cambio el valor y todos los sitios donde se utiliza emplearan ese nuevo valor desde ese mismo momento.

Por ejemplo, vamos a crear una macro para guardar nuestro código de analytics (UA-XXXXX-X).

 [caption id="" align="alignnone" width="300.0"] ![crear macros en google tag manager](/post-261/images/nueva_macro-5-300x67.png) crear macros en google tag manager[/caption]

En GTM pulsamos el botón de crear macro (tiene forma de pieza de Lego).

 [caption id="" align="alignnone" width=""] ![modificar macro](/post-261/images/edit_macro-4-300x251.png) modificar macro[/caption]

Le asignamos un nombre a la macro y en el campo valor escribimos nuestro código de Google Analytics. Guardamos los cambios y desde ahora en lugar de poner el código de Google Analytics en cada nueva tag que creamos solamente tenemos que poner el nombre de la macro {{Mi Codigo de Analytics}} es el nombre del ejemplo.

Ya no tengo que recordar el código una y otra vez o arriesgarme a escribirlo mal, simplemente escribo el nombre de la macro y GTM lo sustituirá por el valor.

## Volviendo a la configuración de los eventos

Nos habíamos quedado configurando el evento y más concretamente el campo etiqueta. Como en este campo quiero que me muestre la hora a la que se lanza el evento he creado una macro llamada {{CurrentTimeHumanReadable}} que se encarga de poner ese dato empleando javascript.

Este es el contenido de la macro por si tu también la quieres crear (o puedes poner otra cosa en el campo etiqueta si lo prefieres).:

 [caption id="" align="alignnone" width="300.0"] ![macro con javascript](/post-261/images/Google_Tag_Manager-300x275.png) macro con javascript[/caption]

Tras añadir todos estos valores ya solo nos queda un último paso, decidir cuando se va a lanzar este evento.

Has ahora solo hemos configurado la información que tendrá el evento, todavía no le hemos dicho cuando tiene que enviar esa información a analytics. Para eso vamos a utilizar la primera etiqueta que creamos al princio de todo.

En la zonas de reglas de nuestra tag seleccionados añadir nueva regla

 [caption id="" align="alignnone" width="300.0"] ![cuando_lanzar_evento](/post-261/images/cuando_lanzar_evento-300x90.png) cuando\_lanzar\_evento[/caption]

Y creamos la siguiente regla:

 [caption id="" align="alignnone" width="300.0"] ![reglas de disparo de google tag manager](/post-261/images/event_rules-2-300x102.png) reglas de disparo de google tag manager[/caption]

Lo que estamos haciendo es decirle a GTM cada vez que "timer1minute" diga que han pasado 60 segundos mandame un evento.

## Queréis la fama, pero la fama cuesta

Como has podido comprobar no es un proceso complicado y simplemente se trata de tener claro lo que queremos conseguir y conocer un poco la herramienta GTM.

Ahora que ya la tenemos en marcha y funcionando es un proceso trivial poder modificarla o implementarla en otras webs que gestionemos. Y lo mejor de todo, no tenemos que cambiar la web ni tocar su código, podemos hacerlo todo desde el propio GTM.

Se te ocurre como mejorar esta implementación? Tienes dudas, sugerencias...? Los comentarios está a tu disposición.
