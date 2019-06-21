const fs = require('fs');
const path = require('path');

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


/*               INSTANCIA     ----    1  +  2     --- 
*/
/*            **                      asincronia                      **          */
// const fs = require('fs');

new Promise ((resolve,reject) => 
fs.readFile(process.argv[2],'utf-8',
     (err,data) => !err ?   resolve(data) : reject(err) )
           )
           .then(data => console.log('FILE:\n' + data),
                 err => console.log('ERROR\n'+ err))


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

/*                INSTANCIA 4 --- PATH

   El path.extname()método 
   devuelve la extensión del path, 
   desde la última aparición del carácter .(punto)
   hasta el final de la cadena
   en la última parte del archivo path. 
   Si no hay ninguna .en la última parte de la path,
   o si no hay .otros caracteres que no sean 
   el primer carácter del nombre base de path
  (ver path.basename()), se devuelve una cadena vacía.
*/

//  path.basename (ruta [, ext]) 
path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux'

path.extname('index.html');
// Returns: '.html'

path.extname('index.coffee.md');
// Returns: '.md'

path.extname('index.');
// Returns: '.'

/* example Ruta Absoluta ----  path.isAbsolute (ruta)
                            El path.isAbsolute()
                            método determina si path
                            es una ruta absoluta. */

// module.exports = () => {
//   // ...
// };
