#!/usr/bin/env node
import {mdLinks} from './index.js'
import { validateStats} from './options-lib'
const program = require('commander');
 
program
  .arguments('<path>')
  .option('-v, --validate', 'Validar links, devolver el estado de los links')
  .option('-s, --stats', 'Mostrar las estadísticas de los links')
  .parse(process.argv);

const options = {
  validate: program.validate,
  stats: program.stats
}
const myPath = program.args[0];

mdLinks(myPath, options)
.then((arrObj) => {
  if(options.stats){
    const objStatsLinks = validateStats(arrObj)
    console.log(`\nTotal: ${objStatsLinks.total} \nUnique: ${objStatsLinks.unique}  ${objStatsLinks.broken ? '\nBroken: ' + objStatsLinks.broken : ''}`)
  } else{
    arrObj.forEach(link => {
      console.log(`\n${link.file} ${link.href} ${link.status ? link.status : ''} ${link.statusText ? link.statusText : ''} ${link.text}\n`)
     })
  }  
})
