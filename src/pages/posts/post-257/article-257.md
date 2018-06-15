---
title: "Métricas para la gestión de proyectos web: Desarrollo"
date: '2013-05-03T08:28:59+00:00'
slug: '/blog/2013/05/metricas-para-la-gestion-de-proyectos-web-desarrollo'
tags: ["gestion-proyectos-web"]
category: 'Desarrollo Web'
excerpt: "Medir el rendimiento de nuestro desarrollo no es una tarea fácil.  Utilizar metodologías ágiles como Scrum nos ayuda y disponemos de indicadores como la velocidad o el burndown rate pero son valores cuantitativos que por si solos dicen muy poco acerca de la calidad del código generado.  Necesitamos un indicador cualitativo.  Yo utilizo uno de mi invención que denomino Quality Score."
---
Medir el rendimiento de nuestro desarrollo no es una tarea fácil. Utilizar metodologías ágiles como Scrum nos ayuda y disponemos de indicadores como la velocidad o el burndown rate pero son valores cuantitativos que por si solos dicen muy poco acerca de la calidad del código generado. Necesitamos un indicador cualitativo. Yo utilizo uno de mi invención que denomino Quality Score.<!--more-->

## Medir la calidad de un desarrollo web no es fácil

Cualquiera que haya tenido que gestionar un proyecto web sabrá que medir la calidad del desarrollo es algo complejo. Existen muchas métricas, es cierto, aunque la mayoría de ellas tienen dos grandes problemas:Son métricas cuantitativas y miden productividad a nivel personal.

Antes de ver como podemos medir un proyecto web vamos a ver que tres parámetros no debemos medir:

1. No usar métricas arbitrarias
2. No medir personas sino al equipo en su conjunto
3. No se mide la productividad individual sino la calidad colectiva

### No usar métricas arbitrarias

Las métricas basadas en evaluaciones personales (tanto propias, como por parte de un superior) no sirven. Son subjetivas y miden a una sola persona de forma aislada. Los datos deben ser objetivos siempre.

### No medir personas sino al equipo en su conjunto

Uno de los grandes aciertos de la filosofía Scrum es la propiedad colectiva del código. Para que un proyecto web salga adelante necesitamos que el equipo se sienta como tal. Las tareas no son mias ni tuyas sino nuestras y debemos ayudarnos entre todos para solucionarlas. Trabajar en pares (pair-programming) ayuda de forma considerable a fomentar el sentimiento de equipo.

### No se mide la productividad individual sino la calidad colectiva

Medir la productividad de un desarrollador es una batalla perdida de antemano. No existe una forma fiable de hacerlo y además estamos fomentando el individualismo. Nadie querrá hacer cosas que puedan afectar a su productividad individual.

## Que métricas podemos usar?

Una vez que tenemos claro lo que NO queremos medir tenemos que buscar la fórmula para poder medir la calidad de nuestro desarrollo web. A este K.P.I. lo denomino Quality Score. No es un nombre muy original pero deja claro lo que pretende mostrar.

**Quality Score** : 0-100

- Puntos completados en el sprint
- Numero de errores resueltos
- Numero de erroresañadidos
- Apdex Score

El Quality Score es un indicador que varía entre cero y cien puntos. Cada uno de sus cuatro apartados están baremados de forma que entre los cuatro suman 100 puntos. El peso que asignemos a cada apartado debe variar dependiendo de la fase de proyecto en la que nos encontremos. No es lo mismo un proyecto en producción que uno que todavía no lo está, ni un proyecto que ya lleva unos años frente a otro que acaba de lanzarse a producción.

Lo que pretendo conocer con este indicador es lo siguiente:

- **Desempeño como equipo**. Los puntos completados en el sprint nos dan una idea del buen hacer como equipo.
- **Calidad del desarrollo**. Los erroresresueltos frente a loserrores nuevos creados nos dan una referencia de la calidad del código que estamos creando. La gravedad de los errores nos ayuda a saber el nivel de frustración de los usuarios de nuestro producto web.
- **Satisfacción de los usuarios**. El [Apdex Score](http://en.wikipedia.org/wiki/Apdex "apdex score") es un estándar para medir la satisfacción de los usuarios. Nos ayuda a evaluar el rendimiento de nuestro producto web y su impacto en la satisfacción de quienes lo usan.

Una vez sumada cada métrica y baremada según su peso obtendremos un total entre cero y cien puntos que nos dará una idea de como funciona nuestro proyecto. A cada sprint le asignamos un Quality Score lo que nos permitirá tener un histórico de la evolución del proyecto y detectar posibles problemas.

### Resumen

Necesitamos poder medir como evoluciona nuestro proyecto web como única forma de mejorar en nuestro día a día y para detectar y prevenir problemas. Esta métrica pretende ayudar a quienes gestionan proyectos web a tener una visión general de su rendimiento.

Cuales son en tu opinión las métricas y/o los K.P.I.s mejores para medir un proyecto web?

Cómo podríamos mejorar este K.P.I. para hacerlo más fiable?

Espero tus comentarios.

