---
title: "Schema.org y su impacto en el SEO y las búsquedas"
date: '2011-06-06T06:15:00+00:00'
slug: '/desarrollo-web/2011/06/schema-org-y-su-impacto-en-el-seo-y-las-busquedas'
tags: ["seo"]
category: 'Desarrollo Web'
excerpt: " **Qué es Schema.org**Bing, Google y Yahoo han lanzado una iniciativa llamada [Schema.org]("
draft: false
headerImage: 
---
 **Qué es Schema.org**

Bing, Google y Yahoo han lanzado una iniciativa llamada [Schema.org](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original) que tiene como objetivo definir unos estándares de uso de metadatos comunes que sirvan indistintamente para cualquier buscador.

Los metadatos (información sobre los datos) son muy necesarios para los buscadores ya que les ayudan a aclarar el contenido de la página y a disambiguar posibles problemas de interpretación. En determinados contextos es complicado saber si cuando buscamos Jaguar queremos saber sobre el animal o sobre la marca de coches.

Añadiendo esta información a nuestras páginas ayudamos al buscador a **indexar mejor nuestro contenido**. Y no solo eso sino que al hacer más listo al buscador podremos realizar consultas más precisas y recibir resultados relevantes. Por ejemplo, si buscamos hoy en día _"vuelos Bilbao Londres_" o incluso _"vuelos Bilbao Londres hastas 100 euros"_ no encontraremos los vuelos directamente en los resultados sino que la mayoría de las veces acabaremos en la página de un operador en la que tendremos que volver a realizar la búsqueda.

**Como usar los metadatos**

Veamos un ejemplo. Supongamos que tenemos una tienda online de venta de vinos. Nos gustaría que el buscador que nos visite al indexar nuestras páginas de producto sepa con claridad de que va nuestro producto, el precio, la marca, etc... para poder devolver resultados más relevantes a quien consulta.

La sintaxis html de una página de producto podría ser más o menos así:

\<div class="product"\>

 \<h1\>Vino Tinto Reserva de CondeDuque\</h1\>

 \<h2\>Cosecha de 2006 - 90% tempranillo 10% mazuelo\</h2\>

 \<h3\>Bodegas Conde Duque\</h3\>

 \<p\>Este vino ha sido elaborado y bla bla bla.......\</p\>

 \<p\>Precio.- 23.99 euros IVA Incluido botella de 75cl.\</p\>

 \<p\>Artículo en stock\</p\>

\</div\>

Si le aplicamos la información de metadatos nos quedaría algo así:

\<div class="product"itemscope itemtype="http://schema.org/Product"\>

 \<h1itemprop="name"\>Vino Tinto Reserva de CondeDuque\</h1\>

 \<h2itemprop="model"\>Cosecha de 2006 - 90% tempranillo 10% mazuelo\</h2\>

\<h3itemscope itemtype="http://schema.org/Organization"\>\<spanitemprop="name"\>Bodegas Conde Duque\</span\>\</h3\>

 \<pitemprop="description"\>Este vino ha sido elaborado y bla bla bla.......\</p\>

 \<p\>Precio.- \<spanitemprop="price"\>23.99 euros\</span\> IVA Incluido botella de 75cl.\</p\>

 \<pitemprop="availability"\>Artículo en stock\</p\>

\</div\>

De esta forma le estamos indicando claramente a los navegadores cual es el nombre del producto, la descripción, el precio, la empresa que lo fabrica, etc... Estamos **ayudando al buscador a entender mejor la información** que proporcionamos en nuestra web.

En la web [Schema.org](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original) hay un [listado detallado](http://schema.org/docs/full.html "full hierarchy description") de todas las especificaciones y la información disponible para cada una de ellas.

**El impacto de Schema.org en el SEO**

Si los buscadores tienen información detallada y relevante de los productos que se venden o fabrican **podrán devolver resultados más fiables y precisos**. Si conocen la localización de la empresa que las vende podrán respondernos a preguntas como _"tienda más cercana con stock de Whisky Chic Reserva 12 años"_.

Se calcula que el 40% de las búsquedas tienen caracter local lo cual es un mercado muy importante del total de búsquedas y los metadatos jugarán un papel fundamental en ayudar a los buscadores a devolver resultados certeros.

La relevancia y la calidad de los contenidos seguirá siendo fundamental. En la información de metadatos también se pueden incluir factores que afectan a la calidad de los contenidos como por ejemplo [las reviews](http://schema.org/Review) o [los rankings](http://schema.org/AggregateRating).

Un factor a tener en cuenta es si al buscar _"vuelo madrid barcelona"_ y recibir una lista de productos que cumplen ese criterio, **podría ordenar los resultados por precio**. En ese caso una simple centésima de menos en el precio de mi producto podría auparle a las primeras posiciones lo que nos lleva a una interesante reflexión sobre la estrategia a seguir para el posicionamiento.

**Las búsquedas sociales**

Cuando hablamos de búsquedas sociales todos pensamos en botones de +1, me gusta o en sitios como Facebook. 

Creo que los buscadores, muy inteligentemente, han trasladado el componente social a las propias páginas de las empresas. Con metadatos como [Event](http://schema.org/Event), [Recipe](http://schema.org/Recipe), [Review](http://schema.org/Review), [AggregateRating](http://schema.org/AggregateRating), [Offer](http://schema.org/Offer) o [AggregateOffer](http://schema.org/AggregateOffer) podemos ofrecer información "social" de calidad y que aporta valor a nuestros visitantes. Además los buscadores serán conscientes de ello y podrán indexarnos mejor.

Por ejemplo si la web de Apple ha combinando información de Event con [Person](http://schema.org/Person) podríamos buscar _"irá Steve Jobs al próximo Webdevelopers Conference"_ o preguntar por cualquier otro asistente/ponente. No solo eso sino que podríamos saber la puntuación de sus anteriores ponencias y las opiniones de los usuarios.

**Resumen**

Creo que [Schema.org](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original) es una jugada muy inteligente y apropiada no solo para ofrecer resultados de mejor calidad a los usuarios sino para competir con ventaja contra posibles nuevos competidores en el mercado de las búsquedas, como podría ser Facebook que por sus características ya posee una detallada información de eventos, personas, valoraciones y comentarios.

Además, a corto plazo, puede ser una estrategia de diferenciación para quienes implementen desde ya estos metadatos en sus webs. Sobre todo para las pymes que tienen aquí una ventaja estratégica importante frente a las lentas y pesadas grandes corporaciones.







