#!/usr/bin/env node
'use strict'

const fetch = require('fetch');
//const nodeFetch = require('node-fetch')
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const mdLinks = require('/home/laboratoriad318/Escritorio/SCL009-md-links/mdLink.js');


let pathInConsole = process.argv[2]
let options = process.argv[3];


const executeMdlinksDirectoryOrFile = (pathInConsole) => {
    return new Promise((resolve, reject) => {
        fs.stat(pathInConsole, (err, salida) => {
            if (err) {
                reject(err);
            } else {
                resolve(salida);
            }
        })
    })
}



    if (require.main === module) {
        executeMdlinksDirectoryOrFile(pathInConsole)
    .then(salida => {

        let trueOrFalseIsFile = salida.isFile();
        let trueOrFalseDirectory = salida.isDirectory();
        if (trueOrFalseDirectory) {


            // decaracion de array
            let readDirQueue = []; let fileList = [];

            const readDir = (dir) => {
                // 1 era fx    --> Obtener lista de artículos
                function getItemList(readDir) {
                    return new Promise((resolve, reject) => {
                        fs.readdir(readDir, (err, itemList) => {

                            // fileList2 = itemList.filter(function(e){
                            //     return path.extname(e).toLowerCase() === '.md'
                            //  });
                            if (err) {
                                return reject(err);
                            }

                            // resolve with parent path added to each item
                            resolve(itemList.map((item) => path.resolve(readDir, item)));
                        });
                    });
                }

                // 2 da fx     -->  Obtener estadísticas de lista de elementos
                const getItemListStat = (itemList) => {


                    function getStat(itemPath) {
                        return new Promise((resolve, reject) => {
                            fs.stat(itemPath, (err, stat) => {
                                if (err) {
                                    return reject(err);
                                }
                                // no necesario visualizar / *** console.log("stat  = " + JSON.stringify(stat))
                                // resolve with item path and if directory
                                resolve({ itemPath, isDirectory: stat.isDirectory() });
                            });
                        });
                    }

                    // stat all items in list
                    return Promise.all(itemList.map(getStat));
                }

                // 3 era fx    -->  Procesar lista de elementos
                const processItemList = (itemList) => {

                    for (const { itemPath, isDirectory } of itemList) {
                        // if directory add to queue
                        if (isDirectory) {
                            readDirQueue.push(itemPath);
                            continue;
                        }

                        let extension = path.extname(itemPath)
                        if (extension === ".md") {

                            fileList.push(itemPath);
                        }

                        // add file to list
                    }

                    // if queue, process next item recursive
                    if (readDirQueue.length > 0) {
                        return readDir(readDirQueue.shift());
                    }

                    //console.log("fileList-0 =" + fileList[0]); console.log("fileList-1 =" + fileList[1]); console.log("fileList-2 =" + fileList[2]);
                    fileList.forEach(function (element) {

                        callMdLinks(element, options)

                        //   console.log(element);
                    });
                    // console.log("fileList = " + fileList)
                    return fileList;

                }


                return getItemList(dir)
                    .then(getItemListStat)
                    .then(processItemList)
                    // .then(console.log("getItemListStat  : " + getItemListStat))
                    .catch(err => console.log(err))
            }
            readDir(pathInConsole)

        } else if (trueOrFalseIsFile) {
            callMdLinks(pathInConsole, options)
        }
    })
    .catch(err => { console.log(err); })


        const callMdLinks = (pathInConsole, options) => {

            mdLinks.mdLinks(pathInConsole)
        
                .then(res => {
                    res.forEach(e => 
                        fetch.fetchUrl(e.href, (error, meta, body) => {
                           
        
        
        
                           // let arr = []
                            if (!options && meta) {
                                
                                console.log(chalk.blue(e.route) + " " + chalk.red(e.href) + " " + chalk.green(e.text));
                            }
                            /* ************************************************************************************************************************************************** */
                            else if (options === '-v' || options === '--validate'){
                                if (meta.status === 200 || meta.status === 301) {
                                  
                                    console.log(chalk.blue(e.route) + "  " + chalk.red(e.href) + "  " + "  ok" + " " + chalk.yellow(meta.status) + "  " + chalk.cyan(e.text))
                                }
                                else if (meta.status === 404){
                                 
                                    console.log(chalk.blue(e.route) + "  " + chalk.red(e.href) + "  " + " fail" + " " + chalk.yellow(meta.status) + "  " + chalk.cyan(e.text))
                                }
                            }
                            // else if (options === '-s' || options === '--stats'){}
                          
                          
                            /* ************************************************************************************************************************************************** */
                            else {
                                console.log(error)
                            }
                         
                          
                        })
                    )
                })  
        }

    }



