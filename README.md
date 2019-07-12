# Markdown Links Extractor


Pequeña librería que analiza archivos de tipo [Markdown](https://es.wikipedia.org/wiki/Markdown)(.md) para verificar los links que contengan y entregar algunas estadísticas.

## Comenzando 

En la pestaña 'releases' encontrarás el archivo .zip correspondiente al proyecto, el que deberás descargar para su posterior utilización.

### Pre-requisitos 

Para el correcto funcionamiento de este proyecto necesitas tener instalado [Node.js](https://nodejs.org/) en tu computador. 

#### Paquetes necesarios 

- [Path](https://nodejs.org/api/path.html)
- [File System](https://nodejs.org/api/fs.html)
- [fetch](https://www.npmjs.com/package/fetch)
- [fileHound](https://www.npmjs.com/package/filehound)
- [marked](https://www.npmjs.com/package/marked)

### Instalación 

Para utilizar esta librería primero debes descomprimir el archivo .zip que se encuentra disponible en la pestaña 'releases' de este repositorio.

```
npm install md-links
```

```
Instalar los paquetes necesarios

```
```
npm install --save path

```

```
var fs = require('fs')

```

```
npm install colors
```


## Snippets de uso 

Este proyecto puede ser utilizado a través de la terminal CLI

Por ejemplo:

`md-links <path-to-file> [options]`
Donde options puede ser 'validate' para verificar el estado del link y/o 'stats' para ver estádisticas del archivo(path) como cantidad de links encontrados, links rotos, etc 

```
$ md-links README.md
 
   ./some/example.md: 10 - http://algo.com/2/3/ Link a algo
   ./some/example.md: 15 - https://otra-cosa.net/algun-doc.html algún doc
   ./some/example.md: 14 - http://google.com/ Google
 
```
Usando validate:

```
$ md-links README.md --validate
 
   ./some/example.md: 10 - http://algo.com/2/3/ Link a algo 200 true
   ./some/example.md: 15 - https://otra-cosa.net/algun-doc.html 404 false
   ./some/example.md: 14 - http://google.com/ 200 true
 
```

## Versiones de la librería 📄

### Versión 1.0.0
versión inicial funcion publicada permite la lectura de archivos  y directorios, extraccion de links para documentos con extencion .md 
con option --validate o -v
<!-- Versión inicial con todas las características básicas. Se incluye la opción de validar links (--validate) y ver estadísticas básicas (--stats) -->
### Versión 1.1.0
se modifica extructura de funciones en archivos cumple misma funcionalidad que version 1.0.0





