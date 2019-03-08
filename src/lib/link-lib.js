const path = require('path');
const fs = require('fs');
const myMarked = require('marked')
const linCheck = require('link-check')

export const getLinks = (arrayStringsPathMd) => {    
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


