import { getLinks } from "./link-lib";

const mdLinks = (userPath, options) => {
    const myPath = solvePath(userPath)
    let arrPath = []
    if(fs.statSync(myPath).isFile()){
        arrPath = isFile(myPath)
    } else {
        arrPath = goThroughDirectory(myPath)
    }
    return new Promise((resolve, reject) => {
        if(!options.validate && !options.stats){
            //debería devolver el array de objetos de la función getLinks
        } else if (options.validate && !options.stats) {
            //debería devolver el array de objetos de la función validate
        } else if (!options.validate && options.stas) {
            //debería retornar un objeto del total y unique de la función stats
        } else if(options.validate && options.stats) {
            //debería retornar un objeto de los stats con la propiedad broken agregada
        }

    })
 }