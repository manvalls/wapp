var wrap = require('y-walk').wrap,
    Cb = require('y-callback/node'),

    fs = require('fs'),
    path = require('path'),

    prepareDir;


prepareDir = wrap(function*(dir){
  var parts = dir.split(path.sep),
      cb,i;

  for(i = 0;i < parts.length;i++) if(parts[i]){

    dir = parts.slice(0,i + 1).join(path.sep);
    fs.mkdir(dir,cb = Cb());

    try{ yield cb; }
    catch(e){ }

  }

});

/*/ exports /*/

module.exports = prepareDir;
