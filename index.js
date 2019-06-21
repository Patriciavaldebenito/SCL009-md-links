const fs = require('fs');
// const path = require ('path');

/*  **  necesario para observar metodos  ** */

        // console.log(fs)
        // console.log(path);

// console.log(process.argv);  // ruta 'usr/bin/node',    
                            // /home/laboratoriad318/Escritorio/aprendiendo node/proyecto_Markdown_carpeta_nodule_/yasni/index.js   

// si usamos process.argv[0]  -->  ruta 'usr/bin/node'

// si usamos process.argv[1]  -->  /home/laboratoriad318/Escritorio/aprendiendo node/proyecto_Markdown_carpeta_nodule_/yasni/index.js   

// si usamos process.argv[2]  -->  undefined


/* ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   */

// Escrito en consola :  node index.js hola 
// console.log(process.argv[2]); -->  hola 

/* ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   */

// lectura de ruta 
function ruta() {
    /* ruta de los archivos = file path */
    let filePath = process.argv[2];
   return filePath; 
}

const rutaAleer = ruta();
console.log(rutaAleer);

// usando arrow function
const rutaIngresadaPorUsuario = () => filePath = process.argv[2];
console.log(rutaIngresadaPorUsuario());


// module.exports = () => {
//   // ...
// };
