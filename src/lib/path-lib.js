const path = require('path');
const fs = require('fs')

export const isAbsolute = (myPath) => {
    return path.isAbsolute(myPath);    
}

export const turnIntoAbsolute = (myPath) => {
    return path.resolve(myPath);
}

const arrayStringsPath = []; // esto no puede ir allí  
export const goThroughDirectory = (myPath) => {
    const stats = fs.statSync(myPath);
    if(stats.isDirectory()){
        //abrir el directorio y recorrer los hijos
    }else {
        //almacenar la ruta de archivo en un array
        arrayStringsPath.push(myPath);
    }    
    //return arrayStringsPath;
}

export const isMdFile = (arrStrings) => {
    const arrayStringsPathMd = ['//documents', 'C://users/laboratoria']
    return arrayStringsPathMd;
}