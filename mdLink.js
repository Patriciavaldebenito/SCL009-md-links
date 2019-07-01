// *** 0 ***  Declaracion de variales 
let mdLinks = {};

// *** 1 *** Declaracion de Modulos 
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require('marked');
const fetch = require('fetch');

//  MODULO IMPORTADO EN INDEX.JS  



mdLinks.mdLinks = (pathInConsole, options) => {
  
    if (options === '--validate') {
        let options = {};
        console.log(" options.validate" + options.validate);
        return options.validate = true; 
    }
    // secuencia 
    // *** 3 ***   obteniendo ruta absoluta 
    let pathExecute = mdLinks.pathConvertAbsolute(pathInConsole);
    console.log("----" + pathExecute);
    // *** 4 ***   sabiendo que es archivo o directorio eejecutar action con ellas
    // probando con pathExecute y pathInConsole
    mdLinks.callFileOrDirectory(pathExecute); // **  **  clasificando isFileOrDirectory ** **
    
   
}

//*** 3 *** funcion para convertir la *** ruta  normalizar y resolver *** 
mdLinks.pathConvertAbsolute = (pathInConsole) => {
    // primero
    let pathResolve = path.resolve(pathInConsole);
    // segundo 
    let pathConvertAbsolute = path.normalize(pathResolve);
    // ** 
    // console.log( "pathConvertAbsolute es :" + pathConvertAbsolute);
    return pathConvertAbsolute;
}
// funcion para clasificar en  ** archivo **  o ** directorio **
// con una PROMESA metodo fs.stat
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
// ***  *** funcion uso de funciones " isFile() "  y " isDirectory() " RETURN file or directory
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

// ***  ***  funcion para llamar a PROMESA uso de then y catch
// ***********************************************************
// ***  ***  llamada en mdLinks.mdLinks  
mdLinks.callFileOrDirectory = (pathInConsole) => {

    mdLinks.promiseFileOrDirectory(pathInConsole)
        .then(salida => {

            let fileOrDirectory = mdLinks.isFileOrDirectory(salida);

            console.log("dentro de callFileOrDirectory - fileOrDirectory es : " + fileOrDirectory);

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
// **********************************************************

// *** si es  *** ' file ' ***  call getLinks // cambiarlo para cambiar fetch al otro lado 
mdLinks.callGetLink = (route) => {
    // llamando a getLinks - para obtener json con los links
    mdLinks.getLinks(route)
        .then(res => {
            //let jsonHref = JSON.stringify(res);
            //console.log(" jsonHref :" + jsonHref);
            //console.log(res);
            mdLinks.arrayHref(res);
            // res.forEach(element => { console.log("elemento :" +element.href);
            // });
        })
        .catch(err => {
            console.log("Err catch :", err);
        })
}

// *** si es  *** ' directory ' ***  call getLinks // leer archivos md
// Declaring Promise mdGetFromDirectory: Read the directory to extract the "md" files
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
                                    //console.log("son e" + e);
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



//----------------------------------------------------------------------------

// ***  4.3 *** Declaring Promise GetLinks: Read file to extract liks.
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

//vcpa
// *** 5 *** Funcion Con fetch
mdLinks.arrayHref = (linksarray) => {

    linksarray.forEach(element => {

        return new Promise((resolve, reject) => {

            fetch.fetchUrl(element.href, (error, meta, body) => {
                if (meta) {
                    resolve(meta.status);
                } else {
                    reject(error);
                }
            })

        })
            .then((res) => {

                console.log(element.route + "     " + element.href + "     " + element.text);
            })
            .catch(err => {
                console.log(err);
            })
    });
}




module.exports = mdLinks;