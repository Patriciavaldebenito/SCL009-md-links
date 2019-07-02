// * 0 *  Declaration of variables
let mdLinks = {};

// * 1 * declaration of modules
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require('marked');
const fetch = require('fetch');

// pregunta  n1 
// ¿ la ruta ingresada es Absoluta ? 
mdLinks.questionPathIsAbsolute = (pathInConsole) => {

    // 1.A

    if(path.isAbsolute(pathInConsole)){
        console.log( "pregunta 1 :    YES - PATH - ABSOLUTE")
        // se retorna la ruta 
        return true;
       } else {
           console.log( "pregunta 1 :    NOT - PATH - ABSOLUTE")
           return false;
         
       }
}

// 1.B
//      function - convert * ruta * normalize y resolve *
mdLinks.pathConvertAbsolute = (pathInConsole) => {

    console.log(" 1 ._B_. 0 " + pathInConsole);

    // 1 ._B_. 1
    let pathInConsoleResolve = path.resolve(pathInConsole);
    console.log(" 1 ._B_. 1 " + pathInConsoleResolve);

    // // 1 ._B_. 2
    let pathInConsoleNormalize = path.normalize(pathInConsoleResolve);
    console.log(" 1 ._B_. 2 " + pathInConsoleNormalize);

    return pathInConsoleNormalize;
    // // 1 ._B_. 3
    // let pathInConsoleConvert = mdLinks.questionPathIsAbsolute(pathInConsoleNormalize);
    // console.log(" 1 ._B_. 3 " + pathInConsoleConvert);
    // // 1 ._B_. 3
    // return pathInConsoleConvert;
}
 
  
  // se debe transformar la ruta entonces  

  
// * 2 *   IMPORTED MODULE IN INDEX.JS 
mdLinks.mdLinks = (pathInConsole, options) => {

  /* **   ***   **   ***   **   ***   **   ***   **   ***  **  */ 
   console.log("yaa path in console : "+pathInConsole);
   console.log("yaa options : "+ options);
  /* **   ***   **   ***   **   ***   **   ***   **   ***  **  */ 
     // pregunta  n1 
     // ¿ la ruta ingresada es Absoluta ? 
    let questionPath = mdLinks.questionPathIsAbsolute(pathInConsole);
     console.log(" questionPath " + questionPath);

   // si "questionPath" retorna "true" entonces 
   //                           se pregunta si es directorio o archivo
    if(questionPath){
        // pregunguntando si es directory o archivo
           console.log("lulu - YES");
           // P R O B A N D O     1:17 
           mdLinks.callFileOrDirectory(pathInConsole);
    } else {
        //  si "questionPath" retorna "false" entonces
        //                      se convierte la ruta 
        // 1.B
       let pathInConsoleConvert =  mdLinks.pathConvertAbsolute(pathInConsole); 
       let againQuestionPath    =   mdLinks.questionPathIsAbsolute(pathInConsoleConvert);

       if(againQuestionPath){
           // pregunguntando si es directory o archivo
            console.log("lulu - again --- YES"); 
             // P R O B A N D O     1:17 
           mdLinks.callFileOrDirectory(pathInConsole);
        } else {
        console.log("la ruta ingresa - es incorrecta");
        }
    }

  /* **   ***   **   ***   **   ***   **   ***   **   ***  **  */ 
    //if (options === '--validate') {
      //  let options = {};
       // console.log(" options.validate" + options.validate);
        //return options.validate = true; 
   // }
    // secuencia 
    // * 3 *  obteniendo ruta absoluta 
    //let pathExecute = mdLinks.pathConvertAbsolute(pathInConsole);
    
    // * 4 *  saber- archivo o directorio - ejecutar function correspondiente.
    //mdLinks.callFileOrDirectory(pathExecute); // * clasificando is File Or Directory *
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

// mdLinks.isFileOrDirectory = (consulta) => {
//     // entrega booleano true
//     if (consulta.isFile()) {
//         console.log(" tu archivo es un **** archivo *** ");
//         return 'file';
//     } else if (consulta.isDirectory()) {
//         console.log(" tu archivo es un *** Directorio *** ")
//         return 'directory';
//     }
// }

// * 4/ identify-action-post * función para llamar a PROMise (then y catch)
 
mdLinks.callFileOrDirectory = (pathInConsole) => {

    mdLinks.promiseFileOrDirectory(pathInConsole)
        .then(salida => {
           
            let trueOrFalseIsFile = salida.isFile();
            let trueOrFalseDirectory = salida.isDirectory();
            console.log(" salida.isFile(); " + trueOrFalseIsFile);
            console.log(" salida.isFile(); " + trueOrFalseDirectory );

            if (trueOrFalseDirectory) {

                 mdLinks.mdGetFromDirectory(pathInConsole);
                // console.log("pathInConsole  es :" + pathInConsole);
                return 'executeReadDirectory'

            } else if (trueOrFalseIsFile) {
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
           // console.log(" jsonHref :" + jsonHref);
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
                console.log("la salida de getList =" + links);
            }
        })
    })
}


// * 4/ menjaje H.U1 * get de " ruta text-link htttp:...  " en consola
// 
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



// * 5/ export de módulo
module.exports = mdLinks;