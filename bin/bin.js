var path = require('path'),
    help = require('u-help'),
    
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
    
    process.stdout.write(help('wapp <command> [<client location>]',{
      Commands: {
        build: 'Build client',
        watch: 'Build client and rebuild when changes occur'
      }
    }));
    
    break;
    
}

