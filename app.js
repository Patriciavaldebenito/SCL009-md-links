const mdLink = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js'); 


const pathRequest  = process.argv[2];
const optionsInConsola = process.argv[3]; 

function executionModule(path,options){

 
    mdLink.mdLink(path,options);
   
}

executionModule(pathRequest,optionsInConsola);