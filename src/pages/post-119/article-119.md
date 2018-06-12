---
title: "ruby on rails firebird y problemas con insert"
date: '2008-01-26T22:29:00+00:00'
slug: '/blog/2008/01/ruby-on-rails-firebird-y-problemas-con-insert'
tags: ["firebird", "rails", "ruby"]
category: 'desarrollo-web'
excerpt: "He descargado la última versión del firebird-adapter desde gems.rubyonrails.org y cuando voy a insertar un registro me da un error diciendo que insert is an abstract method"
---
He descargado la última versión del firebird-adapter desde gems.rubyonrails.org y cuando voy a insertar un registro me da un error diciendo que "insert is an abstract method".

Trasteando he visto que active-record-firebird-adapter-1.0.0 no tiene definido el método insert y lógicamente al heredar de abstract-record que si lo tiene pues se queja.

Realmente no se si es correcto que esto sea así pero yo lo he añadido de la siguiente forma:

`
def insert(sql, name = nil, pk = nil, id_value = nill, sequence_name = nill)
 execute sql, name
end
`

Desde entonces los insert funcionan correctamente.

No estoy seguro al 100% de que esta forma sea la correcta y además me parece muy sospechoso que se hayan olvidado del método insert.. pero lo que es seguro es que haciendo esto todo funciona.

Si alguien tiene una explicación mejor que me la diga.
