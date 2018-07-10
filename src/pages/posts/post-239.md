---
title: "Alertas personalizadas en Google Analytics"
date: '2011-10-27T14:34:21+00:00'
slug: '/blog/2011/10/alertas-personalizadas-en-google-analytics'
tags: ["google analytics", "intelligence events"]
category: 'business'
excerpt: "**[![Google Analytics - Jorge Alvarez]("
draft: false
headerImage:
---
**[![Google Analytics - Jorge Alvarez](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf44e4b0400995a88ba8/1392758596392/google-analytics.png?format=original "google-analytics")](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf44e4b0400995a88ba8/1392758596392/google-analytics.png?format=original)Una de las funciones que menos se utilizan de Google Analytics son sus alertas. Sin embargo es una de las herramientas más útiles que nos proporciona Google Analytics para controlar lo que sucede en nuestra web. Veamos para que sirven y como se utilizan las alertas.**<!--more-->Las alertas es una funcionalidad que está englobada dentro de "Eventos de Inteligencia".

## Que son los eventos de inteligencia (Intelligence Events)

Los eventos de inteligencia son alertas que Google Analytics nos avisan cuando algo que "se sale de lo normal" ocurre en nuestro sitio web. Es más sencillo explicarlo con ejemplos. Si de un día para otro aumenta el número de visitas, si cae el tiempo medio de estancia en la web, si la tasa de rebote sube de forma alarmante, etc.  **Google Analytics va a monitorizar una serie de parámetros y nos va a indicar cuando está ocurriendo algo que no encaja dentro de la media habitual de nuestro sitio** y nos avisa para que lo repasemos.

Para controlar estos cambios tiene en cuenta tres intervalos de tiempo: diario, semanal y mensual. Es decir nos puede avisar tanto de que el número de visitantes de hoy es el doble que el de ayer como de que el porcentaje de rebote ha subido un 10% durante esta semana. Y por si esto fuera poco además segmenta las alertas por procedencia de tráfico por lo que podemos llegar tener alertas que nos dicen que el tráfico de visitantes de España se ha incrementado en un 25% durante este mes.

Otro punto muy interesante y útil de las alertas es la Importancia. Google Analytics asigna un indicador que va de 0 a 9 según el grado de importancia de la Alerta. Para Google **la Importancia es la probabilidad de que dicha alerta se haya producido por azar**. Para saber un poco más sobre como calcula Google la Importancia vamos a ver un poco de estadística.

## Como calcula Google Analytics sus alertas

Para calcular las alertas GA tiene en cuenta la [distribución normal](http://es.wikipedia.org/wiki/Distribuci%C3%B3n_normal "distribución normal o gaussiana"). Una distribución normal o Gaussiana se define por dos parámetros principales: La media o valor medio y la desviación estándar que es la diferencia media de un valor respecto a su media. En una distribución Gaussiana el 68% de los valores están a menos de 1 desviación estándar, el 95% a menos de 2 y el0,999999998027% a menos de 6.

[![Cálculo de alertas en Google Analytics](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf44e4b0400995a88bab/1392758596600/campana-de-gauss.png?format=original "campana-de-gauss")](http://es.wikipedia.org/wiki/Distribuci%C3%B3n_normal)

Cuanto más lejos esté un valor de la media, menor será la probabilidad de que dicho valor se produzca y por lo tanto menor la probabilidad de que dicho valor se haya producido por azar.

**Por lo tanto GA asignará mayor Importancia a aquellos eventos cuya desviación estándar esté más alejada de la media ya que consecuentemente, la probabilidad de que dicho evento se haya producido por azar será menor**.

Como ves tenemos a nuestro alcance una información muy útil que nos permite detectar tanto posibles problemas como mejoras que han dado sus frutos (campañas, posicionamiento, adwords...). Por defecto Google Analytics nos muestra las que él considera que son las alertas más destacables que debemos tener en cuenta, pero, como se espera de una herramienta tan potente, nos permite configurar nuestras propias alertas.

## Como configurar nuestras propias alertas en Google Analytics

Aunque las alertas que GA nos proporciona automáticamente están muy bien y debería ser una de las dos primeras cosas que miras al acceder a tu GA (la otra es tu dashboard personalizado, porque tienes un dashboard personalizado con los datos que más te interesan, verdad?), configurar alertas personalizadas nos permite recibir avisos cuando ocurran hechos en nuestra web que nosotros consideramos relevantes.

Por ejemplo: En mi blog tengo una alerta que me avisa si el tráfico semanal de buscadores cae un 30%. Es decir si de una semana a otra el número de personas que llega a mi blog a través de Google ha bajado un 30% es algo que debe preocuparme y sobre lo que debo investigar más a fondo.

Vamos a ver como se configura esta alerta.

En primer lugar accedemos al apartado "Alertas personalizadas" como podeis ver en la siguiente figura:

[![Acceder a alertas personalizadas en Google analytics](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf44e4b0400995a88bae/1392758596801/configurar-alertas-google-analytics.jpg?format=original "configurar-alertas-google-analytics")](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf44e4b0400995a88bae/1392758596801/configurar-alertas-google-analytics.jpg?format=original)

Una vez allí pulsamos el botón "Administrar alertas personalizadas" y de nuevo otro botón que se llama "Crear alerta nueva" y llegaremos a una pantalla como la de la siguiente figura:

[![crear alerta personalizada](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf44e4b0400995a88bb1/1392758596996/crear-alerta-personalizada.jpg?format=original "crear-alerta-personalizada")](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf44e4b0400995a88bb1/1392758596996/crear-alerta-personalizada.jpg?format=original)

Los pasos a realizar son los siguientes:

1. Asignamos un nombre a la alerta
2. Seleccionamos la periodicidad de la alerta y marcamos la casilla de aviso por email en caso de que nos interese recibir un aviso en nuestro correo electrónico (muy recomendable).
3. Seleccionamos el tipo de tráfico que generará la alerta, en este caso el tráfico orgánico.
4. Seleccionamos la condición que disparará la alerta, en este caso cuando el porcentaje de visitas se reduzca en un 50%.

Pulsamos en "Guardar alerta" y ya tendremos creado el aviso.

### La periodicidad. O porqué quieres algo diario cuando no lo necesitas?

Permitidme un pequeño apunte basado en mi experiencia. Cuando configuro este tipo de alertas para los clientes a quienes estoy realizando una [implantación personalizada de Google Analytics](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf3de4b0400995a88b56/1392758589187/?format=original "Implantación a medida de Google Analytics - Personalización y formación a empresas") y llega el momento de configurar la periodicidad de la alerta casi todo el mundo me pide que sea diaria o semanal.

Hay muchas empresas, la mayoría, que no tienen capacidad para modificar su web en tiempo real. Realizar cambios les lleva semanas e incluso meses, desde que se proponen hasta que se aprueban y el departamento de desarrollo los sube a producción. Para que quieres llenar tu buzón con alertas diarias si no vas a poder reaccionar ante ellas?.

Esto también sucede con la nueva funcionalidad de real time de GA. Creo que para el 99% de las empresas no es necesaria. No es mas que un dashboard divertido con números que se van moviendo pero que no les aporta información útil ya que no pueden reaccionar ante lo que están viendo. Sin embargo, si yo tuviese un comercio electrónico tendría muchas alertas configuradas con aviso diario y real time estaría siempre abierto en una ventana de mi navegador, eso sí, siempre y cuando sea capaz de reaccionar ante lo que se está produciendo.

## Resumen

Si todavía no lo has hecho, entra en Google Analytics y revisa las alertas automáticas y configura las tuyas propias para que GA te avise por email ante cambios inesperados, bien sean positivos o negativos.

Configura la periodicidad en función de la capacidad que tengas para modificar tu web. No necesitas alertas diarias si tu velocidad de respuesta ante los cambios no es diaria. Además **las alertas no son una herramienta de monitorización en tiempo real** sino que detectan situaciones que conviene investigar más a fondo, en caso de que no hayamos detectado ya ese evento por otros cauces.

[box type="info"] Si quieres que ayude a tu empresa a configurar y personalizar Google Analytics y formar a tus empleados para aprovechar a fondo su potencial,[contacta conmigo](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf44e4b0400995a88ba5/1392758596086/?format=original "Contacta para personalizar google analytics en tu empresa y dar cursos de formación a medida").[/box]
