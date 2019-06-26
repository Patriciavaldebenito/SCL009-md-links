let mdLink = {};

mdLink.mdLink = (pathRequested) => {
    console.log(pathRequested);  // probando con console ingreso 

 /*   i. validar opcion  / --validate or -- stats   */
   mdLink.validationOptionRequest();
 /*   ii. validar pathRequested / ruta     */
    mdLink.validationPathRequest();

}



/* ejecucion i */
mdLink.validationOptionRequest = () => { 
    /* 1.1    validar que la opcion fue indicada */
    mdLink.checkTheOptionsincome();
    /* 1.2    validar que la opcion es -validate   o   --stats   o  null/undefined */
    mdLink.identifyTheOptionEntered();
    /* 1.2.1  que hacer si   la opcion es -validate */
    mdLink.caseOptionValidate();
    /* 1.2.2  que hacer si   la opcion es --stats */  
    mdLink.caseOptionStats();
    /* 1.2.3  que hacer si   la opcion es   null/undefined */
    mdLink.caseOther();
    /* 1.3    ....  */
        console.log("leyendo  para prueba de *** option *** ");  
}
    


mdLink.validationPathRequest = () => {
  console.log("leyendo   para prueba de ***ruta*** ");  
}






module.exports = mdLink;