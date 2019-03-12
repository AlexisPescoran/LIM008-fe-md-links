#!/usr/bin/env node
"use strict";

var mdLinks = require('./index.js');

program = require('commander');
program.version('0.1.0').option('-p, --peppers', 'Add peppers').option('-P, --pineapple', 'Add pineapple').option('-b, --bbq-sauce', 'Add bbq sauce').option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble').parse(process.argv);
console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
console.log('hola'); // program
//   .arguments('<path>')
//   .option('-v, --validate', 'Validar links, devolver el estado de los links')
//   .option('-s, --stats', 'Mostrar las estadísticas de los links')
//   .action(mdLinks)
//   .parse(process.argv);
// const options = {
//   validate: program.validate,
//   stats: program.stats
// }
// const userPath = program.args[0];