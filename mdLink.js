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

//* 3 * function - convert * ruta * normalize y resolve *
mdLinks.pathConvertAbsolute = (pathInConsole) => {
    // primero
    let pathResolve = path.resolve(pathInConsole);
    // segundo 
    let pathConvertAbsolute = path.normalize(pathResolve);
    // ** 
    // console.log( "pathConvertAbsolute es :" + pathConvertAbsolute);
    return pathConvertAbsolute;
}


// * 4/clasification * Function to classify in * file * or * directory. *
//       PROMiSE   -   método fs.stat

mdLinks.promiseFileOrDirectory = (pathInConsole) => {
    //console.log("dentro de pathFileOrDirectory :" + pathInConsole);
    return new Promise((resolve, reject) => {
        fs.stat(pathInConsole, (err, salida) => {
            if (err) {
                reject(err);
            } else {
                resolve(salida);
            }
        })
    })
}

// * 4/aplication booleano *  functions " isFile() "  y " isDirectory() " 
//     RETURN    file    or   directory

mdLinks.isFileOrDirectory = (consulta) => {
    // entrega booleano true
    if (consulta.isFile()) {
        console.log(" tu archivo es un **** archivo *** ");
        return 'file';
    } else if (consulta.isDirectory()) {
        console.log(" tu archivo es un *** Directorio *** ")
        return 'directory';
    }
}

// * 4/ identify-action-post * función para llamar a PROMise (then y catch)
 
mdLinks.callFileOrDirectory = (pathInConsole) => {

    mdLinks.promiseFileOrDirectory(pathInConsole)
        .then(salida => {

            let fileOrDirectory = mdLinks.isFileOrDirectory(salida);

            if (fileOrDirectory === 'directory') {

                 mdLinks.mdGetFromDirectory(pathInConsole);
                // console.log("pathInConsole  es :" + pathInConsole);
                return 'executeReadDirectory'

            } else if (fileOrDirectory === 'file') {
                 mdLinks.callGetLink(pathInConsole);
                // console.log("pathInConsole  es :" + pathInConsole);
                return 'executeReadFile'
            }
        })
        .catch(err => { console.log(err); })
}

// * 4/ pathInConsole is =  file *  ejecutar => call getLinks  

mdLinks.callGetLink = (route) => {
    // llamando a getLinks - para obtener json con los links
    mdLinks.getLinks(route)
        .then(res => {
            //let jsonHref = JSON.stringify(res);
            //console.log(" jsonHref :" + jsonHref);
            mdLinks.arrayHref(res);
        })
        .catch(err => {
            console.log("Err catch :", err);
        })
}



// * 5/ export de módulo
module.exports = mdLinks;