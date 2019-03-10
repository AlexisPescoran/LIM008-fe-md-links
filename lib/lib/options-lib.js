"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsLinks = exports.validateLinks = void 0;

var fetch = require('node-fetch');

var validateLinks = function validateLinks(arrObj) {
  console.log('Pendiente...');
  var promises = arrObj.map(function (link) {
    return fetch(link.href).then(function (response) {
      if (response.status >= 200 && response.status < 400) {
        link.status = response.status;
        link.statusText = 'Ok';
        return link;
      } else {
        link.status = response.status;
        link.statusText = 'Fail';
        return link;
      }
    }).catch(function (error) {
      link.status = '';
      link.statusText = 'Fail';
      return link;
    });
  });
  return Promise.all(promises);
};

exports.validateLinks = validateLinks;

var statsLinks = function statsLinks(arrObj) {
  var statsObject = {};
  statsObject.total = arrObj.length;
  statsObject.unique = new Set(arrObj.map(function (_ref) {
    var href = _ref.href;
    return href;
  })).size;
  return statsObject;
};

exports.statsLinks = statsLinks;