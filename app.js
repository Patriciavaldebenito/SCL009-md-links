const mdLink = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js'); 


const pathRequest  = process.argv[2];
// const options = process.argv[3]; 

function executionModule(pathRequest){
   if(pathRequest != 0){

    mdLink.mdLink();
   }

 
}

executionModule(pathRequest);