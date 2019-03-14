const path = require('path');
const fs = require('fs')

export const goThroughDirectory = (myPath) => {
    let myNewPath
    let arrayStringsPath = [];

    if(!path.isAbsolute(myPath)){
        myNewPath = path.resolve(myPath)
    }else { myNewPath= myPath}

    if(fs.statSync(myNewPath).isFile() && path.extname(myNewPath) === '.md'){        
        arrayStringsPath.push(myNewPath)
    } else {
    
    const files = fs.readdirSync(myNewPath)
       
        files.forEach(file => {

            let newPath = path.join(myNewPath, file)  
            let stats = fs.statSync(newPath);
            
            if(stats.isDirectory()){
                arrayStringsPath = arrayStringsPath.concat(goThroughDirectory(newPath));                      
            }else {            
                if(path.extname(file) === '.md'){
                    arrayStringsPath.push(newPath);
                }           
            }
        });
    }  
    return arrayStringsPath;
}
