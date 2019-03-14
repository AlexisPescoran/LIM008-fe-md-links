"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinks = void 0;

var _pathLib = require("./path-lib.js");

var fs = require('fs');

var myMarked = require('marked');

var getLinks = function getLinks(myPath) {
  var arrayStringsPathMd;
  arrayStringsPathMd = (0, _pathLib.goThroughDirectory)(myPath);
  var arrayObjetsLinks = [];
  var renderer = new myMarked.Renderer();
  arrayStringsPathMd.forEach(function (ele) {
    var fileContent = fs.readFileSync(ele, 'utf8');

    renderer.link = function (href, title, text) {
      arrayObjetsLinks.push({
        href: href.slice(0, 51),
        text: text,
        file: ele
      });
    };

    myMarked(fileContent, {
      renderer: renderer
    });
  });
  return arrayObjetsLinks;
};

exports.getLinks = getLinks;