var htmlInject = require('./')


process.stdin // <html><head></head><body>hello</body></html>
.pipe( htmlInject(['./main.css', './extra.css']) )
.pipe( process.stdout )