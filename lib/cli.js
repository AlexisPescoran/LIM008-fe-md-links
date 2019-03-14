#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _optionsLib = require("./options-lib");

var program = require('commander');

program.arguments('<path>').option('-v, --validate', 'Validar links, devolver el estado de los links').option('-s, --stats', 'Mostrar las estadísticas de los links').parse(process.argv);
var options = {
  validate: program.validate,
  stats: program.stats
};
var myPath = program.args[0];
(0, _index.mdLinks)(myPath, options).then(function (arrObj) {
  if (options.stats) {
    var objStatsLinks = (0, _optionsLib.validateStats)(arrObj);
    console.log("\nTotal: ".concat(objStatsLinks.total, " \nUnique: ").concat(objStatsLinks.unique, "  ").concat(objStatsLinks.broken ? '\nBroken: ' + objStatsLinks.broken : ''));
  } else {
    arrObj.forEach(function (link) {
      console.log("\n".concat(link.file, " ").concat(link.href, " ").concat(link.status ? link.status : '', " ").concat(link.statusText ? link.statusText : '', " ").concat(link.text, "\n"));
    });
  }
});