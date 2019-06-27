
export const validateOptionInConsole = (optionReadInConsole) => {

    if(optionReadInConsole != 0 && optionReadInConsole != "" ){
        return true;
    }
     
}

export const validatePathInConsola = (pathReadInConsole) => {
    if( pathReadInConsole != 0 &&  pathReadInConsole != "" ){
        return true;
    }
}

export const validateOptionAndPathInConsola = (validateOptionInConsola,validatePathInConsola) => {
    if(validateOptionInConsola  || validatePathInConsola ){
        return true;
    }
}









const a = process.argv;
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);