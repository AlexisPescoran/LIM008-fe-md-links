import {goThroughDirectory} from './path-lib.js'
const fs = require('fs');
const myMarked = require('marked')

export const getLinks = (myPath) => {   
    let arrayStringsPathMd
    arrayStringsPathMd = goThroughDirectory(myPath)
    const arrayObjetsLinks = [];
    const renderer = new myMarked.Renderer();
    arrayStringsPathMd.forEach(ele => {

            const fileContent = fs.readFileSync(ele, 'utf8');        
            renderer.link = (href, title, text) => { 
                arrayObjetsLinks.push({href: href.slice(0,51), text, file: ele}) };
    
            myMarked(fileContent, {renderer});
            
        });    
    
    return arrayObjetsLinks;
}

