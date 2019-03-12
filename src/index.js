import { goThroughDirectory } from './path-lib.js'
import { getLinks } from "./link-lib"
import {validateLinks, validateStats, statsLinks} from './options-lib'

const path = require('path')
const fs = require('fs')
const myMarked = require('marked')
const fetch = require('node-fetch')

export const mdLinks = (userPath, options) => {
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
    arrObj = getLinks(arrPathMd)
    const arrValidated = validateLinks(arrObj).then(res=>res)
    const objStatsValidate = validateStats(arrObj).then(res=>res)
    return new Promise ((resolve, reject) => {
        if(!options.validate && !options.stats){
            resolve(arrObj)
        } else if (options.validate && !options.stats){
               resolve(arrValidated)
        } else if (!options.validate && options.stats) {
            resolve(statsLinks(arrObj))
        } else if (options.stats && options.validate) {
            resolve(objStatsValidate)
        }
    })
 }
//  module.exports = mdLinks