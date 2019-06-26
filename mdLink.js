let mdLink = {};

/*                                                                                           mdLink.mdLink */
mdLink.mdLink = (pathRequested,optionsRequested) => {
   // console.log(pathRequested);  // probando con console ingreso 
   //console.log(optionsRequested);  // probando con console ingreso 

 /*   1. validar opcion  / --validate or -- stats   */
 mdLink.validationOptionRequest(optionsRequested);
 

 /*   2. validar pathRequested / ruta     */
  mdLink.validationPathRequest(pathRequested);
 
}


// en  archivo  app.js con argv[2]    se toma valor options 
// valor argumento de                 mdLink.mdLink(x, optionsRequested)
// valor optionRequest  argumento de  mdLink.validationOptionRequest(...);
/*                                                                                            ejecucion 1 */
mdLink.validationOptionRequest = (optionsRequested) => { 
  
    /* 1.1    validar que la opcion fue ingresada */
    mdLink.checkTheOptionsEntered(optionsRequested);
    /* 1.2   identificar si la  opcion es -validate   o   --stats   o  null/undefined */
    mdLink.identifyTheOptionEntered(optionsRequested);
    /* 1.2.1  que hacer si   la opcion es -validate */
    mdLink.caseOptionValidate(optionsRequested);
    /* 1.2.2  que hacer si   la opcion es --stats */  
    mdLink.caseOptionStats(optionsRequested);
    /* 1.2.3  que hacer si   la opcion es   null/undefined */
    mdLink.caseOtherOption();
    /* 1.3    considerar errores ***??***   ....  */
        console.log("leyendo  function 1a   *** mdLink.validationOptionRequest *** ");  
}
    
/*                                                                                            ejecucion 2 */
mdLink.validationPathRequest = (pathRequested) => {
    /* 2.1    validar que la ruta/path fue ingresada */
    mdLink.checkThePathEntered(pathRequested);
    /* 2.2    identificar si la ruta es   **  file  **   o  **  directory  **  */
    mdLink.identifyThePathEntered(pathRequested);
    /* 2.2.1  que hacer si la ruta es     **  file **  */
    mdLink.casePathFile(pathRequested);
    /* 2.2.2  que hacer si la ruta es     **  directory **  */
    mdLink.casePathDirectory(pathRequested);
    /* 2.3        ***no***    se clasifica en file o directorio*/
    mdLink.caseOtherPath();

  console.log("leyendo  function 1a   *** mdLink.validationPathRequest *** ");  
}



/*                                                                                             1.1   validar*/
// chequear si la option fue ingresada 
// si la option es diferente a cero 
// return mdLink.identifyTheOptionEntered
mdLink.checkTheOptionsEntered = (optionsRequested) => {

   if(optionsRequested != 0 || optionsRequested != ""){
       let executeIdentifyOption = mdLink.identifyTheOptionEntered(optionsRequested);
       return executeIdentifyOption; 
   }
};
/*                                                                                             1.2   identificar*/
//
//
//
mdLink.identifyTheOptionEntered = (optionsRequested) => {

};
/*                                                                                             1.2.1 opcion/validate */
mdLink.caseOptionValidate = (optionsRequested) => {

};
/*                                                                                             1.2.2 opcion/stats */  
mdLink.caseOptionStats = (optionsRequested) => {

};
/*                                                                                             1.3   option/null/undefined */
mdLink.caseOtherOption = () => {

};



/*                                                                                             2.1    validar*/
mdLink.checkThePathEntered = (pathRequested) => {

};
 /*                                                                                            2.2    identificar*/
 mdLink.identifyThePathEntered = (pathRequested) => {

};
 /*                                                                                            2.2.1  path/file */
 mdLink.casePathFile = (pathRequested) => {

};
 /*                                                                                            2.2.2  path/directory */
 mdLink.casePathDirectory = (pathRequested) => {

};
 /*                                                                                            2.3    option/null/undefined */
 mdLink.caseOtherPath = () => {

};


module.exports = mdLink;