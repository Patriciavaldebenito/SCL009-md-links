let mdLink = {};

mdLink.mdLink = (pathRequested,optionsRequested) => {
    console.log(pathRequested);  // probando con console ingreso 
    console.log(optionsRequested);  // probando con console ingreso 

 /*   1. validar opcion  / --validate or -- stats   */
   mdLink.validationOptionRequest();
 /*   2. validar pathRequested / ruta     */
    mdLink.validationPathRequest();

}



/*                                                                                            ejecucion 1 */
mdLink.validationOptionRequest = () => { 
    /* 1.1    validar que la opcion fue ingresada */
    mdLink.checkTheOptionsEntered();
    /* 1.2   identificar si la  opcion es -validate   o   --stats   o  null/undefined */
    mdLink.identifyTheOptionEntered();
    /* 1.2.1  que hacer si   la opcion es -validate */
    mdLink.caseOptionValidate();
    /* 1.2.2  que hacer si   la opcion es --stats */  
    mdLink.caseOptionStats();
    /* 1.2.3  que hacer si   la opcion es   null/undefined */
    mdLink.caseOtherOption();
    /* 1.3    considerar errores ***??***   ....  */
        console.log("leyendo  para prueba de *** option *** ");  
}
    

/*                                                                                            ejecucion 2 */
mdLink.validationPathRequest = () => {
    /* 2.1    validar que la ruta/path fue ingresada */
    mdLink.checkThePathEntered();
    /* 2.2    identificar si la ruta es   **  file  **   o  **  directory  **  */
    mdLink.identifyThePathEntered();
    /* 2.2.1  que hacer si la ruta es     **  file **  */
    mdLink.casePathFile();
    /* 2.2.2  que hacer si la ruta es     **  directory **  */
    mdLink.casePathDirectory();
    /* 2.3        ***no***    se clasifica en file o directorio*/
    mdLink.caseOtherPath();

  console.log("leyendo   para prueba de ***ruta*** ");  
}



/*                                                                                             1.1   validar*/
mdLink.checkTheOptionsEntered = () => {
   if()
};
/*                                                                                             1.2   identificar*/
mdLink.identifyTheOptionEntered = () => {

};
/*                                                                                             1.2.1 opcion/validate */
mdLink.caseOptionValidate = () => {

};
/*                                                                                             1.2.2 opcion/stats */  
mdLink.caseOptionStats = () => {

};
/*                                                                                             1.3   option/null/undefined */
mdLink.caseOtherOption = () => {

};



/*                                                                                             2.1    validar*/
mdLink.checkThePathEntered = () => {

};
 /*                                                                                            2.2    identificar*/
 mdLink.identifyThePathEntered = () => {

};
 /*                                                                                            2.2.1  path/file */
 mdLink.casePathFile = () => {

};
 /*                                                                                            2.2.2  path/directory */
 mdLink.casePathDirectory = () => {

};
 /*                                                                                            2.3    option/null/undefined */
 mdLink.caseOtherPath = () => {

};


module.exports = mdLink;