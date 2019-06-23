---
title: "URL named params parser"
date: '2019-05-07T11:47:00+00:00'
slug: '/blog/2019/5/url-params-parser-npm-package'
tags: ["javascript", "url", "parser", "npm"]
category: 'web-development'
excerpt: "If you need to extract named params from a URL in the form of /admin/employee/:id Then this library will help you with that. It's very small in size."
draft: false
headerImage: 'https://alvareznavarro-images.s3.eu-central-1.amazonaws.com/green_tree.jpg'
---

If you work in web development you have probably found yourself in a situation where you need to extract named params from a URL.

[Url-params-parse](https://github.com/jorgegorka/url-params-parser) will give you several useful methods that will help you manage named and query params.

```javascript
import { UrlParser } from 'url-params-parser'

// UrlParser(url, placeholder)

const urlParser = UrlParser(
  "https://address.com/employees/show/1234/developer/reports/asc",
  "/employees/show/:id/:title/reports/:order"
)

urlParser.namedParams
// returns { id: "1234", title: "developer", order: "asc" }
)
```

These are some other useful methods:

### namedParams

Returns an object with all the named params and their values

```:javascript
urlParser.namedParams
// returns { id: "1234", title: "developer", order: "asc" }
```

### namedParamsKeys

Returns an array with all the named param keys

```:javascript
urlParser.namedParamsKeys
// returns ["id", "title", "order"]
```

### namedParamsValues

Returns an array with all the named param values

```:javascript
urlParser.namedParamsValues
// returns ["1234", "developer", "asc"]
```

### queryParams

Returns an object with all query params and their values

```:javascript
urlParser.queryParams
// returns { climate: "change", "sea-level": "rising" }
```

### queryParamsKeys

Returns an array with all the query param values

```:javascript
urlParser.queryParamsKeys
// returns [ climate, "sea-level" ]
```

### queryParamsValues

Returns an array with all the query param values

```:javascript
urlParser.queryParamsValues
// returns [ "change", "rising" ]
```

### pathNames

Returns an array with all the elements of a pathname

```:javascript
urlParser.pathNames
// returns [ "employees", "show", "1234", "developer", "reports", "asc" ]
```

[url-params-parser](https://github.com/jorgegorka/url-params-parser) is available under the MIT license.
