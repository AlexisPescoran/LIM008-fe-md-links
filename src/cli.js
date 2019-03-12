#!/usr/bin/env node
// const mdLinks = require('./index.js')
import {mdLinks} from './index.js'
const program = require('commander');
 
// program
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

program
  .arguments('<path>')
  .option('-v, --validate', 'Validar links, devolver el estado de los links')
  .option('-s, --stats', 'Mostrar las estadísticas de los links')
  .action(mdLinks)
  .parse(process.argv);

const options = {
  validate: program.validate,
  stats: program.stats
}
const userPath = program.args[0];

if (!userPath) {
  console.log('No ingresó ruta')
} else {
  mdLinks(userPath, options)
    .then(arrObj => {
      if (options.stats && options.validate) {
        console.log(`\nTotal: ${arrObj.total} \nUnique: ${arrObj.unique} \nBroken: ${arrObj.broken}\n `);
      } else if (options.stats) {
        console.log(`\nTotal: ${arrObj.total} \nUnique: ${arrObj.unique}\n`);
      } else if (options.validate) {
        arrObj.forEach(linksData => {
          console.log(`\n${linksData.href}\n ${linksData.text}\n ${linksData.file}\n ${linksData.status} \n ${linksData.statusText}\n`)
        });
      } else if (Array.isArray(arrObj)) {
        arrObj.forEach(linksData => {          
          console.log(`\n${linksData.href}\n ${linksData.text}\n ${linksData.file}\n`);
        });
      } else {
        console.log(arrObj);
      }
    })
}  

