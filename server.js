const fs = require('fs'); 



/*             Instancia     --1       --    process.argv[2]
 */
let documentWithFileAndPath =  new Promise ((resolve,reject) => 
                       fs.readFile(process.argv[2],'utf-8',
                       (err,data) => !err ?   resolve(data) : reject(err) )
                       );


/*             Instancia     --2       --    lectura de data en consola 
 */
let promiseDataInConsole =                      
documentWithFileAndPath.then(
                              data => console.log('FILE:\n' + data),
                              err => console.log('ERROR\n'+ err)
                              );

// obtencion de promesa ...
console.log(promiseDataInConsole);

