---
title: "Medir el tiempo de lectura de una página web"
date: '2013-06-25T14:57:34+00:00'
slug: '/blog/2013/06/medir-el-tiempo-de-lectura-de-una-pagina-web'
tags: ["audiencias", "blogs", "medición"]
category: 'business'
excerpt: "Para poder optimizar al máximo el contenido que producimos una de los factores que nos interesa conocer es el tiempo que los visitantes dedican a leer nuestros post.Por la propia naturaleza de las páginas web esto no es posible hacerlo con total fiabilidad y de hecho Google Analytics nos proporciona unos datos que por defecto son bastante pobres y confusos.Veamos como podemos mejorar un poco esto."
draft: false
headerImage:
---
Para poder optimizar al máximo el contenido que producimos una de los factores que nos interesa conocer es el tiempo que los visitantes dedican a leer nuestros post. Por la propia naturaleza de las páginas web esto no es posible hacerlo con total fiabilidad y de hecho Google Analytics nos proporciona unos datos que por defecto son bastante pobres y confusos. Veamos como podemos mejorar un poco esto.

## La duración de una visita

Al leer un excelente post de[Javier Riestra](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)en el blog[KPIsLand](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)titulado[JotDown, el New York Times y las visitas de 53 minutos de duración](http://kpisland.com/jotdown-el-new-york-times-y-las-visitas-de-53-minutos-de-duracion/), comencé a pensar sobre el problema de la medición del tiempo que un usuario pasa viendo una determinada página web.

Te recomiendo que antes de continuar leas su post.

### Como mide Google Analytics el tiempo que el visitante pasa en una página web

> **ga:timeOnPage**
>
> How long a visitor spent on a particular page in seconds. Calculated by subtracting the initial view time for a particular page from the initial view time for a subsequent page. Thus, this metric does not apply to exit pages for your property.

Es decir el tiempo que Google asigna a cada página se calcula de restar el momento en el que una visita llega a una página y el momento en el que se vá. Vamos a verlo con un ejemplo:

Imaginemos que alguien visita nuestra web y consulta tres páginas como muestra el siguiente gráfico.

 [caption id="" align="alignnone" width="300.0"] ![Tiempo en pagina](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf54e4b0400995a88c7b/1392758855983/time_on_page-300x187.jpg) Tiempo en pagina[/caption]

El visitante entra en la página 1 a las 10:00 en punto de la mañana, a las 10:05 visita en la página 2 y a las 10:13 visita la página 3, cuando ha visto la página 3 se va a otra web.

Google Analytics contabiliza el tiempo de la siguiente forma:

Tiempo en la página 1 es la hora de entrada 10:00 menos la hora de salida 10:05. La diferencia (5 minutos) es el tiempo que el visitante ha estado en la página 1. Para la página 2 repetimos el proceso: hora de entrada 10:05, hora de salida 10:13 diferencia 7 minutos.

El problema viene con la página 3 puesto que el usuario, cuando ha terminado de leerla se va a otra web y por lo tanto no tenemos forma de saber cuanto tiempo ha estado viéndola. Analytics le asigna un tiempo de cero puesto que no podemos saberlo. Como las páginas con tiempo cero distorsionarían la media de tiempo que un usuario pasa en nuestra web, para calcularla Analytics elimina las páginas con tiempo cero. Por lo tanto en nuestro ejemplo este visitante ha estado de media 6:30 minutos es decir (7 + 5) / 2 (páginas con tiempo registrado).

### Problemas en la medición del tiempo medio

Como vemos la medición del tiempo de estancia en una web no es muy fiable con la configuración por defecto de Analytics y a esto le tenemos que sumar otros problemas que apuntaba Javier en su post: Si un usuario carga nuestra página y deja el navegador abierto y se va a tomar un café, cuando vuelva al cabo de 20 minutos y visite otra página de nuestra web vamos a tener que el tiempo de estancia en la primera página fue de 20 minutos cuando en realidad esto no es así.

A todos estos problemas le añado yo otro y es que**Google Analytics nos muestra (en esta y en muchas otras métricas) la media de tiempo como la media aritmética**, es decir la suma de los valores dividida entre el número de valores. El uso de la media aritmética presenta un problema que mejor explico con un ejemplo: Imaginemos los siguientes tiempos de visita por página (en minutos para simplificar): 1,1,2,3,3,3,3,3,3,3,4,4,4,4,4,4,5,6,31,58

La media aritmética nos dará un tiempo medio de vista de 8 minutos (159/20). Si analizamos los datos vemos que de las 20 visitas 16 han tardado 4 minutos o menos en visitar cada página. En este caso **tendría más sentido utilizar la mediana** , en lugar de la media, que nos daría un valor de 3 minutos, mucho más cercano a la realidad.

### Una solución quiero

Pensando sobre el tema me ha parecido interesante intentar encontrar una forma más fiable de medir el tiempo que un usuario pasa en las páginas de nuestro sitio.

Para ello que desarrollado[una utilidad en javascript](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)que hace lo siguiente:

Cuando se carga una página web detecto si el usuario está moviendo el ratón (cuando estamos viendo una página siempre movemos el ratón, como guía para leer, para hacer scroll, para hacer click en otro enlace, etc….) si es así lanzo un evento a Google Analytics indicando el título de la página y la hora en la que se ha producido el evento.

Para evitar saturar a Google Analytics con multitud de eventos sólo voy a lanzar el evento cada 60 segundos.

Es decir, si alguien está leyendo mi página, casi seguro, moverá el ratón y yo enviaré un evento a Google Analytics. Si ha cargado la página y ha cambiado de pestaña o se ha ido del ordenador al no haber movimiento de ratón no hay actividad y por lo tanto no se generará ningún evento.

Ventajas de esta solución:

- **Mi tasa de rebote se ajusta más a la realidad**. Antes si alguien leía un artículo y se iba a otra web me aumentaba la tasa de rebote, ahora, pasados 60 segundos de la carga de la página, si el usuario sigue leyendo la página se generará el primer evento y esa visita ya no contará en mi tasa de rebote.
- **Conocer de forma más aproximada el tiempo de estancia en la última página**. Antes, como hemos visto, no se podía calcular el tiempo que el visitante estaba en la última página, ahora puedo saberlo, al menos con un margen de error de 60 segundos.

Desventajas:

- No es un método 100% fiable ya que tiene un margen de error de 60 segundos (aunque se puede configurar de forma sencilla para enviar el evento cada 30, 15, o la cantidad de segundos que se prefiera).
- No detecta (aunque estoy trabajando en ello) si el usuario está en un dispositivo móvil, donde no hay ratón.

## Datos de tiempo en página de analytics más fiable

Si alguien quiere instalar esta utilidad en su web tan solo tiene que[descargar el fichero](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original)e instalarlo en su página. El fichero require la librería jQuery, aunque es muy probable que tu página ya la tenga instalada, si no es así tendrás que añadirla también para poder usarlo.

Lo he instalado tanto en esta web como en mi blog personal:[alvareznavarro.es](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original) Voy a dejarlo durante unas semanas funcionando y prometo escribir otro post comentado los resultados obtenidos.

Este es el código:
