---
title: "Como obtener el sql generado por Active Record"
date: '2009-02-24T18:59:00+00:00'
slug: '/blog/2009/02/como-obtener-el-sql-generado-por-active-record'
tags: ["active_record", "rails", "ruby"]
category: 'Desarrollo Web'
excerpt: "A veces puede ser necesario guardar el contenido de una consulta para poder ejecutarlo más tarde.En Rails Active Record no proporciona una forma sencilla de obtener el sql que ha generado. Podemos ve..."
---
A veces puede ser necesario guardar el contenido de una consulta para poder ejecutarlo más tarde.

En Rails Active Record no proporciona una forma sencilla de obtener el sql que ha generado. Podemos verlo en el log pero no acceder a él directamente para poder guardarlo.

Por ello y después de un par de horas de Googleo he creado el siguiente código que extiende el objeto Active Record para darme lo que necesito.

module ActiveRecord  
 class Base  
 class \<\< self  
 def view\_sql(\*args)  
 options = args.extract\_options!  
 validate\_find\_options(options)  
 set\_readonly\_option!(options)  
 construct\_finder\_sql(options)   
 end  
 end  
 end  
end

Guardad el código anterior en un fichero dentro de la carpeta config/initializers (ejemplo: view\_sql.rb)

Ahora ya podemos obtener el código ejecutando nuestras consultas habituales con el núevo método:

Ejemplos:

Persona.view\_sql(6) nos devolverá 'select \* from personas where id=6'

Admite todas las opciones de find :condtions, :order, :joins..... etc...

