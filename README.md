# html-inject-css

Transform stream for injecting css tags into html.

### example:

```js
var injectScripts = require('html-inject-css')

process.stdin
.pipe( injectScripts(['./main.css', './extra.css']) )
.pipe( process.stdout )
```

input:
```html
<html><head></head><body>hello</body></html>
```
output:
```html
<html><head><link src="./main.css" rel=stylesheet><link src="./extra.css" rel=stylesheet></head><body>hello</body></html>
```

### cli

```bash
cat index.html | htmlinjectcss "main.css" > output.html
```

### Gotcha:
requires a head tag to be present in the src.