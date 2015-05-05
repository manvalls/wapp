var path = require('path'),
    help = require('u-help'),
    
    Wapp = require('../main.js'),
    location = path.resolve(process.cwd(),process.argv[3] || ''),
    path = process.argv[4] || '',
    what = path;

switch(process.argv[2]){
  
  case 'clear':
    Wapp.clear(location,what);
    break;
  
  case 'cache':
    Wapp.cache(location,path);
    break;
  
  case 'build':
    Wapp.build(location);
    break;
    
  case 'watch':
    Wapp.build(location,true);
    break;
    
  default:
    
    help.show('wapp <command> [<client location>]',{
      Commands: {
        cache: 'Store data cache',
        build: 'Build client',
        watch: 'Build client and rebuild when changes occur',
        "clean (cache|build)": "Clean cache and/or build"
      }
    });
    
    break;
    
}

