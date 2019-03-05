"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinks = void 0;

var path = require('path');

var fs = require('fs');

var myMarked = require('marked');

var getLinks = function getLinks(arrayStringsPathMd) {
  var arrayObjetsLinks = [];
  arrayStringsPathMd.forEach(function (ele) {
    var fileContent = fs.readFileSync(ele, 'utf8');
    var renderer = new myMarked.Renderer();

    renderer.link = function (href, title, text) {
      arrayObjetsLinks.push({
        href: href,
        text: text.slice(0, 51),
        file: ele
      });
    };

    myMarked(fileContent, {
      renderer: renderer
    });
  });
  return arrayObjetsLinks;
}; // console.log(getLinks());


exports.getLinks = getLinks;