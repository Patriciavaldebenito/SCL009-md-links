const fs = require('fs'); 

let documentWithFileAndPath =  new Promise ((resolve,reject) => 
                       fs.readFile(process.argv[2],'utf-8',
                       (err,data) => !err ?   resolve(data) : reject(err) )
                       );


let promiseDataInConsole =                      
documentWithFileAndPath.then(
                              data => console.log('FILE:\n' + data),
                              err => console.log('ERROR\n'+ err)
                              );


console.log(promiseDataInConsole);

