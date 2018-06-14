---
title: "Google xml maps - Indexa mejor tu web"
date: '2005-07-19T19:20:00+00:00'
slug: '/blog/2005/07/google-xml-maps-indexa-mejor-tu-web'
tags: ["google", "sitemap"]
category: 'desarrollo-web'
excerpt: "Voy a hablar hoy de una nueva utilidad de Google para mejorar la manera en que este buscador indexa nuestras páginas."
---
Voy a hablar hoy de una nueva utilidad de [Google](http://www.google.com) para mejorar la manera en que este buscador indexa nuestras páginas. Los [GoogleSiteMaps](https://www.google.com/webmasters/sitemaps) es un servicio operativo aunque todavía está en fase Beta.

Se trata de construir mediante [XML](http://www.xml.com/pub/a/98/10/guide0.html) una lista de páginas que queremos que el buscador indexe. Esta lista la guardamos con el nombre de sitemap.xml y le comunicamos a Google que hemos creado un fichero sitemap.xml. Ellos lo toman como referencia para indexar nuestro sitio y nosotros nos aseguramos de que realmente conocen todas aquellas páginas que a nosotros nos interesa que conozcan.

Para facilitar el trabajo existen [herramientas gratuitas](http://www.tarrantit.com/GoogleSiteMap/) que [generan](http://www.tm-research.com/products/google-sitemap/)este sitemap [por nosotros](http://sourceforge.net/projects/goog-sitemapgen). Si no queremos tomarnos la molestia de enviar a Google este xml pues creamos un enlace al fichero desde nuestra home y el buscador será capaz de interpretarlo.

Realmente este sistema solo aporta ventajas evidentes a aquellos sitios que Google no indexa en su totalidad o en el que existen páginas que no queremos que indexe, ya que podemos excluir determinadas páginas para evitar que las indexe. Cuando hay un conflicto entre el contenido de nuestro [robots.txt](http://www.robotstxt.org/wc/robots.html) con el del xml Google hace caso al robots.txt.

Para aquellos de vosotros que tengais que mantener varios sitios lo mejor es abrirse una cuenta en GoogleSiteMaps (si ya tienes una cuenta de otro servico de Google, como GMail, no es necesario crear una nueva) y desde aquí podemos enviar los xml de forma centralizada y nos indicará como ha ido el proceso del fichero.

Una nueva herramienta, bastante útil, sobre todo a administradores de multiples webs.
