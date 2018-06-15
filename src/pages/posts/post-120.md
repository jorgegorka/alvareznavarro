---
title: "Si la montaña no viene a Mahoma"
date: '2008-02-02T13:44:00+00:00'
slug: '/blog/2008/02/si-la-montaa-no-viene-a-mahoma'
tags: ["firebird", "rails"]
category: 'web-development'
excerpt: "La función rand que incluye Firebird no funciona del todo bien y me devuelve resultados que distan mucho de ser aleatorios por lo que para ordenar los resultados de una consulta no me sirve:`select ..."
draft: false
headerImage:
---
La función rand que incluye Firebird no funciona del todo bien y me devuelve resultados que distan mucho de ser aleatorios por lo que para ordenar los resultados de una consulta no me sirve:

`
select * from tabla order by rand()`

Solución: dejar que la base de datos haga lo que mejor sabe hacer, devolver registros en el menor tiempo posible y emplear ruby para el orden.

`
  resultados = find(:all, :limit => 10)
  resultados.sort_by { rand }
`
