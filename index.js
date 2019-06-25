#!/usr/bin/env node

/* REFERENCIAS*/
/* #!/usr/bin/env node --> referencia  https://stackoverflow.com/questions/33509816/what-exactly-does-usr-bin-env-node-do-at-the-beginning-of-node-files */

/* CONSTANTES*/
//const Marked = require('marked');
let  positionOption = process.argv[2];
//console.log(positionOption);

/* CONSOLE --> console.log('')*/
/* console.log(process.argv[2]); */

//   options: Un objeto con las siguientes propiedades:   - validate: Booleano que determina si se desea validar los links encontrados.
//            --validate y --stats

const  options = (argv) => { 
  
   if(argv === '--stats' ){
    console.log('la posicion es --stats');
    let stats = true;
    return stats;
   } 

   if(argv === '--validate' ){
    console.log('la posicion es --validate');
    let validate = true; 
    return validate;
  
  } 
 else{
   console.log("el ingreso es diferente ");
 }
}

options(positionOption);



//console.log(require.main);
// extraer los links - object de mdLinks
// mdLinks.markdownLinkExtractor = (markdown) => {
//   const links = [];

//   const renderer = new Marked.Renderer();

//   // Taken from https://github.com/markedjs/marked/issues/1279
//   const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

//   Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
//   Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
//   Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

//   renderer.link = function(href, title, text) {
//     links.push({
//       href: href,
//       text: text,
//       title: title,
//     });
//   };
//   renderer.image = function(href, title, text) {
//       // Remove image size at the end, e.g. ' =20%x50'
//       href = href.replace(/ =\d*%?x\d*%?$/, '');
//       links.push({
//         href: href,
//         text: text,
//         title: title,
//       });
//   };
//   Marked(markdown, {renderer: renderer});

//   return links;
// };

// creacion de modulo
// module.exports = () => {
//   // ...
// };
let mdLinks = {a:2};
module.exports = mdLinks;
//console.log(mdLinks);
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */


