import { getLinks } from "./link-lib"
import {validateLinks} from './options-lib'

export const mdLinks = (myPath, options) => {
    const arrObj = getLinks(myPath);

    return new Promise ((resolve, reject) => {
        if(options.validate){
            validateLinks(myPath).then((res) => resolve(res)).catch(err=> reject(err));
        } else if(!options.validate) {
            resolve(arrObj);
        }
    })
}
