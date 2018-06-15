---
title: "Como instalar angularjs desde cero"
date: '2013-07-01T17:35:15+00:00'
slug: '/desarrollo-web/2013/07/como-instalar-angularjs-desde-cero'
tags: ["angularjs", "javascript"]
category: 'web-development'
excerpt: "Esqueleto básico de un proyecto AngularJS Instalado y creado desde cero con Yeoman y haciendo TDD con test unitarios y de integración. Explicado paso a paso."
draft: false
headerImage:
---
Crear un proyecto AngularJS desde cero no es una tarea sencilla pero tampoco tiene una dificultad excesiva. Os cuento paso a paso lo que he tenido que hacer para tener el esqueleto básico de un proyecto AngularJS instalado y funcionando. El proceso va a constar de tres fases:

1. Instalación
2. Creación de un controlador
3. TDD Test Driven Development

## Fase 1: Instalación

Para instalar AngularJS voy a utilizar [Yeoman](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original "Yeoman") que es un conjunto de herramientas destinadas a facilitar la instalación y [configuración de AngularJS](https://github.com/yeoman/generator-angular "yeoman generator") (y de más cosas aunque ahora nos intersa AngualarJS). ![Yeoman](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf54e4b0400995a88c7e/1392758612725/toolset-300x120.png?format=original)

Para ello escribimos:

`npm install -g yo generator-angular`

Vamos a crear ahora el directorio donde instalaremos nuestra aplicación. Como nos gusta seguir las tradiciones nuestra primera aplicación se llamará hola mundo

`
mkdir hello-world`

cd hello-world

Una vez dentro del directorio vamos a generar el esqueleto inicial de la aplicación.

`yo angular hello-world`

Durante el proceso de instalación nos harán una serie de preguntas

`
[?] Would you like to include Twitter Bootstrap?: Yes`

[?] Would you like to use Twitter Bootstrap for Compass (as opposed to vanilla CSS)?: No

[?] Would you like to include angular-resource.js?: Yes

[?] Would you like to include angular-cookies.js?: Yes

[?] Would you like to include angular-sanitize.js?: Yes



Lo que he respondido en estas preguntas es que si que quiero que me incluya [Twitter Bootstrap](http://twitter.github.io/bootstrap/ "framework css"), que es un framework css que te facilita la vida a la hora de maquetar y aplicar estilos a tus aplicaciones web. No quiero Compass ya que no lo conozco y me manejo bastante bien tocando CSS directamente. Y también he confirmado que quiero que añada tres librerías con recursos aunque para este ejemplo no las voy a usar para nada.

Una vez finalizado este proceso ya tenemos todo lo necesario para ejecutar nuestra aplicación. Para ello vamos a lanzar el servidor web escribiendo:

`grunt server`

Se nos abrirá el navegador por defecto y podremos ver la página de inicio de nuestra nueva y flamante aplicación.

## Fase 2: Creación de un controlador

Una de las ventajas que nos ofrece Yeoman son unos generadores que nos simplifican la vida a la hora de añadir recursos a nuestra aplicación como controladores, directivas, filtros, rutas, etc.

Para probar nuestra aplicación vamos a generar una nueva ruta que vamos a llamar _hello_. Para hacer esto escribimos el siguiente comando.

yo angular:route hello

y obtendremos algo similar a esto:`
invoke   angular:controller:/usr/local/lib/node_modules/generator-angular/route/index.js
create     app/scripts/controllers/hello.js
create     test/spec/controllers/hello.js
invoke   angular:view:/usr/local/lib/node_modules/generator-angular/route/index.js
create     app/views/hello.html
`

Como podemos ver se nos han creado tres nuevos ficheros:

- app/scripts/controllers/hello.js que será donde escribiremos la lógica de nuestra aplicación.
- test/spec/controllers/hello.js para escribir los test relacionados con el fichero anterior.
- app/views/hello.html donde definiremos la información que mostraremos tras ejecutar el controlador hello.js

Si ahora vamos al navegador donde tenemos abierta la aplicación (el último paso que hicimos en la fase 1) y cambiamos la url_http://localhost:9000/_ por esta otra_http://localhost:9000/#/hello_ veremos un nuevo texto que dice: "This is the hello view."

Y con esto hemos acabado el paso 2. Hemos añadido un nuevo recurso de forma fácil a nuestra aplicación. Ahora ya podemos comenzar a modificarla pero como buenos programadores que somos, lo haremos [haciendo TDD (Test Driven Development)](http://en.wikipedia.org/wiki/Test-driven_development "tdd").

## TDD Test Driven Development

### Tests unitarios

En primer lugar, vamos a configurar nuestra aplicación para que ejecute los test unitarios. Para ello vamos a utilizar [Karma](http://karma-runner.github.io/0.8/plus/AngularJS.html "Karma angularJS"), que es otra herramienta que ya tenemos instalada y que sirve para ejecutar test de forma automática.

Para lanzar Karma, desde el directorio donde está la aplicación ejecutamos:

karma start

Y obtendremos lo siguiente:



INFO [karma]: Karma server started at http://localhost:8080/

INFO [launcher]: Starting browser Chrome

INFO [Chrome 27.0 (Mac)]: Connected on socket id UoPAKe4u8NZRs-owuovF

Chrome 27.0 (Mac): Executed 2 of 2 SUCCESS (0.138 secs / 0.029 secs)



Karma lanza un servidor web desde donde nos irá mostrando los resultados al ejecutar los test unitarios. Cuando creas un nuevo fichero de test o bien modificas un test existente es muy útil que los test se vuelvan a ejecutar automáticamente.  Si no te ocurre esto, modifica el fichero karma.conf.js y cambia la propiedad _autoWatch = false;_  y ponla a true _autoWatch = true_ de esa forma karma volverá a ejecutar automáticamente los test del fichero que modifiques.

Con Karma funcionando vamos a crear nuestro primer test: Vamos a cambiar el texto "This is the hello view." por otro. Abre el fichero test/spec/controllers.hello.js con tu editor favorito y escribe esto:



1 'use strict';

2

3 describe('Controller: HelloCtrl', function () {

4

5 // load the controller's module

6 beforeEach(module('helloWorldApp'));

7

8 var HelloCtrl,

9 scope;

10

11 // Initialize the controller and a mock scope

12 beforeEach(inject(function ($controller, $rootScope) {

13 scope = $rootScope.$new();

14 HelloCtrl = $controller('HelloCtrl', {

15 $scope: scope

16 });

17 }));

18

19 it('should show an awesome name', function () {

20 expect(scope.awesomeName).toBe('Mayte');

21 });

22 });

Cuando guardemos el fichero, Karma detectará los cambios y ejecutará el nuevo test y obtendremos el siguiente mensaje:



INFO [watcher]: Changed file "/Users/jorgealvarezmoreno/Sites/jorge/angularjs/hello-world/test/spec/controllers/hello.js".

Chrome 27.0 (Mac) Controller: HelloCtrl should show an awesome name FAILED

Expected undefined to be 'Mayte'.

**Error: Expected undefined to be 'Mayte'.**

at null.\<anonymous\> (/Users/jorgealvarezmoreno/Sites/jorge/angularjs/hello-world/test/spec/controllers/hello.js:20:31)

Chrome 27.0 (Mac): Executed 2 of 2 (1 FAILED) (0.296 secs / 0.021 secs)



Ya tenemos nuestro test fallando, requisito indispensable para que un programador TDD pueda escribir código. Lo que el test nos indica es que algo que no está definido tiene que tener el valor Mayte (Expected undefined to be Mayte). Esto es así porque en la línea 20 del test le hemos dicho que scope.awesomeName tiene que ser igual a Mayte. Scope ya está definido por AngularJS pero la propiedad awesomeName no y por lo tanto tenemos un fallo.

Para hacer que nuestro test funcione tenemos que modificar el fichero app/scripts/controllers/hello.js y escribir esto:



1 'use strict';

2

3 angular.module('helloWorldApp')

4 .controller('HelloCtrl', function ($scope) {

5 $scope.awesomeName = 'Mayte';

6 });

Como puedes ver, en la línea 5 definimos la propiedad awesomeName y le asignamos el valor Mayte. Guardamos los cambios, Karma detecta estas modificaciones y vuelve a ejecutar los test.



INFO [watcher]: Changed file "/Users/jorgealvarezmoreno/Sites/jorge/angularjs/hello-world/app/scripts/controllers/hello.js".

Chrome 27.0 (Mac): Executed 2 of 2 SUCCESS (0.371 secs / 0.04 secs)



Ya tenemos nuestra suite de test unitarios funcionando. Es el momento de pasar a los test de integración.

### Tests de integración e2e (end to end)

AngularJS nos proporciona su propia herramienta para ejecutar test de integración llamada [Angular Scenario Runner](http://docs.angularjs.org/guide/dev_guide.e2e-testing "AngularJS scenario Runner"). Están basados en Jasmine y he de decir que ha sido, con diferencia, la parte más complicada hasta que he podido tenerlo todo configurado y en marcha.

La configuración por defecto de Yeoman no me ha funcionado así que estos son los cambios que he tenido que hacer.

En el fichero Gruntfile.js

He quitado este código:



karma: {

unit: {

configFile: 'karma.conf.js',

singleRun: true

}

}



Y lo he cambiado por este otro:



karma: {

e2e: {

configFile: 'karma-e2e.conf.js',

singleRun: true

},

unit: {

configFile: 'karma.conf.js',

singleRun: true

}

}



También en este mismo fichero Gruntfile.js hay que cambiar este código:



grunt.registerTask('test', [

'clean:server',

'coffee',

'compass',

'connect:test',

'karma'

]);

Por este otro código:



grunt.registerTask('test:unit', [

  'clean:server',

  'concurrent:test',

  'connect:test',

  'karma:unit'

 ]);

 grunt.registerTask('test:e2e', [

  'clean:server',

  'karma:e2e'

]);

Por último en el fichero karma-e2e.config.js hay que añadir estas líneas:



proxies = {

  '/': 'http://localhost:9000' // Keep this in sync with localhost port in Gruntfile.

};

urlRoot = '/\_\_e2e/';

El problema es que, al igual que los test unitarios, los test e2e se lanzan desde un servicio web que interactúa con el servidor web donde tenemos lanzada la aplicación. Pero por restricciones de seguridad, no funcionará si no tenemos bien configurado el proxy en karma-e2e.config.js. Es decir nuestro servidor de test tiene que poder hablar con el servidor de la aplicación para pedirle las páginas y recibir la respuesta. Y este proceso no es automático y transparente para nosotros sino que debemos asegurarnos de tener funcionando un servidor con la aplicación antes de ejecutar el servidor de test e2e.

Por eso ahora lanzamos el servidor web (en caso de que no lo tengas lanzado de antes).

`grunt server`

y en otra terminal escribimos:

`grunt test:e2e`

y obtendremos el siguiente mensaje:



Running "clean:server" (clean) task

Running "karma:e2e" (karma) task

WARN [proxy]: proxy "http://localhost:9000" normalized to "http://localhost:9000/"

INFO [karma]: Karma server started at http://localhost:8080/\_\_e2e/

INFO [launcher]: Starting browser Chrome

INFO [Chrome 27.0 (Mac)]: Connected on socket id kHaaNcx2GsCYTL7hsdjT

Chrome 27.0 (Mac): Executed 1 of 1 SUCCESS (0.86 secs / 0.6 secs)



Es decir Karma e2e está funcionando y nuestro test (bueno, el que vienen por defecto al instalar AngujarJS) funciona.

Vamos a escribir ahora el test que queremos para nuestro controlador. Abrimos el fichero test/e2e/views/hello.js (o lo creas si no existe) y escribimos esto:



1 describe("Hello My Awesome controller", function() {

2

3 beforeEach(function() {

4 browser().navigateTo('/#/hello');

5 });

6

7 it('should show the contents of awesomeName', function() {

8 expect(element('p.ng-scope').text()).toEqual('My name is Mayte');

9 });

10 });

Aquí estamos diciendo que al entrar en el navegador en la página http://localhost:9000/#/hello esperamos que haya un elemento html de tipo paragraph (p) con la clase ng-scope y cuyo contenido sea "My name is Mayte".  Como esto no es cierto al ejecutar grunt test:e2e obtendremos este mensaje:



Running "clean:server" (clean) task

Running "karma:e2e" (karma) task

INFO [karma]: Karma server started at http://localhost:8080/\_\_e2e/

INFO [launcher]: Starting browser Chrome

INFO [Chrome 27.0 (Mac)]: Connected on socket id 7MsdITzRNadxbQdNyXRN

Chrome 27.0 (Mac) Hello My Awesome controller should show the contents of awesomeName FAILED

expect element 'p.ng-scope' text toEqual "My name is Mayte"

**http://localhost:8080/base/test/e2e/views/hello.js?1372590789000:8:5: expected "My name is Mayte" but was "This is the hello view."**

Chrome 27.0 (Mac): Executed 2 of 2 (1 FAILED) (1.1 secs / 0.812 secs)



Como podéis ver esperamos el texto "My name is Mayte" pero sin embargo tenemos el texto que veíamos al principio: "This is the hello view".

Hacer que el test funcione es tan sencillo como abrir el fichero app/views/hello.html y cambiar su contenido por este:

\<p\>My name is {{awesomeName}}\</p\>

Lo que hacemos aquí es enlazar el contenido de la propiedad awesomeName (que habíamos definido previamente en el controlador) y mostrarlo en nuestra vista. Si volvemos a lanzar los test de integración con grunt test:e2e obtendremos esto:``

Running "clean:server" (clean) task



Running "karma:e2e" (karma) task

INFO [karma]: Karma server started at http://localhost:8080/\_\_e2e/

INFO [launcher]: Starting browser Chrome

INFO [Chrome 27.0 (Mac)]: Connected on socket id 2Y9gOmPLTsoS42IuzWTf

Chrome 27.0 (Mac): Executed 2 of 2 SUCCESS (1.077 secs / 0.803 secs)

Done, without errors.

Es decir todos nuestros test funcionan y tenemos una aplicación AngularJS lista para empezar a trabajar con ella.



### Resumen

Gracias a Yeoman crear un proyecto AngularJS desde cero es fácil y rápido, así como trabajar con test unitarios. Hacer funcionar los test de integración me supuso más problemas de los esperados y tener que usar mucho Google para buscar posibles soluciones a mis problemas. La necesidad del proxy no queda nada clara y sólo tras mucho leer otros post he logrando entender que era lo que se necesitaba para hacer que e2e funcionase.

Adjunto algunos de los post y enlaces que me han servido como ayuda para tener todo en marcha y funcionando:

[http://newtriks.com/2013/06/11/automating-angularjs-with-yeoman-grunt-and-bower/](http://newtriks.com/2013/06/11/automating-angularjs-with-yeoman-grunt-and-bower/)[http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html)[http://kylehodgson.com/2013/03/15/testing-with-angulars-e2e-testing-framework/](http://kylehodgson.com/2013/03/15/testing-with-angulars-e2e-testing-framework/)[http://docs.angularjs.org/guide/dev\_guide.e2e-testing](http://docs.angularjs.org/guide/dev_guide.e2e-testing)[http://yeoman.io/](http://static.squarespace.com/static/5303797ae4b0c6ad9e43f072/5303ce80e4b0400995a883d6/5303cf35e4b0400995a88b0c/1392758581676/?format=original "Yeoman")
