"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goThroughDirectory = exports.isFile = exports.turnIntoAbsolute = exports.isAbsolute = void 0;

var path = require('path');

var fs = require('fs');

var isAbsolute = function isAbsolute(myPath) {
  return path.isAbsolute(myPath);
};

exports.isAbsolute = isAbsolute;

var turnIntoAbsolute = function turnIntoAbsolute(myPath) {
  return path.resolve(myPath);
};

exports.turnIntoAbsolute = turnIntoAbsolute;

var isFile = function isFile(myPath) {
  var arrayStringsPath = [];
  var stats = fs.statSync(myPath);

  if (stats.isFile() && path.extname(myPath) === '.md') {
    arrayStringsPath.push(myPath);
  } else {
    return arrayStringsPath;
  }

  return arrayStringsPath;
};

exports.isFile = isFile;

var goThroughDirectory = function goThroughDirectory(myPath) {
  var arrayStringsPath = [];
  var files = fs.readdirSync(myPath);
  files.forEach(function (file) {
    var newPath = myPath + '/' + file;
    var stats = fs.statSync(newPath);

    if (stats.isDirectory()) {
      arrayStringsPath = arrayStringsPath.concat(goThroughDirectory(newPath));
    } else {
      if (path.extname(file) === '.md') {
        arrayStringsPath.push(newPath);
      }
    }
  });
  return arrayStringsPath;
};

exports.goThroughDirectory = goThroughDirectory;