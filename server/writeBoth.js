var Cb = require('y-callback/node'),
    wrap = require('y-walk').wrap,

    fs = require('fs'),
    zlib = require('zlib'),

    writeBoth;

writeBoth = wrap(function*(file,data){
  var gz,cb;

  fs.writeFile(file,data,cb = Cb());

  gz = zlib.createGzip({level: 9, memLevel: 9});
  gz.write(data);
  gz.end();

  yield gz.pipe(fs.createWriteStream(file + '.gz'));
  yield cb;

});

/*/ exports /*/

module.exports = writeBoth;
