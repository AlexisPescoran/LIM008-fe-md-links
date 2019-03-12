const path = require('path')
const fs = require('fs')
const myMarked = require('marked')
const fetch = require('node-fetch')


// console.log(goThroughDirectory('./test/dir'))

// console.log(getLinks(['./test/dir/abc/archivo.md', './test/dir/prueba.md' ]))
// console.log(getLinks(goThroughDirectory('./test/dir')));

//Para mapear el link
/*
const links = pruebaObjeto.map((link) => link.href) 
console.log(links)*/

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

  /*const validate = (link) => {
      return link.href.concat('prueba');
  }*/

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

/*file = path.extname('./ABC/README.md')
console.log(file)*/
/* -----------------------------------------------------------------*/

//para preguntar sí la ruta es absoulta
const isAbsolute = (myPath) => {
    return path.isAbsolute(myPath);    
}
// console.log(isAbsolute('./test/dir'))
//para convertir la ruta a absoluta
const turnIntoAbsolute = (myPath) => {    
    return path.resolve(myPath);
}
// console.log('La ruta convertida es ' + turnIntoAbsolute('C:\Users\Laboratoria\Documents\Project_Markdown\LIM008-fe-md-links\test\dir'))

//Resolvamos si es ruta
const solvePath = (myPath) => new Promise((resolve, reject) => { 
    if(isAbsolute(myPath)){
        resolve(myPath)        
    } else {
        const myNewPath =  turnIntoAbsolute(myPath)
        resolve(myNewPath)        
    }  
})

// solvePath('./test/dir').then(res => console.log('la ruta convertida es ' + res))
// solvePath('C:\Users\Laboratoria\Documents\Project_Markdown\LIM008-fe-md-links\test\dir').then(res=>console.log('Devolver la misma ruta ' + res))
// const x = solvePath('./test/dir').then(res => res)
// console.log(x)


// Para saber si es ruta de un archivo
/*
const isFile = (myPath) => {
    let arrayStringsPath = [];
    const stats = fs.statSync(myPath)

    if(stats.isFile && path.extname(myPath) === '.md'){        
        arrayStringsPath.push(myPath);
    }   
    return arrayStringsPath;
}*/
// Para saber si es ruta de un archivo de manera asíncrona
const isFile = (myPath) => {
    let arrayStringsPath = [];
    const stats = fs.statSync(myPath)
    return new Promise ((resolve, reject) => {
        if(stats.isFile() && path.extname(myPath) === '.md'){        
            arrayStringsPath.push(myPath);
        }   
        resolve(arrayStringsPath);
    })    
}
// isFile(solvePath('.test/abc.md')).then(res => console.log(res))
// isFile('C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir').then((res) => console.log(res))

// //Si el archivo no es md
// const x = isFile('./package.json')
// console.log(x)
// console.log(x.length)
// console.log(getLinks(x));

// //Si el archivo sí es md 
// const y = isFile('./test/abc.md')
// console.log(y)
// console.log(y.length)
// console.log(getLinks(y));

//Para recorrer la carpeta
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

//Para obtener los links
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

const pruebaObjeto = getLinks(goThroughDirectory('./test/dir'));


//Si ingresa solo validate
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

// validateLink(pruebaObjeto).then((res)=> console.log(res))


//Si ingresa solo stasts
const statsLinks = (arrObj) => {
    return {
        total: arrObj.length,
        unique: new Set(arrObj.map(({ href }) => href)).size

    }    
}

// console.log(statsLinks(pruebaObjeto)) 

// Para validate y stats juntos
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

// validateStats(pruebaObjeto).then(ele => console.log(ele)) 


/*
//función mdLinks
const mdLinks = (path, options) => {
    let arrObj = [];    
    return new Promise ((resolve, reject) => {
        if(isAbsolute(path))
        {          
            if(isFile){
                arrObj = getLinks(arrayStringsPathMd)
            } else {
                const arrayStringsPathMd = goThroughDirectory(path)
                arrObj = getLinks(arrayStringsPathMd)
            }
        } else {
            const myPath = turnIntoAbsolute(path)
            if(isFile){
                const arrayStringsPathMd = isFile(path)
                arrObj = getLinks(arrayStringsPathMd)
            } else {
                const arrayStringsPathMd = goThroughDirectory(myPath)
                arrObj = getLinks(arrayStringsPathMd)
            }
        }
        
        // if(!options.validate && !options.stats){
        //     resolve(arrObj)
        // } else if (options.validate && !options.stats) {
        //     validateLink(arrObj)              
        //       .then(response => resolve(response))
        //       .catch(console.error)
        //   } else if (!options.validate && options.stats) {
        //       statsLinks(arrObj)
        //       .then(response => resolve(response))
        //       .catch(console.error)
        //   } else if (options.validate && options.stats) {
        //       validateStats(arrObj)
        //       .then(response =>resolve(response))
        //       .catch(console.error)
        //   }
        
    })
}
    
    
 mdLinks('./test/dir').then((res) => console.log(res)).catch('error') 
 */

 const mdLinks = (userPath, options) => {
    let myPath = '';
    let arrPathMd = [];
    let arrObj = [];
    if(path.isAbsolute(userPath)){
        myPath = userPath;
    } else {
        myPath = path.resolve(userPath)
    }
    if(fs.statSync(myPath).isFile()){
        arrPathMd = isFile(myPath)
    } else {
        arrPathMd = goThroughDirectory(myPath)
    }
    // return arrPathMd;
    // return myPath
    return new Promise ((resolve, reject) => {
        if(!options.validate && !options.stats){
            arrObj = getLinks(arrPathMd)
            return arrObj
        } else if (options.validate && !options.stats){
            validateLink(arrObj).then(res => resolve(res))
        } else if (!options.validate && options.stas) {
            statsLinks(arrObj).then(res => resolve(res))
        } else if (options.validate && options.stats) {
            validateStats(arrObj).then(res => resolve(res))
        }
    })
 }
//  console.log(mdLinks('.test/dir'))    
//  console.log(mdLinks('./test/abc.md')) 
mdLinks('C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir', {validate:false, stats:false}).then(res => console.log(res))
      