const mdLink = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js');


const pathRequest = process.argv[1];
//console.log(pathRequest);
//console.log("********************************");
const optionsInConsola = process.argv[2];
//console.log(optionsInConsola);

function executionModule(path, options) {
    console.log(path + "en executionModule app.js");
    //console.log(options);
     /*     validar que la ruta/path fue ingresada */
    
    if (path != 0) {

        if (options === '--validate' || options === '--stats') {
            // entonces desarrollar esa opcion con la ruta ingresada
            // *** momentaneamente 
            // 
            mdLink.mdLink(path, options);
            console.log(options + " en executionModule app.js");
        } else {
            console.log("ingresa --validate o --stas");
        }
    }


}

executionModule(pathRequest, optionsInConsola);



