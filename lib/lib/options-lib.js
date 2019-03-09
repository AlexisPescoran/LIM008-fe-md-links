"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

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