const fs = require('fs'); 

/*                INSTANCIA 1 --- COMPROBAR  EXISTENCIA DE ARCHIVO 
    Se usa   **    fs.access()     **     para verificar la accesibilidad 
    de un archivo antes de llamar fs.open(), fs.readFile()o fs.writeFile()
*/

//const file example
// const file = ;
// Check if the file exists in the current directory.



const path = './hello.txt'

fs.access(path, fs.F_OK, (err) => {
  if (err) {
    console.error(err)
    return
  }
  
  readFile(); 
  
  //file exists
})

readFile = () => console.log("Heloooooo");
/*             Instancia     --2       --    process.argv[2]
 */
// let documentWithFileAndPath =  new Promise ((resolve,reject) => 
//                        fs.readFile(process.argv[2],'utf-8',
//                        (err,data) => !err ?   resolve(data) : reject(err) )
//                        );


/*             Instancia     --2       --    lectura de data en consola 
 */
// let promiseDataInConsole =                      
// documentWithFileAndPath.then(
//                               data => console.log('FILE:\n' + data),
//                               err => console.log('ERROR\n'+ err)
//                               );

// obtencion de promesa ...
// console.log(promiseDataInConsole);

/*   _______________________________________________________________________________________________________________________________
_________________________________________________________________________________________________________________________________      */

