const fs = require('fs');
// const path = require ('path');

/* ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   */

/*               INSTANCIA 1 --- LECTURA DE PATH -FILE 
*/

// usando arrow function
 const pathEnteredUser = () => filePath = process.argv[2];
 console.log(pathEnteredUser());    
// es valor es tomado para ser leido posteriormente


/*               INSTANCIA 2 --- LECTURA DE FILE-SYSTEM
*/
 readFile = (pathFile) => readFileWithPath =
                          fs.readFile(pathFile,'utf-8',(error,data) => { 
                                if(error){ console.log(`Error ${error}`);} 
                                else { return data; }
                          });



/*                INSTANCIA 3 --- COMPROBAR  EXISTENCIA DE ARCHIVO 
    Se usa   **    fs.access()     **     para verificar la accesibilidad 
    de un archivo antes de llamar fs.open(), fs.readFile()o fs.writeFile()
*/


//const file example
const file = 'package.json';

// Check if the file exists in the current directory.
fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});





// module.exports = () => {
//   // ...
// };
