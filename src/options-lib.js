import {getLinks} from './link-lib'
const fetch = require('node-fetch')

export const validateLinks = (myPath) => {
    const arrObj = getLinks(myPath)
    const promises = arrObj.map((link) => {
    return fetch(link.href)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          link.status = response.status;
          link.statusText = 'Ok';
          return link;
        } else {
          link.status = response.status;
          link.statusText = 'Fail';
          return link;
        }
      }).catch(error => {
          link.status = ''
          link.statusText = 'Fail'
          return link;
      })
    });     
   return Promise.all(promises)
}

export const validateStats = (res) => {
  const brokens = res.filter(link => link.statusText === 'Fail').length  
  return {
      total: res.length,
      unique: new Set(res.map(({ href }) => href)).size,
      broken: brokens
  }    
}