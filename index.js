#!/usr/bin/env node
'use strict'

// importando    mdLink
const mdLinks = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js');
//console.log(mdLink);
const fetch = require('fetch');
//




//  taking values ​​from console

let pathInConsola = process.argv[2];

let options = process.argv[3];


/*
 function executeModuleMdLinks
*/
const executeModuleMdLinks = (path,options) => {
   
    mdLinks.mdLinks(path,options);
  
  
}




executeModuleMdLinks(pathInConsola,options);