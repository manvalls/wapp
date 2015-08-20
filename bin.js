#!/usr/bin/node --harmony
var path = require('path'),
    help = require('u-help'),

    Wapp = require('./server.js');

switch(process.argv[2]){

  case 'build':
    Wapp.build(path.resolve(process.cwd(),process.argv[3] || ''));
    break;

  case 'watch':
    Wapp.watch(path.resolve(process.cwd(),process.argv[3] || ''));
    break;

  default:

    help.show('wapp <command> [<client location>]',{
      Commands: {
        build: 'Build client',
        watch: 'Build client and rebuild when changes occur'
      }
    });

    break;

}
