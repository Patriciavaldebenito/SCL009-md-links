import { validateOptionAndPathInConsola } from "./validation.js"
const mdLink = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js');


const pathRequest = process.argv[1];
//console.log(pathRequest);
//console.log("********************************");
const optionsInConsola = process.argv[2];
//console.log(optionsInConsola);



executionModule = (path, options) => {
    //console.log(path    + "en executionModule app.js");
    //console.log(options + "en executionModule app.js");

         /*     validar que la ruta/path fue ingresada */
         /* considerar una funcion para validar ingreso de parametros*/
    // se importa en app.js 1 validateOptionAndPathInConsola
  
 /*   I N C O R P O R A R       P R O M I S E                    */ 

            mdLink.mdLink(path, options);
            console.log(options + " en executionModule app.js");
  
}

//executionModule(pathRequest, optionsInConsola);



const mdLinkPromise = new Promise ((resolve,reject )=>{
    const passvalidation = validateOptionAndPathInConsola; 
    if(passvalidation){
        executionModule(pathRequest, optionsInConsola);
    }
})