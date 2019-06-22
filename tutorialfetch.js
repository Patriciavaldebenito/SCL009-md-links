const fetch = require ('node-fetch');

/*console.log(fetch);
 en sus metodos existe 
 - isRedirect
 - Promise
 - Response
 -Request
 - Headers 
 + error----
*/

let promesa = fetch('https://api.github.com/users/mitocode21');

promesa.then((res)=> {
    return res.json();
})
.then((json) => {
    console.log(json);
});