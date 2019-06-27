 const fs = require('fs');
//  const marked = require('marked');
//  console.log(marked.Renderer);
 //console.log(fs);
 let mdLink = {};

/*                                                                                           mdLink.mdLink */
mdLink.mdLink = (pathRequested,optionsRequested) => {
   //console.log(pathRequested);  // probando con console ingreso     -->      undefined 
   //console.log(optionsRequested);  // probando con console ingreso  -->      "--validate"
                                     //                               -->      "--stats"
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
  //console.log(optionsRequested + " en validateOptionRequest  ** dentro de mdlink.mdlink** ");
   
    /* 1.1  que hacer si   la opcion es -validate */
    //mdLink.caseOptionValidate(options);
    /* 1.2  que hacer si   la opcion es --stats */  
    //mdLink.caseOptionStats(options);

    /* 1.3  que hacer si   la opcion es   null/undefined */
    //mdLink.caseOtherOption();
    /* 1.3    considerar errores ***??***   ....  */
    //    console.log("leyendo  function 1a   *** mdLink.validationOptionRequest *** ");  
}
    
/*                                                                                            ejecucion 2 */
mdLink.validationPathRequest  = (pathRequested) => {

   //console.log(pathRequested + " en validatePathRequest **dentro de mdlink.mdlink");
   
    /* 2.1    identificar si la ruta es   **  file  **   o  **  directory  **  */
    mdLink.identifyThePathEntered(pathRequested);
    /* 2.1.1  que hacer si la ruta es     **  file **  */
    mdLink.casePathFile(pathRequested);
    /* 2.1.2  que hacer si la ruta es     **  directory **  */
    mdLink.casePathDirectory(pathRequested);
    /* 2.2        ***no***    se clasifica en file o directorio*/
    mdLink.caseOtherPath();

    //console.log("leyendo  function 1a   *** mdLink.validationPathRequest *** ");  
}





/*                                                                                             1.1 opcion/validate */
mdLink.caseOptionValidate = (optionsRequested) => {
};
/*                                                                                             1.2 opcion/stats */  
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

     console.log(pathRequested + " *** en Identificar idenntifyThePathEntered");

    //  const fsStats = fs.lstatSync(pathRequested);
    //  console(fsStats);

    //  if (fsStats.isFile()) {
    //      console.log("la ruta es *** un archivo  ***  ");
    //      let file = pathRequested;
    //      return file;

    //  } else if (fsStats.isDirectory()) {
    //    return 'folder';
    //  }
    //  else{
    //      console.log("--------no clasifica en archivo o directorio")
    //  }

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