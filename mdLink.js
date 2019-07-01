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

// * 4/ pathInConsole is =  directory *  ejecutar => mdGetFromDirectory 
//                   read files .md 

mdLinks.mdGetFromDirectory = (pathInConsole) => {
    return new Promise((resolve, reject) => {
        fs.readdir(pathInConsole, 'utf-8', function (err, files) {
            //console.log("la data dentro de la promesa readdir es : " + files)
            if (err) {
                reject(err);
                console.log("Error al leer la ruta dir")
            } else {
                resolve(files);
                files = fileHound.create()
                    .paths(pathInConsole)
                    .ext('md')
                    .find();
                files
                    .then(res => {
                        Promise.all(res)
                            .then(res => {
                                res.map(e => {
                                    //console.log("e :" + e);
                                    return mdLinks.callGetLink(e);
                                })
                            })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })
    })
}


// * 4/extraction of links * 
// Declaring Promise GetLinks: Read file to extract liks.
mdLinks.getLinks = (route) => {
    console.log("en getLinks route es : " + route);
    return new Promise((resolve, reject) => {
        fs.readFile(route, 'utf-8', function (err, data) {
            if (err) {
                reject(err);
                console.log("Error al leer la ruta")
            }
            else {
                let links = [];
                const renderer = new marked.Renderer();
                renderer.link = function (href, title, text) {
                    links.push({
                        route: route,
                        text: text,
                        href: href
                        //   title:title
                    })
                }
                marked(data, { renderer: renderer });
                resolve(links);
                // let linkString = JSON.stringify(links);
                //console.log(links);
            }
        })
    })
}



// * 5/ export de módulo
module.exports = mdLinks;