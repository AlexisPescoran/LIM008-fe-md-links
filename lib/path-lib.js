"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goThroughDirectory = void 0;

var path = require('path');

var fs = require('fs');

var goThroughDirectory = function goThroughDirectory(myPath) {
  var myNewPath;
  var arrayStringsPath = [];

  if (!path.isAbsolute(myPath)) {
    myNewPath = path.resolve(myPath);
  } else {
    myNewPath = myPath;
  }

  if (fs.statSync(myNewPath).isFile() && path.extname(myNewPath) === '.md') {
    arrayStringsPath.push(myNewPath);
  } else {
    var files = fs.readdirSync(myNewPath);
    files.forEach(function (file) {
      var newPath = path.join(myNewPath, file);
      var stats = fs.statSync(newPath);

      if (stats.isDirectory()) {
        arrayStringsPath = arrayStringsPath.concat(goThroughDirectory(newPath));
      } else {
        if (path.extname(file) === '.md') {
          arrayStringsPath.push(newPath);
        }
      }
    });
  }

  return arrayStringsPath;
};

exports.goThroughDirectory = goThroughDirectory;