const path = require('path')
const fs = require('fs')
const myMarked = require('marked')

const goThroughDirectory = (myPath) => {
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
                arrayStringsPath.push(newPath);
            }           
        }
    });  
    return arrayStringsPath;
}
console.log(goThroughDirectory('./dir'))

const getLinks = (arrayStringsPathMd) => {    
    const arrayObjetsLinks = [];

    arrayStringsPathMd.forEach(ele => {
        const fileContent = fs.readFileSync(ele, 'utf8');        
        const renderer = new myMarked.Renderer();

        renderer.link = (href, title, text) => { 
            arrayObjetsLinks.push({href: href.slice(0,51), text, file: ele}) };

        myMarked(fileContent, {renderer});
        
    });
    return arrayObjetsLinks;
}

console.log(getLinks(goThroughDirectory('./dir')));
