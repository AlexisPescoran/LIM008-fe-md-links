const path = require('path')
const fs = require('fs')
const myMarked = require('marked')
const fetch = require('node-fetch')

const goThroughDirectory = (myPath) => {
    let arrayStringsPath = [];
    const files = fs.readdirSync(myPath)

    files.forEach(file => {

        let newPath = myPath + '/' + file        
        let stats = fs.statSync(newPath);
        if(stats.isDirectory()){
            arrayStringsPath = arrayStringsPath.concat(goThroughDirectory(newPath));                      
        }else {            
            if(path.extname(file) === '.md'){
                arrayStringsPath.push(newPath);
            }           
        }
    });  
    return arrayStringsPath;
}
// console.log(goThroughDirectory('./dir'))

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
// console.log(getLinks(goThroughDirectory('./dir')));

//Para mapear el link

/*
const pruebaObjeto = getLinks(goThroughDirectory('./dir'));
const links = pruebaObjeto.map((link) => link.href) 
*/

// console.log(links)


// const validate = (arrObj) => {
//     return new Promise ((resolve, reject) => {
//         const links = arrObj.map((link) => link.href)
//         fetch(links)
//         .then((res) => {
//             return res.json();
//         }).then((json) => {
//             console.log(json);
//         })
//     })
// }
// ));

/*
fetch('http://www.youtube.com')
.then(res => {
    console.log(`probando qué devuelve el res ${res} `); 
    console.log(`probando qué devuelve el Status ${res.status} `);      
    console.log(`probando qué devuelve el statusText ${res.statusText} `);
})
.catch(console.error)*/


const pruebaObjeto = getLinks(goThroughDirectory('./dir'));
// console.log(pruebaObjeto);

/* Me devuelve la promesa del fetch 
const validateLink = (obj) => {
    const links = obj.map((link) => link.href)
    const promises = links.map((link) => fetch(link)) 
    return promises;
}
Promise.all(validateLink(pruebaObjeto))
.then(responses => console.log(responses)) */

/* Me devuelve un array de los status de los links
const validateLink = (obj) => {
    const links = obj.map((link) => link.href)
    const promises = links.map((link) => fetch(link)
    .then((res) => res.status))     
    return promises
}
Promise.all(validateLink(pruebaObjeto))
.then(responses => console.log(responses)) */


/*
const validateLink = (obj) => {
    
    const onlyLinks = obj.map((link) => {
        return new Promise(resolve => {
            fetch(link.href)
            .then(res => {
                link.status = res.status;
                link.statusText = res.statusText;
                resolve(link)
            });
        });
    });
    return Promise.all(onlyLinks).then(responses => console.log(responses))
}

validateLink(pruebaObjeto); */

const validateLink = (obj) => new Promise((resolve, reject) => {
    console.log('Pendiente...')
    // const links = obj.map((link) => link.href)
    console.log(obj)
    const promises = obj.map((link) => validate(link)); 
    console.log(promises)
    resolve(Promise.all(promises)).then(res => {
        resolve(res)
    })
});

const validate = (link) => new Promise((resolve, reject) => {
    return fetch(link.href)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          link.status = response.status;
          link.value = 'OK';
          resolve(link);
        } else {
          link.status = response.status;
          link.value = 'Fail';
          resolve(link);
        }
      }).catch(err => {
        err.code = 404;
        err.message = 'Fail';
        link.status = err.code;
        link.value = err.message;
        resolve(link);
      });
  });

/*const validate = (link) => {
    fetch(link)
    .then(response => {
        const links = arrayLinks.map((objAnswer, statuslink) => {
          objAnswer.status = response[statuslink].status;
          objAnswer.statusText = response[statuslink].statusText;
          return objAnswer;
        });
        return links;
      })    
}*/





validateLink(pruebaObjeto);


