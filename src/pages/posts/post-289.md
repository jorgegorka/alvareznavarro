---
title: "El sistema de subasta de AdWords explicado paso a paso"
date: '2013-06-18T18:36:36+00:00'
slug: '/blog/2013/06/el-sistema-de-subasta-de-adwords-explicado-paso-a-paso'
tags: ["adrank", "adwords", "cpc"]
category: 'business'
excerpt: "Para maximizar nuestra inversión en SEM nos interesa conocer al detalle como funciona Google AdWords y como calcula tanto el orden de los anuncios como el coste por cada click.  Veamos paso a paso como se hace.  "
draft: false
headerImage:
---
Para maximizar nuestra inversión en SEM nos interesa conocer al detalle como funciona Google AdWords y como calcula tanto el orden de los anuncios como el coste por cada click. Veamos paso a paso como se hace.

## La subasta de AdWords

El proceso de subasta de Google AdWords consta de 6 pasos

1. **La Búsqueda:** Una persona entra en el buscador de Google y escribe aquello que busca, por ejemplo "hotel barcelona"
2. **Filtrado de anuncios:** El sistema de Google AdWords filtra los anuncios que estén relacionados con la búsqueda "hotel barcelona"
3. **Nuevo filtrado de anuncios:** Del resultado anterior AdWords todavía filtra más los anuncios para encontrar aquellos que son verdaderamente relevantes, descartando aquellos que no cumplen todas las características (por ejemplo, van destinados a personas con otro idioma, país....)
4. **Se ordenan los anuncios:** AdWords ordena los anuncios mediante una fórmula denominada AdRank (más abajo explico esto en detalle)
5. **Se muestran los anuncios:** El visitante ve los anuncios.
6. **En cada nueva búsqueda se repite el proceso:** Cada vez que una persona hace una búsqueda, este proceso se repite de principio a fin.

Un proceso bastante simple y efectivo que hace que los visitantes veamos siempreanuncios relacionados con nuestra búsqueda, relevantes para nosotros y en los que hacemos click (por eso AdWords es tan efectivo).

La forma en la que se decide que anuncios aparecen en las primeras posiciones y cuales no se denomina AdRank y es una combinación de el CPC (coste por click) y el Quality Score que es una métrica desarrollada por Google AdWords para medir la calidad de los anuncios.

## Qué es Ad Rank

La mejor forma de explicar Ad Rank es con un ejemplo, vamos a ello:

Supongamos que para la búsqueda "tinta invisible" tenemos a 3 anunciantes:

| Nombre | C.P.C. | Quality Score | Ad Rank |

| Anunciante I | 1.5 | 26 | 39 |

| Anunciante II | 2 | 16 | 32 |

| Anunciante III | 5 | 5 | 25 |

Lo primero de todo es calcular nuestro Ad Rank que como podéis comprobar no es más que el C.P.C. o Coste Por Click, es decir, el precio máximo que el anunciante está dispuesto a pagar por cada click, multiplicado por el Quality Score que nos asigna Google AdWords. En un artículo anterior ya [expliqué que era el Quality Score y como mejorarlo](http://www.alvareznavarro.es/blog//2011/09/como-mejorar-el-nivel-de-calidad-en-tus-campanas-de-google-adwords).

 [caption id="" align="alignnone" width="629.0"] ![Posición de los anuncios tras la subasta](http://static1.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf53e4b0400995a88c76/1392758843299/Screen-Shot-2013-06-18-at-8.43.26-PM-629x650.png.26-PM-629x650.png?format=original) Posición de los anuncios tras la subasta[/caption]

**Nuestro Ad Rank determina el orden en que aparecerán nuestros anuncios** por lo tanto Anunciante I que tiene el mejor Ad Rank (39 = 1.5 x 26) aparecerá primero, seguido de Anunciante II y Anunciante III **pero no determina el coste del click**. Para el cálculo del coste se emplea el Ad Rank del anunciante que está por debajo de nosotros. Sigamos con nuestro ejemplo para verlo más claro.

Supongamos que la persona que ve los anuncios decide finalmente pulsar en el Anunciante II (que aparece en segundo lugar). Para calcular cuanto va a pagar Google emplea la siguiente fórmula:

**El C.P.C. es igual al Ad Rank del anuncio por debajo del nuestro dividido entre nuestro Quality Score y al resultado le sumamos 0.01.**

C.P.C. de Anunciante II = ( 25 / 16 ) + 0.01  = 1.56 + 0.01 = 1.57

Anunciante II pagará a Google 1.57 euros. Recordemos que el C.P.C. máximo de Anunciante II es de 2 euros, esto quiere decir que incluso si la fórmula anterior da un resultado mayor que 2 euros Anunciante II sólo pagará 2 euros como máximo.

Además vemos que Anunciante III incluso estando dispuesto a pagar mucho más dinero que el resto de anunciantes no aparece primero ya que tiene un Quality Score muy bajo.

### Resumen

El proceso de subasta de AdWords es muy sencillo y busca sobre todo ofrecer a quienes buscan en Google anuncios relevantes y efectivos. Tan importante o más que disponer de mucho dinero para gastar en AdWords es el tener anuncios relevantes y que sean de interés para los visitantes. Si [optimizamos nuestro Quality Score](http://www.alvareznavarro.es/blog/2011/09/como-mejorar-el-nivel-de-calidad-en-tus-campanas-de-google-adwords) ahorraremos mucho dinero en nuestras campañas de AdWords.

Si te ha quedado alguna duda o quieres aportar más información deja tu comentario.
