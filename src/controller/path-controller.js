const path = require('path');

export const isAbsolute = (myPath) => {
    return path.isAbsolute(myPath);    
}

export const turnIntoAbsolute = (myPath) => {
    return path.resolve(myPath);
}

export const goThroughDirectory = (myPath) => {
    return myPath;
}