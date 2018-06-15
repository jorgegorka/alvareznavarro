---
title: "Creación de objetos en Javascript"
date: '2014-02-17T22:14:00+00:00'
slug: '/desarrollo-web/2014/2/creacion-de-objetos-en-javascript'
tags: ["objetos"]
category: 'javascript'
excerpt: "Iniciamos una serie sobre objetos en Javascript viendo las opciones más básicas sobre como crear un objeto.  Además comprobamos que las propiedades y los métodos contienen una serie de atributos que no están disponibles directamente pero que podemos configurar según nuestras necesidades."
draft: false
headerImage: 
---
Iniciamos una serie sobre objetos en Javascript viendo las opciones más básicas sobre como crear un objeto. Además comprobamos que las propiedades y los métodos contienen una serie de atributos que no están disponibles directamente pero que podemos configurar según nuestras necesidades.

## Objetos en Javascript

En javascript hay dos formas de crear un objeto. La primera de ellas consiste en utilizar el operador _new_ junto con el constructor _Object()_ como en el siguiente ejemplo:

    var receta = new Object();
    receta.nombre = "Tortilla de patata, deconstruida";
    receta.dificultad = 2;
    receta.ingredientes = ['huevos', 'aceite', 'patata', 'cebolla', 'sal'];

En este ejemplo hemos creado un nuevo objeto al que hemos llamado _receta_ que tiene 3 propiedades: nombre, dificultad e ingredientes.

Veamos ahora otra forma de crear el mismo objetos pero que nos permite escribir menos código:

    var receta = {
    nombre: "Tortilla de patata, deconstruida",
    dificultad: 2,
    ingredientes: ['huevos', 'aceite', 'patata', 'cebolla', 'sal']
    }

Mediante ambas formas obtenemos el mismo resultado aunque como puede verse con la segunda forma escribimos menos código.

Una vez que está creado el objeto podemos acceder a sus propiedades utilizando un punto entre el nombre del objeto y el nombre de la propiedad, por ejemplo escribiendo:

    receta.dificultad;
    
    // Devuelve: 2

También es posible acceder a las propiedades de un objeto empleando los corchetes:

    receta['dificultad']
    
    // Devuelve: 2

Ambas formas son equivalentes y de forma habitual se utiliza siempre la primera forma, aunque la segunda forma nos proporciona dos ventajas: Podemos pasar el nombre de la propiedad como variable y es la única forma de acceder a propiedades cuyo nombre provocaría un error de sintaxis al intentar acceder utilizando el punto:

    var nombreDeLaVariable = 'dificultad';
    receta[nombreDeLaVariable];
    
    // Devuelve: 2
    
    // Asignamos una propiedad con espacios en el nombre
    receta['tiempo de preparacion'] = '30 minutos';
    
    // Esto genera un error ya que no se pueden dejar espacios
    receta.tiempo de preparacion;
    
    // Esto sin embargo es correcto
    receta['tiempo de preparacion'];
    
    // Devuelve: 30 minutos

Hasta ahora hemos visto como asignar propiedades a un objeto. Las propiedades son variables que contienen información : Texto, Números, Arrays… y los métodos son variables que contienen funciones. Vamos a añadir un método a nuestro objeto receta:

    var receta = new Object();
    receta.nombre = "Tortilla de patata, deconstruida";
    receta.dificultad = 2;
    receta.ingredientes = ['huevos', 'aceite', 'patata', 'cebolla', 'sal'];
    receta.queNecesito = function() {
    alert(this.ingredientes.join(' y '));
    }
    receta.queNecesito();
    
    // Devuelve: huevos y aceite y patata y cebolla y sal

El método _queNecesito()_ muestra los ingredientes que necesitamos para preparar la receta y les añade la conjunción "y". Como es de esperar, dentro de la función que hemos creado tenemos acceso al resto de propiedades del objeto y por lo tanto podemos mostrar la lista de ingredientes escribiendo _this.ingredientes_. _This_ hace referencia al objeto actual (más sobre esto en próximos artículos).

Además de añadir propiedades y métodos también podemos borrarlos empleando el operador _delete_:

    delete receta.dificultad;
    receta.dificultad;
    
    // No muestra nada ya que la propiedad 'dificultad' ha sido borrada del objeto

También podemos conocer las propiedades y métodos disponibles en un objeto ya existente:

    for(var propiedad in receta){
    alert(propiedad + ': ' + receta[propiedad]);
    }
    
    // Devuelve: 
    // nombre: Tortilla de patata, deconstruida
    // dificultad: 2
    // ingredientes: huevos,aceite,patata,cebolla,sal
    // queNecesito: function () {
    // alert(this.ingredientes.join(' y '));
    // }

El código anterior recorre el objeto y nos devuelve el nombre cada una de sus propiedades y métodos.

## Data Properties

Las propiedades que hemos creado hasta ahora se conocen como Data Propierties o propiedades de datos y tienen cuatro atributos internos que nos permiten ajustar su comportamiento. Los atributos son: [[Configurable]], [[Enumerable]], [[Writable]] y [[Value]]. Los tres primeros tienen el valor True por defecto mientras que [[Value]] contiene el valor asignado.

- [[Configurable]] Indica si la propiedad puede ser eliminada utilizando el operador delete.
- [[Enumerable]] Indica si debemos mostrar esta propiedad en un bucle for in
- [[Writable]] Indica si el valor de la propiedad se puede modificar.
- [[Value]] Contiene el valor de la propiedad. En nuestro ejemplo, el contenido de [[Value]] para la propiedad nombre será "Tortilla de patata, deconstruida".

Si queremos cambiar el valor de alguno de estos cuatro atributos internos debemos emplear el método _defineProperty_ que se encuentra en _Object_. Este método espera tres argumentos: El objeto que queremos modificar, el nombre de la propiedad/método y el atributo o atributos internos que queremos modificar.

Veamos algunos ejemplos:

    var receta = new Object();
    receta.nombre = "Tortilla de patata, deconstruida";
    receta.dificultad = 2;
    receta.ingredientes = ['huevos', 'aceite', 'patata', 'cebolla', 'sal'];
    receta.queNecesito = function() {
    alert(this.ingredientes.join(' y '));
    }
    
    Object.defineProperty(receta, "dificultad", {writable: false})
    Object.defineProperty(receta, "nombre", {configurable: false})
    Object.defineProperty(receta, "queNecesito", {enumerable: false})
    
    for(var propiedad in receta){
    alert(propiedad + ': ' + receta[propiedad]);
    }
    
    // Devuelve:
    // nombre: Tortilla de patata, deconstruida
    // dificultad: 2
    // ingredientes: huevos,aceite,patata,cebolla,sal
    // El método queNecesito ya no aparece en la lista.
    
    delete receta.nombre;
    receta.nombre;
    
    // Devuelve: Tortilla de patata, deconstruida
    // Ya que no es posible borrar la propiedad nombre
    
    receta.dificultad = 5;
    receta.dificultad;
    
    // Devuelve: 2
    // Ya que no es posible modificar el valor de la propiedad dificultad

Un detalle importante a tener en cuenta es el hecho de que una vez que definimos una propiedad como no configurable ya no es posible volverla a definir como configurable otra vez.

## Accessor Properties

Además de las propiedades de datos, podemos definir un tipo de propiedades llamadas Accessor Properties en las que podemos configurar sus métodos Set y Get, es decir, la forma en la que asignamos valor o leemos el valor de la propiedad. Estas propiedades no pueden definirse explícitamente sino que ha de hacerse mediante _Object.defineProperty()_. y contienen cuatro atributos:

- [[Configurable]] Indica si la propiedad puede ser eliminada utilizando el operador delete.
- [[Enumerable]] Indica si debemos mostrar esta propiedad en un bucle for in
- [[Get]] Indica la función a la que llamar cuando se quiera obtener el valor de esta propiedad.
- [[Set]] Indica la función a la que llamar cuando se quiera escribir un valor en esta propiedad.

Veamos un ejemplo:

    var receta = new Object();
    receta.nombre = "Tortilla de patata, deconstruida";
    receta.dificultad = 2;
    receta.votos = 388;
    receta.ingredientes = ['huevos', 'aceite', 'patata', 'cebolla', 'sal'];
    receta.queNecesito = function() {
    alert(this.ingredientes.join(' y '));
    }
    
    Object.defineProperty(receta, "popularidad", {
    get: function() {
    if (this.votos \> 1000) {
    return "Receta popular";
     } else {
    return "No gusta mucho";
     }
     },
    set: function(nuevoValor) {
    this.votos += nuevoValor;
     }
    });
    
    receta.popularidad;
    // Devuelve: "No gusta mucho"
    receta.votos
    // Devuelve: 388
    
    receta.popularidad = 900;
    // Añadimos 900 votos
    
    receta.popularidad;
    // Devuelve: "Receta popular"
    receta.votos;
    // Devuelve: 1288

Hemos definido una nueva propiedad llamada popularidad a la que hemos asignado en el atributo get una función que devuelve un texto en función del número de votos que ha recibido la receta. En el atributo set, al intentar asignar un valor a la propiedad lo que hacemos es sumar ese número al valor de la propiedad votos.

## Atributos

Para conocer el valor de los atributos de una propiedad debemos utilizar el método Object.getOwnPropertyDescriptor():

    var ownProperty = Object.getOwnPropertyDescriptor(receta, "votos");
    
    for (var descriptor in ownProperty) {
    alert(descriptor + ': ' + ownProperty[descriptor]);
    }
    
    // Devuelve:
    // value: 388
    // writable: true
    // enumerable: true
    // configurable: true

### Resumen

En esta primera aproximación a los objetos en Javascript hemos creado objetos de forma sencilla y comprobado que hay una serie de atributos que si bien no están disponibles a simple vista conviene conocer ya que pueden ser de mucha utilidad.

