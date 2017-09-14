var Trumpet = require('trumpet')

var TAG_START = '<link'
var TAG_END = 'rel=stylesheet>'

module.exports = transformHtml

function transformHtml(externalTags){

  var trumpet = Trumpet()

  trumpet.selectAll('head', function (node) {
    var readStream = node.createReadStream()
    var writeStream = node.createWriteStream()
    // insert external tags
    externalTags.forEach(function(tag){
      writeStream.write(TAG_START+' src="'+tag+'" '+TAG_END)
    })
    // append original content of head
    readStream.pipe(writeStream)
  })

  return trumpet

}

