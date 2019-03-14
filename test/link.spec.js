import {getLinks} from '../src/link-lib'

const arrObject = [ 
    { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
      text: 'Marked Documentation',
      file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md' },
    { href: 'https://github.com/markedjs/marked',
      text: 'Marked Js Github',
      file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md' },
    { href: 'https://nodeschooio/s/',
      text: 'Not Found Nodeschool',
      file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md' },      
    { href: 'https://babeljs.io/setup#installation',
      text: 'Instalación Babel',
      file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md' },
    { href: 'https://babeljs.io/setup#installation',
      text: 'Instalación Babel',
      file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md' },
    { href: 'https://www.laboratoria.la/',
      text: 'Laboratoria',
      file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md' },
    { href: 'https://nodeschool.io/s/',
      text: 'Nodeschool 404',
      file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md' } ]

const arrObject2 = [
    { href: 'https://www.laboratoria.la/',
      text: 'Laboratoria',
      file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\abc.md'} ]

describe('getLinks', () => {
    it('debería ser una función', () => {
        expect(typeof getLinks).toBe('function')
    });
    it('debería retornar un array de objetos', () => {
        expect(typeof getLinks('./test/dir')).toBe('object')
    })
    it('debería retornar un array de objetos con href, text y file con ruta de un directorio', () => {
        expect(getLinks('./test/dir/')).toEqual(arrObject)
    })
    it('debería retornar un array de objetos con href, text y file con ruta de un archivo', () => {
      expect(getLinks('./test/abc.md')).toEqual(arrObject2)
  })
});
