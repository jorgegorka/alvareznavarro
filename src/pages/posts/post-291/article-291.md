---
title: "Mínimo producto viable - Parte 2"
date: '2014-03-24T19:32:07+00:00'
slug: '/blog/minimo-producto-viable-parte2'
tags: ["diseño centrado en el usuario", "mínimo producto viable", "saas", "desarrollo ágil"]
category: 'Desarrollo Web'
excerpt: "Segunda parte dedicada al análisis de una estrategia de Mínimo Producto Viable. Hemos visto lascaracterísticas que debe cumplir un MPV: útil, medible e incompleto. Veamos ahora como debe ser la metodología de desarrollo."
---
Segunda parte dedicada al análisis de una estrategia de Mínimo Producto Viable. Hemos visto las [características que debe cumplir un MPV: útil, medible e incompleto](http://www.alvareznavarro.es/blog/2014/02/minimo-producto-viable-parte-1). Veamos ahora como debe ser la metodología de desarrollo. <!--more-->

## Metodología de desarrollo de un MPV

Como ya vimos en la parte 1, una estrategia de mínimo producto viable tiene al usuario como eje fundamental. Será el usuario el que al utilizar nuestro producto nos indique que opciones le son útiles, cuales descartar y cuales desarrollar en sucesivas mejoras.

Por si no fuera suficiente, no solo queremos que el usuario valide nuestro producto y decida su futuro, sino que además queremos involucrarlo en el desarrollo del mismo, de forma que esté presente desde las primeras etapas iniciales, mucho más conceptuales, hasta el momento de la puesta en producción.

**Para lograr nuestro objetivo vamos a emplear un proceso de desarrollo centrado en el usuario y una metodología de trabajo ágil.**

## Desarrollo / Diseño centrado en el usuario

Aunque el proceso de desarrollo de productos centrados en el usuario ha ganado mucha notoriedad a medida que el desarrollo web ha ganado peso la realidad es que es un proceso que lleva muchos años definido. Un libro que contribuyó a dar visibilidad a este concepto fue el libro de Donald A. Normal ["The Design of Everyday Things"](http://en.wikipedia.org/wiki/The_Design_of_Everyday_Things).

Lo que se busca es que tanto la forma como la función de nuestro producto responda a las necesidades del usuario que lo va a utilizar. El usuario está en el centro de todas las decisiones que se toman relacionadas con el producto que estamos desarrollando.

Veamos como ejemplo algunas de las disciplinas involucradas en el diseño centrado en el usuario y en que pueden ayudar a mejorar nuestro producto:

- **Arquitectura de la Información** : Ayudará a definir, categorizar, agrupar y nombrar la información que se muestra al usuario, utilizar un vocabulario adecuado, crear jerarquías, taxonomías, tesauros, etc. Responderá a preguntas como: Qué opciones ponemos en el menú? Cómo las llamamos para que sean entendibles?
- **Diseño de interacción** : La finalidad del diseño de interacción es ponerse en la piel del usuario que va a emplear nuestra aplicación para lograr que sea lo más sencilla en intuitiva de utilizar. No todos los usuarios van a utilizar nuestra aplicación de la misma forma, hay usuarios que tendrán diferentes niveles de acceso y diferentes opciones, diferentes tipos de pantallas, dispositivos, condiciones de uso (no es lo mismo dar de alta una factura desde el ordenador de la oficina que un comercial sentado en su coche en un iPad).
- **Diseño visual** : Se encarga de la apariencia de la aplicación. Qué tipografías utilizar, tamaño, color... como alinear la información que se muestra en pantalla, tamaño de botones, posición. Buscamos que el diseño no sea únicamente atractivo visualmente sino que la apariencia ayude con la funcionalidad.
- **Usabilidad** : Aunque usabilidad es una palabra que no existe y es una traducción literal del término usability (lo correcto sería decir ergonomía) su uso se ha extendido de forma masiva y se emplea habitualmente. La usabilidad consiste en desarrollar productos fáciles de usar. Todos estos problemas, que los usuarios erróneamente nos atribuimos como fallos: "He borrado un cliente sin querer", "No se como configurar el correo en el móvil", "No encuentro la opción de imprimir en esta pantalla". Todos estos problemas son en realidad fallos de usabilidad. Si nuestro programa está creado de forma usable este tipo de errores no se producirán.
- **Estándares** : Los estándares son otra disciplina importante en el diseño centrado en el usuario. Si empleamos tecnologías y procesos basados en estándares los usuarios de nuestro producto tendrán más fácil su uso. Si utilizamos código estándar al desarrollar nuestra web no importará que navegador empleen los usuarios, si creamos procesos de importación/exportación de datos basados en estándares los usuarios podrán utilizarlos desde multitud de programas externos.

Existe un [estándar ISO](http://www.iso.org/iso/catalogue_detail.htm?csnumber=52075) que define como debe ser un proceso de desarrollo centrado en el usuario y que se basa en 6 principios fundamentales:

1. El desarrolló se fundamentará en un conocimiento profundo del usuario, sus tareas y el entorno.
2. Los usuarios se involucran tanto en el proceso de diseño como de desarrollo.
3. Las opiniones de los usuarios son las que dirigen y reconducen el desarrollo.
4. El proceso es iterativo.
5. El desarrollo/diseño tiene en cuenta la experiencia de uso en su totalidad.
6. El equipo de desarrollo debe incluir habilidades y perspectivas multi-disciplinares.



## Metodología de Desarrollo Ágil

El desarrollo ágil se explica perfectamente en los cuatro principios del [Manifiesto Ágil](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original):

1. **Individuos e Interacciones** frente a Processos y Herramientas.
2. **Software funcional** frente a Documentación exhaustiva.
3. **Colaboración con el cliente** frente a Negociación contractual.
4. **Responder a los cambios** frente a Seguir un plan.

Debemos asumir que es imposible definir a priori y con éxito las características que tendrá nuestra aplicación por lo tanto lo mejor que podemos hacer es colaborar con los usuarios realizando prototipos que puedan utilizar y mejorándolos en base a sus opiniones.

La base principal de la metodología ágil es proporcionar cuanto antes al usuario un producto que pueda utilizar y sobre el que nos pueda proporcionar información. Luego, en iteraciones muy cortas (de entre 2 y 4 semanas) vamos añadiendo nueva funcionalidad y mejorando la existente para que el usuario pueda seguir probando la aplicación. Este proceso continúa de forma iterativa: recepción de feedback, realización de cambios, envío de cambios al usuario para su prueba.

Cuando empecé a desarrollar la aplicación de gestión inmobiliaria seleccioné a tres inmobiliarias de las que sabía que sus jefes estaban muy interesados en disponer de una aplicación en modo web. Ellos se comprometieron a emplear tiempo probando la aplicación y dando su opinión y a cambio ellos lograban tener un producto "a medida" que cumpliese con sus necesidades.

Por ejemplo: Al desarrollar el buscador de inmuebles en los resultados se mostraba el tipo de inmueble, la zona, población, precio, dirección, etc... Todos ellos me pidieron ocultar la dirección de los resultados ya que esa pantalla la solían ver los clientes y a ellos no les interesaba que el cliente viese directamente la dirección del piso. La solución fué que la dirección aparecía cuando situabamos el ratón encima de la población, así ellos decidían si mostrara o no.

Ese pequeño detalle, que a mí nunca se me habría ocurrido, fue de gran utilidad luego a la hora de vender el producto. Cuando estaba realizando una demostración y comentaba esta funcionalidad siempre recibía mensajes de aprobación y quedaba claro que el producto estaba pensado para cubrir las necesidades de las agencias inmobiliarias. Este tipo de detalles pesaban más en la decisión final que el hecho de que en las primeras versiones, por ejemplo, la aplicación web no tuviese una gestión de comerciales. Si me pedían poder gestionar los comerciales les comentaba que estaba en proyecto y en breve estaría implementado.  **Los pequeños detalles son los que al final marcan la diferencia**.

### Resumen

Poner al usuario como centro del proceso de desarrollo nos ayudará a realizar productos que sean del agrado de quienes lo van a utilizar. Sabemos que es imposible de antemano captar todos los requerimientos y necesidades de nuestra aplicación por lo que debemos dejar que sean las propias personas que la van a emplear quienes nos digan que es lo que quieren y como lo quieren.

Empleando metodologías ágiles conseguimos ser capaces de crear productos cuyas características no han sido detalladas a priori, que evolucionan conforme avanza el desarrollo pero que sin embargo cumplen con las necesidades de quienes lo van a emplear.

