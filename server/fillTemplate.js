var fs = require('fs'),
    path = require('path'),
    nijm = require('nijm'),
    template = (nijm(fs.readFileSync(path.resolve(__dirname,'template.html')) + '',true)).split('{{data}}');


function fillTemplate(JSONdata){
  return template.join(JSONdata);
}

/*/ exports /*/

module.exports = fillTemplate;
