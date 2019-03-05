const path = require('path');
const fs = require('fs');

export const getLinks = (arrayStringsPathMd) => {    
    const arrayObjetsLinks = [];

    arrayStringsPathMd.forEach(ele => {
        const fileContent = fs.readFileSync(ele);        
        const renderer = new marked.Renderer();

        renderer.link = (href, title, text) => { 
            arrayObjetsLinks.push({href, text, file: file}) };

        marked(fileContent, {renderer});
        
    });
    return arrayObjetsLinks;
}

export const cutLinks = (arrayObjetsLinks) => {
    const arrayObjetsLinksModified = [{}, {}, {}];
    return arrayObjetsLinksModified;
}

