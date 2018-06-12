---
title: "Eventos no interactivos en Google Analytics"
date: '2011-11-03T19:57:45+00:00'
slug: '/blog/2011/11/eventos-no-interactivos-en-google-analytics'
tags: ["eventos", "google analytics", "trackEvent"]
category: 'desarrollo-web'
excerpt: "Hasta ahora cuando lanzábamos un evento en Google Analytics contaba como una interacción del usuario en nuestra web y anulaba el rebote."
---
**[![eventos no interactivos en Google Analytics](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf4ee4b0400995a88c2c/1392758606015/bounce-rate-300x199.jpg?format=original "bounce-rate")](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf4de4b0400995a88c29/1392758605816/bounce-rate.jpg?format=original)Hasta ahora cuando lanzábamos un evento en Google Analytics contaba como una interacción del usuario en nuestra web y anulaba el rebote. Es decir aunque el usuario hubiera visto una sola página si había ocurrido algún evento, no existía rebote. Desde hoy ya podemos decidir nosotros si queremos que un evento sea interactivo o no interactivo.**<!--more-->

## Gestión de eventos en Google Analytics

Google ha añadido un nuevo parámetro al método \_trackEvent() que nos permite decidir si queremos que nuestro evento sea interactivo y cancele el rebote o bien no interactivo y no afecte al rebote de esa visita.

El formato del nuevo método \_trackEvent queda como sigue:

#### _\_trackEvent(category, action, opt\_label, opt\_value, opt\_noninteraction)_

Hace poco publiqué un script que añades a tu web y que te permite [saber que enlaces externos pulsan los visitantes de tu web](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf4ee4b0400995a88c2f/1392758606226/?format=original "Seguimiento de enlaces externos con Google Analytics"). Por ejemplo, si tienes un post de un blog y enlazas a otras webs, cuando alguien que está leyendo tu post pulsa en ese enlace quedará contabilizado y podrás saber que enlaces tienen más éxito entre tus lectores.

Un efecto secundario de este script es que aunque el visitante solo vea una página de tu web **cuando se lanzaba el evento Google Analytics lo entendía como una interación del visitante con tu web y cancelaba el rebote**.

Desde ahora ya podemos decidir si queremos que esto sea así o no. Por defecto, nada cambiará, es decir que si no modificas tus eventos estos seguirán siendo interpretados como una interacción del visitante y cancelarán el rebote. Pero si añades un nuevo parámetro y pones el valor **_true_** Google Analytics contabilizará el evento y no cancelará el rebote.

## Resumen

No todos los eventos tienen la misma importancia ni afectan por igual al comportamiento de los visitantes en nuestra web. Desde ahora es responsabilidad del analista web configurar correctamente los eventos para que afecten o no afecten a la tasa de rebote. Personalmente **creo que existe mucho miedo a tener una tasa de rebote alta** , cuando no siempre es un síntoma malo. Debemos [analizar cada web en su contexto](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf41e4b0400995a88b86/1392758593884/?format=original "Auditoría y análisis web Jorge Alvarez") y decidir lo más adecuado según sus circunstancias particulares.
