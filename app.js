const fs = require('fs');
// const path = require ('path');

/* ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   */

/*               INSTANCIA 1 --- LECTURA DE PATH -FILE 
*/


// usando arrow function
const pathEnteredUser = () => filePath = process.argv[2];
const pathEnteredUserFunction = pathEnteredUser();
   /*    console.log(pathEnteredUser());     */
// es valor es tomado para ser leido posteriormente


/*               INSTANCIA 2 --- LECTURA DE FILE-SYSTEM
*/

fs.readFile(pathEnteredUserFunction,'utf-8' ,(error, data) => {
   if(error){
       console.log(`Error ${error}`);
   }else{
       console.log(data);
   }
});

// module.exports = () => {
//   // ...
// };
