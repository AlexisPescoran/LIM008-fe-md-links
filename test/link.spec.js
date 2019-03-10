import {getLinks} from '../src/lib/link-lib'

const arrObject = [ 
    { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
      text: 'Marked Documentation',
      file: './test/dir/abc/archivo.md' },
    { href: 'https://github.com/markedjs/marked',
      text: 'Marked Js Github',
      file: './test/dir/abc/archivo.md' },
    { href: 'https://nodeschooio/s/',
      text: 'Not Found Nodeschool',
      file: './test/dir/abc/archivo.md' },
    { href: 'https://babeljs.io/setup#installation',
      text: 'Instalación Babel',
      file: './test/dir/prueba.md' },
    { href: 'https://www.laboratoria.la/',
      text: 'Laboratoria',
      file: './test/dir/prueba.md' },
    { href: 'https://nodeschool.io/s/',
      text: 'Nodeschool 404',
      file: './test/dir/prueba.md' } ]

describe('getLinks', () => {
    it('debería ser una función', () => {
        expect(typeof getLinks).toBe('function')
    });
    it('debería retornar un array de objetos', () => {
        expect(typeof getLinks(['./test/dir/abc/archivo.md', './test/dir/prueba.md' ])).toBe('object')
    });
    it('debería retornar un array de objetos con href, text y file', () => {
        expect(getLinks(['./test/dir/abc/archivo.md', './test/dir/prueba.md' ])).toEqual(arrObject)
    })
});
