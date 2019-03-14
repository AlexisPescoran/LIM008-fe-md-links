"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _linkLib = require("./link-lib");

var _optionsLib = require("./options-lib");

var mdLinks = function mdLinks(myPath, options) {
  var arrObj = (0, _linkLib.getLinks)(myPath);
  console.log(arrObj);
  return new Promise(function (resolve, reject) {
    if (options.validate) {
      (0, _optionsLib.validateLinks)(myPath).then(function (res) {
        return resolve(res);
      }).catch(function (err) {
        return reject(err);
      });
    } else if (!options.validate) {
      resolve(arrObj);
    }
  });
};

exports.mdLinks = mdLinks;