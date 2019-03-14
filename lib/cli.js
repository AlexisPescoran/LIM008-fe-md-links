#!/usr/bin/env node
// const mdLinks = require('./index.js')
"use strict";

var _index = require("./index.js");

var _optionsLib = require("./options-lib");

// import {getLinks} from './link-lib'
var program = require('commander'); // program
//   .version('0.1.0')
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq-sauce', 'Add bbq sauce')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .parse(process.argv);
// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);


program.arguments('<path>').option('-v, --validate', 'Validar links, devolver el estado de los links').option('-s, --stats', 'Mostrar las estadísticas de los links') // .action(mdLinks)
.parse(process.argv);
var options = {
  validate: program.validate,
  stats: program.stats
};
var myPath = program.args[0]; // if(options.validate){
//   mdLinks(myPath, options)
//   .then((res) => console.log(res))
//   console.log('prueba')
// }else{
//   mdLinks(myPath, options)
//   .then((res) => console.log(res))
// }

(0, _index.mdLinks)(myPath, options).then(function (arrObj) {
  if (options.stats) {
    var objStatsLinks = (0, _optionsLib.validateStats)(arrObj);
    console.log("\nTotal: ".concat(objStatsLinks.total, " \nUnique: ").concat(objStatsLinks.unique, "  ").concat(objStatsLinks.broken ? '\n Broken: ' + objStatsLinks.broken : ''));
  } else {
    arrObj.forEach(function (link) {
      console.log("\n".concat(link.file, " ").concat(link.href, " ").concat(link.status ? link.status : '', " ").concat(link.statusText ? link.statusText : '', " ").concat(link.text, "\n"));
    });
  }
}); // else if(!options.validate){
//   mdLinks(myPath, options)
// .then((res) => {console.log(res)})
// }
// mdLinks(myPath, options)
// .then((res) => {
//   if(options.validate){
//     console.log(res)
//   } else if(!options.validate && !options.stats){
//     console.log(res)
//   }
// })
// const myPath = program.args[0];
// if (!userPath) {
//   console.log('No ingresó ruta')
// } else {
//   mdLinks(userPath, options)
//     .then(arrObj => {
//       if (options.validate) {
//         arrObj.forEach(link => {
//           console.log(`\n${link.href}\n ${link.text}\n ${link.file}\n ${link.status} \n ${link.statusText}\n`)
//         });
//       } else if (Array.isArray(arrObj)) {
//         arrObj.forEach(link => {          
//           console.log(`\n${link.href}\n ${link.text}\n ${link.file}\n`);
//         });
//       } else {
//         console.log(arrObj);
//       }
//     })
// } 
// if(!options.validate && !options.stats){
//   mdLinks(myPath, options)
//   .then((res) =>console.log(res))}
// console.log('a',myPath)
// }else if (options.validate && !options.stats) {
//   mdLinks(userPath, options)
//   .then((res) =>console.log(res))
// }
// if(options.stats && options.validade){
//   validateStats(userPath).then(ele => console.log(res))
// }

/* if (options.stats && options.validate) {
        console.log(`\nTotal: ${arrObj.total} \nUnique: ${arrObj.unique} \nBroken: ${arrObj.broken}\n `);
      } else if (options.stats) {
        console.log(`\nTotal: ${arrObj.total} \nUnique: ${arrObj.unique}\n`);
      } else  */