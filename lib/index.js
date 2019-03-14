"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _linkLib = require("./link-lib");

var _optionsLib = require("./options-lib");

var path = require('path');

var fs = require('fs');

var myMarked = require('marked');

var fetch = require('node-fetch');
/*
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
} */
//  module.exports = mdLinks


var mdLinks = function mdLinks(myPath, options) {
  // const arrValidated = validateLinks(myPath).then(res=>res)
  var arrObj = (0, _linkLib.getLinks)(myPath);
  return new Promise(function (resolve, reject) {
    if (options.validate) {
      (0, _optionsLib.validateLinks)(myPath).then(function (res) {
        return resolve(res);
      }).catch(function (err) {
        return reject(err);
      });
    } else if (!options.validate) {
      //    return new Promise (resolve => resolve(getLinks(myPath)))
      resolve(arrObj);
    }
  });
};
/*else if (!options.validate && options.stats) {
            resolve(statsLinks(arrObj))
        } else if (options.stats && options.validate) {
            resolve(objStatsValidate)
        }*/


exports.mdLinks = mdLinks;