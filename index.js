#!/usr/bin/env node
 'use strict'

// importando    mdLink
const mdLinks = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js');
//console.log(mdLink);
const fetch = require('fetch');
// --------------------------------------------------------------------------------------

// tomando valores desde consola              path ingresada      y option ingresada

let pathInConsola = process.argv[2];

let options = process.argv[3];

/*
 a --> parametro path          b --> parametro options
*/
const executeModuleMdLinks = (path,options) => {
   
    mdLinks.mdLinks(path,options);
  
  
}




executeModuleMdLinks(pathInConsola,options);



// retornar resultado


// que haces resultado
// como lo muestras en consola



