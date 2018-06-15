---
title: "Ruby on Rails - Bases de datos - Parte II"
date: '2006-01-04T10:29:00+00:00'
slug: '/blog/2006/01/ruby-on-rails-bases-de-datos-parte-ii'
tags: ["rails"]
category: 'Desarrollo Web'
excerpt: "En este segundo artículo sobre las bases sobre las que seasienta Rails voy a hablar de las bases de datos y el papel que juegan en el desarrollo de una aplicación con Rails.Si no has leído los artícu..."
---
En este segundo artículo sobre las bases sobre las que seasienta Rails voy a hablar de las bases de datos y el papel que juegan en el desarrollo de una aplicación con Rails.

Si no has leído los artículos anteriores puedes [ir a la Introducción](http://www.riojasoft.com/articles/2005/12/02/ruby-on-rails-solamente-un-framework-para-desarrollo-web-introducci%F3n)

El principal creador de Rails (David Heinemeier) [considera que toda la lógica](http://www.loudthinking.com/arc/000516.html) debe estar centralizada en la aplicación y no repartida en la base de datos:

> No, Mr. Database, you can not have my business logic. Your procedural ambitions will bear no fruit and you'll have to pry that logic from my dead, cold object-oriented hands.

Seguramente más de un administrador de bases de datos estará ahora mismo rechinando sus dientes y gritando: ¡herejía! ¡ Este tipo está loco y no sabe de lo que habla! -volvamos a citar a David:

> As long as you're not banking your savings on a hope we'll change our ways once MySQL "grows up" and adds all these Enterprise Features to become something bigger and better than a "toy project". You'll die poor, then, I tell you.

Pero bueno, dejemonos de sensacionalismos y vayamos al grano, a explicar como esta filosofía ha condicionado el desarrollo de Rails, y más concretamente de ActiveRecord.

### ActiveRecord

#### Convención frente a configuración

ActiveRecord, al igual que el resto de Rails, favorece la convención frente a la configuración, es decir, seguir unas normas (convenciones) ya establecidas a la hora de, por ejemplo, llamar a las tablas, campos, ficheros, etc.... Esto nos evita (o minimiza) el tener que crear y mantener ficheros de configuración y parametrización.

Los nombres de las tablas deben ser todos en plural: Coches, Productos, Personas, mientas que los Objetos que las referencian iran en singular Coche, Producto, Persona (Rails es lo suficientemente inteligente como para si creamos un objeto de tipo Coche automáticamente saber que su tabla asociada es Coches, si trabajamos con los nombres de las tablas en inglés, muy recomendable, sera capaz de asociar Person con people, así como muchas otras formas de plural irregulares).

En cuanto al nombre de los campos, rails nos permite total libertad. Por supuesto existen una serie de _convenciones_que nos facilitarán y simplificarán la tarea de crear los campos de las tablas: si un campo acaba en \_at (vendido\_at) rails espera (y lo tratará), un campo de fecha-hora mientras que si acaba en \_on (visitado\_on) espera un campo de fecha.

Si nuestra tabla incluye un campo llamado lock\_version rails implementará de manera automática bloqueos optimistas a la hora de gestionar la concurrencia (2 ó más usuarios accediendo al mismo registro).

Si añadimos un campo llamado created\_at ó created\_on rails se encargará de insertar la fecha/hora de creación cuando demos de alta un nuevo registro. Para control de modificaciones podemos crear un campo llamado updated\_at updated\_on.

#### Relaciones entre tablas

Rails implementa las relaciones entre tablas mediante etiquetas :has\_one, :has\_many, :belongs\_to y :has\_and\_belongs\_to\_many Este último para relaciones muchos-a-muchos.

Al definir las relaciones entre tablas se crean una serie de metodos de instancia muy útiles en su posterior manejo.

Una ayuda muy útil es la que nos proporciona para mantener un contador automático y evitarnos constantes consultas del tipo "select count(\*)" mediante el uso de un campo \_count.

Otra de las ventajas de Rails es la herencia. Al trabajar con objetos podemos aprovechar la herencia para crear modelos de datos que comparten una única tabla de la base de datos. Por ejemplo: podemos tener una tabla llamada vehículos y crear nuestros modelos de datos de la siguiente forma:

class vehiculo \< ActiveRecord::Base Esto generaría el modelo de datos maestro. Gracias a la herencia ahora podemos hacer:

Turismo \< Vehiculo

Furgoneta \< Vehiculo

Rails se encarga de diferenciar automáticamente los diferentes tipos de registros (Turismos, Furgonetas) gracias al empleo de un campo type (que habremos de definir en la tabla maestra).

#### Validación

Una de las opciones más útiles y potentes son los validadores. Mediante esta opción podremos verificar la coherencia e integridad de los datos.

Rails nos proporciona 3 eventos de validación: Validate, Validate\_on\_create y Validate\_on\_update donde podremos situar todo el código que deseemos para asegurarnos de la coherencia de los datos recibidos con los esperados (números, fechas, nombres, etc....). Además nos proporciona unos cuantos validadores predefinidos (helpers) que simplificaran las tareas de validación como ejemplo ( validates\_length\_of ó validates\_numericality\_of.

#### Callbacks

Los callbacks son a Rails como los Trigges a las base de datos. Existen una serie de métodos del tipo:

-before\_validation

-after\_validaton

-before\_save

-after\_update

-before\_create

-after\_save

-etc.....

en los que podremos insertar nuestro código. Rails nos permite crear callbacks comunes a varios modelos de datos. Recordemos que Rails es un framework <acronym title="Dont Repeat Yourself">DRY</acronym>.

#### Observers

Los observers están pensados para añadir funcionalidad a los modelos de datos sin tener que modificar su código. Los métodos creados como observers se añaden al modelo de datos aunque sin llegar a pertenecer al mismo de manera que el modelo de datos no se ve afectado. También es posible crear observers comunes a varios modelos de datos.

#### Resumen

Rails nos proporciona toda una serie de herramientas para evitar trasladar código (lógica de negocio que dirian los analistas) a la base de datos mediante el uso de la clase Active Record.

El conocimiento de esta clase y sus capacidades son decisivos para aprovechar las ventajas de Rails y su filosofía de creación de aplicaciones web de forma rápida y efectiva.

Mi experiencia personal me demuestra que el uso de Active Record de forma eficiente simplifica y agiliza el desarrollo de forma notable. Al minimizar el trabajo con la base de datos (escribiendo triggers y procedimientos almacenados) y emplear un único lenguaje para todo el desarrollo, se consigue acortar los tiempos de desarrollo (time2market).

Sin embargo una vez que nuestra aplicación está funcionando conviene analizarla y detectar posibles cuellos de botella y procesos que serían mucho más eficientes ejecutados en forma de trigger o procedimiento almacenado.

He trabajado en bastantes proyectos que gastaban más tiempo en optimizar una aplicación para que soporte 1.000 usuarios concurrentes que en conseguir, antes de nada, esos 1.000 usuarios concurrentes.

