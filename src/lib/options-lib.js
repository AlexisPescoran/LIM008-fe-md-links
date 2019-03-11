const fetch = require('node-fetch')

export const validateLinks = (arrObj) => {
    console.log('Pendiente...')
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

export const statsLinks = (arrObj) => {
  const statsObject = {};
  statsObject.total = arrObj.length
  statsObject.unique = new Set(arrObj.map(({ href }) => href)).size
  return statsObject; 
}

export const validateStats = (arrObj) => {
  return validateLinks(arrObj)
    .then((res) => {
        const brokens = res.filter(link => link.statusText === 'Fail').length  
        return {
            total: arrObj.length,
            unique: new Set(arrObj.map(({ href }) => href)).size,
            broken: brokens
        }             
      }); 
}