var path = require('path'),
    help = require('u-help'),
    
    Wapp = require('../main.js');

switch(process.argv[2]){
  
  case 'clear':
    Wapp.clear(path.resolve(process.cwd(),process.argv[4] || ''),process.argv[3]);
    break;
  
  case 'cache':
    Wapp.cache(path.resolve(process.cwd(),process.argv[4] || ''),process.argv[3]);
    break;
  
  case 'build':
    Wapp.build(path.resolve(process.cwd(),process.argv[3] || ''));
    break;
    
  case 'watch':
    Wapp.build(path.resolve(process.cwd(),process.argv[3] || ''),true);
    break;
    
  default:
    
    help.show('wapp <command> [<client location>]',{
      Commands: {
        "cache [<path>]": 'Store data cache',
        build: 'Build client',
        watch: 'Build client and rebuild when changes occur',
        "clear (cache|build)": "Clean cache and/or build"
      }
    });
    
    break;
    
}

