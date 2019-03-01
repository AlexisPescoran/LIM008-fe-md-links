const path = require('path');
const fs = require('fs')

export const isAbsolute = (myPath) => {
    return path.isAbsolute(myPath);    
}

export const turnIntoAbsolute = (myPath) => {
    return path.resolve(myPath);
}

export const goThroughDirectory = (myPath) => {
    let arrayStringsPath = [];
    const files = fs.readdirSync(myPath)

    files.forEach(file => {

        let newPath = myPath + '/' + file        
        let stats = fs.statSync(newPath);
        if(stats.isDirectory()){
            arrayStringsPath = arrayStringsPath.concat(goThroughDirectory(newPath));                      
        }else {
            console.log(file);
            if(path.extname(file) === '.md'){
                arrayStringsPath.push(file);
            }           
        }
    });  
    return arrayStringsPath;
}
console.log(goThroughDirectory('./dir'))
