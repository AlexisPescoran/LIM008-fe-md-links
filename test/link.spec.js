import {getLinks} from '../src/link-lib'

const arrObject = [ 
    { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
      text: 'Marked Documentation',
      file: `${process.cwd()}\\test\\dir\\abc\\archivo.md` },
    { href: 'https://github.com/markedjs/marked',
      text: 'Marked Js Github',
      file: `${process.cwd()}\\test\\dir\\abc\\archivo.md` },
    { href: 'https://nodeschooio/s/',
      text: 'Not Found Nodeschool',
      file: `${process.cwd()}\\test\\dir\\abc\\archivo.md` },      
    { href: 'https://babeljs.io/setup#installation',
      text: 'Instalación Babel',
      file: `${process.cwd()}\\test\\dir\\abc\\archivo.md` },
    { href: 'https://babeljs.io/setup#installation',
      text: 'Instalación Babel',
      file: `${process.cwd()}\\test\\dir\\prueba.md` },
    { href: 'https://www.laboratoria.la/',
      text: 'Laboratoria',
      file: `${process.cwd()}\\test\\dir\\prueba.md` },
    { href: 'https://nodeschool.io/s/',
      text: 'Nodeschool 404',
      file: `${process.cwd()}\\test\\dir\\prueba.md` } ]

const arrObject2 = [
    { href: 'https://www.laboratoria.la/',
      text: 'Laboratoria',
      file: `${process.cwd()}\\test\\abc.md`} ]

describe('getLinks', () => {
    it('debería ser una función', () => {
        expect(typeof getLinks).toBe('function')
    });
    it('debería retornar un array de objetos', () => {
        expect(typeof getLinks(`${process.cwd()}\\test\\dir`)).toBe('object')
    })
    it('debería retornar un array de objetos con href, text y file con ruta de un directorio', () => {
        expect(getLinks(`${process.cwd()}\\test\\dir`)).toEqual(arrObject)
    })
    it('debería retornar un array de objetos con href, text y file con ruta de un archivo', () => {
      expect(getLinks(`${process.cwd()}\\test\\abc.md`)).toEqual(arrObject2)
  })
});
