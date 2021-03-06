"use strict";

var _linkLib = require("./link-lib");

var _optionsLib = require("./options-lib");

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
    arrPathMd = goThroughDirectory(myPath);
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
    } else if (options.validate && options.stats) {
      resolve(objStatsValidate);
    }
  });
};

module.exports = mdLinks;