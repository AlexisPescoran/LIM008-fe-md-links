import {getLinks} from '../src/lib/link-lib'

const arrObject = [ 
    { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
      text: 'Marked Documentation',
      file: './dir/abc/archivo.md' },
    { href: 'https://github.com/markedjs/marked',
      text: 'Marked Js Github',
      file: './dir/abc/archivo.md' },
    { href: 'https://babeljs.io/setup#installation',
      text: 'Instalación Babel',
      file: './dir/prueba.md' },
    { href: 'https://www.laboratoria.la/',
      text: 'Laboratoria',
      file: './dir/prueba.md' } ]

describe('getLinks', () => {
    it('debería ser una función', () => {
        expect(typeof getLinks).toBe('function')
    });
    it('debería retornar un array de objetos', () => {
        expect(typeof getLinks(['./dir/abc/archivo.md', './dir/prueba.md'])).toBe('object')
    });
    it('debería retornar un array de objetos con href, text y file', () => {
        expect(getLinks(['./dir/abc/archivo.md', './dir/prueba.md'])).toEqual(arrObject)
    })
});
