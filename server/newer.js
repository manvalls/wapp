var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,

    fs = require('fs'),

    newer;

newer = wrap(function*(file1,file2){
  var stats1,stats2,cb;

  try{
    fs.stat(file1,cb = Cb());
    stats1 = yield cb;
  }catch(e){ return false; }

  try{
    fs.stat(file2,cb = Cb());
    stats2 = yield cb;
  }catch(e){ return true; }

  return stats1.mtime > stats2.mtime;
});

/*/ exports /*/

module.exports = newer;
