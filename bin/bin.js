var path = require('path'),
    Wapp = require('../main.js'),
    location = path.resolve(process.cwd(),process.argv[3] || '');

switch(process.argv[2]){
  
  case 'build':
    Wapp.build(location);
    break;
    
  case 'watch':
    Wapp.build(location,true);
    break;
    
  default:
    console.log('\nwapp (build|watch) [client location]\n');
    break;
    
}

