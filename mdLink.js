let mdLink = {};

mdLink.mdLink = (pathRequested) => {
    console.log(pathRequested);  // probando con console ingreso 

 /*   1. validar opcion  / --validate or -- stats   */

 /*   2. validar pathRequested / ruta     */
    mdLink.validationPath();

}

/* ejecucion 2. */
mdLink.validationPath = () => {
console.log("leyendo   para prueba de ***ruta*** ");  
}


mdLink.xyz = () => {
    console.log("leyendo   mdLink.xyz   para prueba");  
}
    



module.exports = mdLink;