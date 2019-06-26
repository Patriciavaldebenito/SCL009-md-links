const mdLink = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js').mdLink; 


const pathRequest  = process.argv[2];
const options = process.argv[3]; 

function executionModule(){

    mdLink(pathRequest,options);
}

executionModule();