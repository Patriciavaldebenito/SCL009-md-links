#!/usr/bin/env node

'use strict'

//                                                                                       DECLARACION DE MODULOS -NODE + IMPORT/REQUIRE
const fetch = require('fetch');
//const nodeFetch = require('node-fetch')
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const mdLinks = require('/home/laboratoriad312/Escritorio/SCL009-md-links/mdLink.js');

//                                                                                       DECLARACION DE VARIABLES 
let pathInConsole = process.argv[2]
let options = process.argv[3];

// decaracion de array
let readDirQueue = [];
let fileList = [];


//                                                                                                    Function I
// primera funcion en ejecucion retorna promesa y se aplica metodo fs.stat
// callback de promesa permite aplicar posteriormente en la llamada isFile - isDirectory = > boolean 
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

//                                                                                                    Function II
// llamada a funcion executeMdLinksDirectoryOrFile 
// dentro de if - condicionando primero la ejecucion de la funcion 
// se especifica los casos en los cuales se ejecutara 
//    archivo    => callMdLinks   --> Function II A
//    directorio =>  readDir      --> Function II B
if (require.main === module) {
  // Function II
  executeMdlinksDirectoryOrFile(pathInConsole)
    .then(salida => {

      let trueOrFalseIsFile = salida.isFile();
      let trueOrFalseDirectory = salida.isDirectory();

      if (trueOrFalseDirectory) {
        // Function II A
        console.log("es un directorio y se leera readDir")
        readDir(pathInConsole)

      } else if (trueOrFalseIsFile) {
        // Function II B
        console.log("es un archivo y se ejecuta ejecutara callMdLinks(1,2)")
        callMdLinks(pathInConsole, options)
      }

    })
    .catch(err => {
      console.log(err);
    })
}



//                                                                                                     Function II A
// Si la ruta es un archivo entonces se condiciona que se ejecute la llamada de mdLinks requerida 
// se aplica metodo fetch y se obtiene la url status href content link ....
// de cada link en el archivo leido
const callMdLinks = (pathInConsole, options) => {
  // console.log("la ruta dentro de la llamada de mdLinks es : "+ pathInConsole);
  // console.log("la options dentro de la llamada de options es : "+ options);

  mdLinks.mdLinks(pathInConsole)

    .then(res => {
      res.forEach(e =>
        fetch.fetchUrl(e.href, (error, meta, body) => {

          // let arr = []
          if (!options && meta) {

            console.log(chalk.blue(e.route) + " " + chalk.red(e.href) + " " + chalk.green(e.text));
          }
          /* ************************************************************************************************************************************************** */
          else if (options === '-v' || options === '--validate') {
            if (meta.status === 200 || meta.status === 301) {

              console.log(chalk.blue(e.route) + "  " + chalk.red(e.href) + "  " + "  ok" + " " + chalk.yellow(meta.status) + "  " + chalk.cyan(e.text))
            } else if (meta.status === 404) {

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

//                                                                                                     Function II B
// lectura de directorio .. 
const readDir = (dir) => {
    //  Function II ..B..1
   return getItemList(dir)
      // Function II ..B..2
     .then(getItemListStat)
     .then(processItemList)
     //   // .then(console.log("getItemListStat  : " + getItemListStat))
     .catch(err => console.log(err))
 }

//                                                                                                     Function II ..B..1
//aplicacion de fs.r4eaddir - declaracion de resolve con ruta  archivo/err
const getItemList = (readDir) => {
    //  console.log(" readDir es  :" + readDir)
    return new Promise((resolve, reject) => {
      fs.readdir(readDir, (err, itemList) => {
        // itemList name for file
        console.log("itemList dentro de readdir =" + itemList)
        if (err) {
          return reject(err);
        }
        // resolve path absolute for file x file
        resolve(itemList.map((item) => path.resolve(readDir, item)));
      });
    });
  }


//                                                                                                     Function II ..B..2
// aplicacion de metodo stat y promise.all
const getItemListStat = (itemList) => {

    console.log("itemList dentro de getItemListStat :" + itemList);

   const  getStat = (itemPath) => {
      console.log("itempath = " + itemPath)
      return new Promise((resolve, reject) => {
        fs.stat(itemPath, (err, stat) => {
          if (err) {
            return reject(err);
          }
          // no necesario visualizar / *** console.log("stat  = " + JSON.stringify(stat))
          // resolve with item path and if directory
          resolve({
            itemPath,
            isDirectory: stat.isDirectory()
          });
        });
      });
    }

    //stat all items in list
    return Promise.all(itemList.map(getStat));
  }

  
//                                                                                                     Function II ..B..3
//  CONDICIONALES 
//  en el caso del elemento directorio entonces se agrega a array readDirQueue para cada archivo - ruta (ver for)
//  aplicacion de metodo path.extname .md
//  recurtion con condicional if -->    readDirQueue.length > 0) {
//                                       return readDir(readDirQueue.shift());        
  const processItemList = (itemList) => {
    // itemList con un array con objetos ....con atributos ruta ...
    // ejemplo => [{"itemPath":"/home/laboratoriad312/Escritorio/SCL009-md-links/prueba/files/cnLinksErr404.md","isDirectory":false},...
    console.log("itemList dentro de processItemList ="+JSON.stringify(itemList))
  for (const {
      itemPath,
      isDirectory
    } of itemList) {
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



   
