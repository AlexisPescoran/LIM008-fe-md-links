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
     
    return arrayStringsPath
}
// console.log(goThroughDirectory('./test/dir'))

const getLinks = (arrayStringsPathMd) => {   
    
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

console.log(getLinks(['./test/dir/abc/archivo.md', './test/dir/prueba.md' ]))
// console.log(getLinks(goThroughDirectory('./test/dir')));

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
fetch('https://www.megaupload.com')
.then(res => {
    console.log(`probando qué devuelve el res ${res} `); 
    console.log(`probando qué devuelve el Status ${res.status} `);      
    console.log(`probando qué devuelve el statusText ${res.statusText} `);
})
.catch(console.error)*/


// const pruebaObjeto = getLinks(goThroughDirectory('./test/dir'));


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

// const validate = (link) => {
//     return fetch(link.href)
//       .then(response => {
//         if (response.status >= 200 && response.status < 400) {
//           link.status = response.status;
//           link.statusText = 'Ok';
//           return link;
//         } else {
//           link.status = response.status;
//           link.statusText = 'Fail';
//           return link;
//         }
//       }).catch(error => {
//           link.status = ''
//           link.statusText = 'Fail'

//           return link;
//       })
//   }

/*
const validateLink = (arrObj) => {
    console.log('Pendiente...')
    const promises = arrObj.map((link) => {
    return fetch(link.href)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          link.status = response.status;
          link.statusText = 'Ok';
          return link;
        } else {
          link.status = response.status;
          link.statusText = 'Fail';
          return link;
        }
      }).catch(error => {
          link.status = ''
          link.statusText = 'Fail'
          return link;
      })
    });     
   return Promise.all(promises)
} 
*/


  /*const validate = (link) => {
      return link.href.concat('prueba');
  }*/



// validateLink(pruebaObjeto).then((res)=> console.log(res))

/*
const statsLinks = (arrObj) => {
    return {
        total: arrObj.length,
        unique: new Set(arrObj.map(({ href }) => href)).size

    }    
}

console.log(statsLinks(pruebaObjeto)) */


/*
const validateStats = (arrObj) => {
    return validateLink(pruebaObjeto)
    .then((res) => {
        const brokens = res.filter(link => link.statusText === 'Fail').length  
        return {
            total: arrObj.length,
            unique: new Set(arrObj.map(({ href }) => href)).size,
            broken: brokens
        }             
      });         
  }



validateStats(pruebaObjeto).then(ele => console.log(ele)) */

// const h = validateLink(pruebaObjeto)
// .then((res) => {
//     return res.filter(link => link.statusText === 'Fail').length    
//   });

// console.log(h.then((res)=>console.log(res)))


// validateLink(pruebaObjeto)
// .then((res) => {
//     const h = res.filter(link => link.statusText === 'Fail').length   
//     console.log(h)
//     return h     
//   });
// Para saber si es ruta de un archivo
const isFile = (myPath) => {
    let arrayStringsPath = [];
    const stats = fs.statSync(myPath)

    if(stats.isFile && path.extname(myPath) === '.md'){        
        arrayStringsPath.push(myPath);
    }   
    return arrayStringsPath;
}

//Si el archivo no es md
const x = isFile('./package.json')
console.log(x)
console.log(x.length)
console.log(getLinks(x));

//Si el archivo sí es md

const y = isFile('./test/abc.md')
console.log(y)
console.log(y.length)
console.log(getLinks(y));

/*file = path.extname('./ABC/README.md')
console.log(file)*/
