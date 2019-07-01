// * 0 *  Declaration of variables
let mdLinks = {};

// * 1 * declaration of modules
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require('marked');
const fetch = require('fetch');

// * 2 *   IMPORTED MODULE IN INDEX.JS INDEX.JS 
mdLinks.mdLinks = (pathInConsole, options) => {
  
    if (options === '--validate') {
        let options = {};
        console.log(" options.validate" + options.validate);
        return options.validate = true; 
    }
    // secuencia 
    // * 3 *  obteniendo ruta absoluta 
    let pathExecute = mdLinks.pathConvertAbsolute(pathInConsole);
    
    // * 4 *  saber- archivo o directorio - ejecutar function correspondiente.
  
    mdLinks.callFileOrDirectory(pathExecute); // * clasificando is File Or Directory *
    
   
}
