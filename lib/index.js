"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _pathLib = require("./path-lib.js");

var _linkLib = require("./link-lib");

var _optionsLib = require("./options-lib");

var path = require('path');

var fs = require('fs');

var myMarked = require('marked');

var fetch = require('node-fetch');

var mdLinks = function mdLinks(userPath, options) {
  var myPath = '';
  var arrPathMd = [];
  var arrObj = [];

  if (path.isAbsolute(userPath)) {
    myPath = userPath;
  } else {
    myPath = path.resolve(userPath);
  }

  if (fs.statSync(myPath).isFile()) {
    arrPathMd = isFile(myPath);
  } else {
    arrPathMd = (0, _pathLib.goThroughDirectory)(myPath);
  }

  arrObj = (0, _linkLib.getLinks)(arrPathMd);
  var arrValidated = (0, _optionsLib.validateLinks)(arrObj).then(function (res) {
    return res;
  });
  var objStatsValidate = (0, _optionsLib.validateStats)(arrObj).then(function (res) {
    return res;
  });
  return new Promise(function (resolve, reject) {
    if (!options.validate && !options.stats) {
      resolve(arrObj);
    } else if (options.validate && !options.stats) {
      resolve(arrValidated);
    } else if (!options.validate && options.stats) {
      resolve((0, _optionsLib.statsLinks)(arrObj));
    } else if (options.stats && options.validate) {
      resolve(objStatsValidate);
    }
  });
}; //  module.exports = mdLinks


exports.mdLinks = mdLinks;