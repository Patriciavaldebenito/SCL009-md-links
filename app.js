import { validateOptionAndPathInConsola } from "./validation.js"
const mdLink = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js');

const pathRequest = process.argv[1];
//console.log(pathRequest);
//console.log("********************************");
const optionsInConsola = process.argv[2];
//console.log(optionsInConsola);


/*    P    L     A    N

  1 *   Crear una promesa llamada mdLink esta tiene 2 funciones resolve y reject 
  2 *   este valor necesita el valor de la validacion este valor se retorna con el valor de "passValidation"
  3 *   Se declara la variable con passValidation = validateOptionAndPathInConsola: 
  4 *   Se espera validateOptionAndPathInConsola = true para ejecutar resolve en otro caso reject de la promesa 

*/


 /*   I N C O R P O R A R       P R O M I S E                    */ 

const mdLinkPromise = new Promise ((resolve,reject )=>{
    const passvalidation = validateOptionAndPathInConsola; 
    if(passvalidation){
        resolve(executionModule);
    }

    else{
        reject(new Error("pedido fallido"));
    }
})

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
mdLinkPromise
.then(
    
        (pathRequest,optionsInConsola) =>
                                          { console.log(pathRequest);
                                            console.log(optionsInConsola);
                                          }
    )
.catch( error => { console.log("Error" + error);  })


const executionModule = (path, options) => {
    //console.log(path    + "en executionModule app.js");
    //console.log(options + "en executionModule app.js");

         /*     validar que la ruta/path fue ingresada */
         /* considerar una funcion para validar ingreso de parametros*/
    // se importa en app.js 1 validateOptionAndPathInConsola
  


            mdLink.mdLink(path, options);
            console.log(options + " en executionModule app.js");
  
}

//executionModule(pathRequest, optionsInConsola);


