import {validateLinks, validateStats} from '../src/options-lib'

const arrObjectOutput = [ 
  { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    file: `${process.cwd()}\\test\\dir\\abc\\archivo.md`,
    text: 'Marked Documentation',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://github.com/markedjs/marked',
    file: `${process.cwd()}\\test\\dir\\abc\\archivo.md`,
    text: 'Marked Js Github',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://nodeschooio/s/',
    file: `${process.cwd()}\\test\\dir\\abc\\archivo.md`,
    text: 'Not Found Nodeschool',
    status: '',
    statusText: 'Fail' },
  { href: 'https://babeljs.io/setup#installation',
    file: `${process.cwd()}\\test\\dir\\abc\\archivo.md`,
    text: 'Instalación Babel',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://babeljs.io/setup#installation',
    file: `${process.cwd()}\\test\\dir\\prueba.md`,
    text: 'Instalación Babel',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://www.laboratoria.la/',
    file: `${process.cwd()}\\test\\dir\\prueba.md`,
    text: 'Laboratoria',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://nodeschool.io/s/',
    file: `${process.cwd()}\\test\\dir\\prueba.md`,
    text: 'Nodeschool 404',
    status: 404,
    statusText: 'Fail' } ]   
    
const arrObjectOutput2 = [
  { href: 'https://www.laboratoria.la/',
    text: 'Laboratoria',
    file: `${process.cwd()}\\test\\abc.md`, 
    status: 200,
    statusText: 'Ok'  } ]

const validateStatsObject = {
  total: 7,
  unique: 6,
  broken: 2
}


describe('validateLinks', () => {
    it('debería ser una función', () => {
        expect(typeof validateLinks).toBe('function')
    })
    it('debería retornar un array de objetos', () => {
        return validateLinks(`${process.cwd()}\\test\\dir`)
        .then((res) => {
          expect(typeof res).toBe('object')
        }) 
    })
    it('debería retornar un array de objetos con las propiedades status y statusText agregadas con links que no funcionan', (done) =>{
        return validateLinks(`${process.cwd()}\\test\\dir`)
        .then((res) => {
            expect(res).toEqual(arrObjectOutput)
            done()
        })
    })
    it('debería retornar un array de objetos con las propiedades status y statusText agregadas con links que sí funcionan', (done) => {
        return validateLinks(`${process.cwd()}\\test\\abc.md`)
        .then((res) => {
            expect(res).toEqual(arrObjectOutput2)
            done()
        })
    })
});

describe('validateStats', () => {
  it('debería ser una función', () => {
    expect(typeof validateStats).toBe('function')
  })
  it('debería retornar un objeto de stats con las propiedades total, unique y broken', () => {
    expect(typeof validateStats([{},{}])).toBe('object')
  })
  it('debería retornar un objeto de validate&stats con la propiedad total:7, unique:6 y broken:2 con ruta de directorio', (done) => {
    return validateLinks(`${process.cwd()}\\test\\dir`)
    .then((res) => {
      expect(validateStats(res)).toEqual(validateStatsObject);
      done();
    })
  })
  it('debería retornar un objeto de validate&stats con la propiedad total:1, unique:1 y broken:0 con ruta de archivo', (done) => {
    return validateLinks(`${process.cwd()}\\test\\abc.md`)
    .then((res) => {
      expect(validateStats(res)).toEqual({total: 1, unique: 1, broken: 0});
      done();
    })
  })
})
