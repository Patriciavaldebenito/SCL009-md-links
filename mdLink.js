const fs = require('fs');
const path = require('path');
const marked = require('marked');
let mdLinks = {};

mdLinks.mdLinks = (pathInConsole) => {

    let route = path.resolve(pathInConsole);
    return new Promise((resolve, reject) => {
        fs.readFile(route, 'utf-8', function (err, data) {
            if (err) {
                reject(err);
               
            }
            else {
                let links = [];
                const renderer = new marked.Renderer();
                renderer.link = function (href, title, text) {
                    links.push({
                        route: route,
                        text: text,
                        href: href,
                       
                        //   title:title
                    })
                }
                marked(data, { renderer: renderer });
                resolve(links);
                // let linkString = JSON.stringify(links);
                //console.log("la salida de getList =" + JSON.stringify(links));
            }
        })
    })
}

module.exports = mdLinks;





