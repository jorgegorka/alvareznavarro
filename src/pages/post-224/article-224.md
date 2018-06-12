---
title: "Seguimiento de acciones sociales en Google Analytics"
date: '2011-07-01T09:30:55+00:00'
slug: '/blog/2011/07/seguimiento-de-acciones-sociales-en-google-analytics'
tags: ["google analytics", "social media"]
category: 'desarrollo-web'
excerpt: "Google se vuelve social. No se si eso será bueno o malo pero es la realidad. En Google Analytics en el apartado de Visitantes tenemos "Social" una sección desde la que podremos medir nuestras acciones ..."
---
Google se vuelve social. No se si eso será bueno o malo pero es la realidad. En Google Analytics en el apartado de Visitantes tenemos "Social" una sección desde la que podremos medir nuestras acciones sociales. Al igual que pasa con AdWords, **medir el impacto de su botón Google +1 es automático** y las estadísticas quedarán registradas sin necesidad de configuraciones adicionales.

Para el resto de nuestras acciones sociales **disponemos del método \_trackSocial**.

\_trackSocial admite cuatro parámetros, dos obligatorios y dos opcionales. El formato es el siguiente:

`_trackSocial(red_social, acción, destino, origen)`

Los dos primeros parámetros son obligatorios y los dos siguientes opcionales. Veamos para que sirven:

**Red social** : El nombre de la red social (Twitter, LinkedIn, Facebook, Tuenti...)

**Acción** : El tipo de acción que estamos midiendo (Me gusta, compartir, tweet...)

**Destino:** La página a la que dirige nuestra acción. A donde llegará la gente que pulse en nuestro enlace, botón, etc. Por defecto Analytics pone automáticamente la dirección de destino.

**Origen:** La página en la que está situado nuestro enlace, botón, etc. Analytics pondrá como valor predeterminado el nombre de la página en la que estamos.

**Implementación**

La implementación de \_trackSocial en nuestras páginas dependerá mucho de como estemos integrando los links, botones... si usamos herramientas externas como AddThis o si lo tenemos implementado directamente. Incluso si lo tenemos implementado directamente también influye la forma en la que lo hemos hecho. Por ejemplo no es lo mismo implementar el botón Me Gusta de Facebook usando un iframe o utilizando su Graph API.

**Resumen**

Como bien recalca siempre[Gemma Muñoz](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original "Experta en analítica web")tenemos que segmentar, segmentar y segmentar. Es la clave del éxito para medir con eficacia y obtener datos que nos permitan tomar decisiones eficaces. Poder realizar un seguimiento personalizado de nuestras acciones sociales nos permitirá conocer mejor su funcionamiento, su eficacia y **su infuencia en nuestra cuenta de resultados**.

