"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateStats = exports.validateLinks = void 0;

var _linkLib = require("./link-lib");

var fetch = require('node-fetch');

var validateLinks = function validateLinks(myPath) {
  var arrObj = (0, _linkLib.getLinks)(myPath);
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

var validateStats = function validateStats(res) {
  var brokens = res.filter(function (link) {
    return link.statusText === 'Fail';
  }).length;
  return {
    total: res.length,
    unique: new Set(res.map(function (_ref) {
      var href = _ref.href;
      return href;
    })).size,
    broken: brokens
  };
};

exports.validateStats = validateStats;