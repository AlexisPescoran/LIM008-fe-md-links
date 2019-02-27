const path = require('path');

export const isAbsolute = (myPath) => {
    return path.isAbsolute(myPath);    
}

export const turnIntoAbsolute = (myPath) => {
    return path.resolve(myPath);
}

export const goThroughDirectory = (myPath) => {
    const arrayStringsPath = ['//documents', 'C://users/laboratoria']
    return arrayStringsPath;
}

export const isMdFile = (arrStrings) => {
    const arrayStringsPathMd = ['//documents', 'C://users/laboratoria']
    return arrayStringsPathMd;
}