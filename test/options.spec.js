import {validateLinks} from '../src/lib/options-lib'

const arrObject = [ 
    { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
      text: 'Marked Documentation',
      file: './dir/abc/archivo.md' },
    { href: 'https://github.com/markedjs/marked',
      text: 'Marked Js Github',
      file: './dir/abc/archivo.md' },
    { href: 'https://nodeschooio/s/',
      text: 'Not Found Nodeschool',
      file: './dir/abc/archivo.md' },  
    { href: 'https://babeljs.io/setup#installation',
      text: 'Instalación Babel',
      file: './dir/prueba.md' },
    { href: 'https://www.laboratoria.la/',
      text: 'Laboratoria',
      file: './dir/prueba.md' },
    { href: 'https://nodeschool.io/s/',
      text: 'Nodeschool 404',
      file: './dir/prueba.md' } ]

const arrObject2 = [
    { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    text: 'Marked Documentation',
    file: './dir/abc/archivo.md' },
  { href: 'https://github.com/markedjs/marked',
    text: 'Marked Js Github',
    file: './dir/abc/archivo.md' } ]
      
const arrObjectOutput = [ 
  { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    text: 'Marked Documentation',
    file: './dir/abc/archivo.md', 
    status: 200,
    statusText: 'Ok'  },
  { href: 'https://github.com/markedjs/marked',
    text: 'Marked Js Github',
    file: './dir/abc/archivo.md',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://nodeschooio/s/',
    text: 'Not Found Nodeschool',
    file: './dir/abc/archivo.md',
    status: '',
    statusText: 'Fail' },
  { href: 'https://babeljs.io/setup#installation',
    text: 'Instalación Babel',
    file: './dir/prueba.md',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://www.laboratoria.la/',
    text: 'Laboratoria',
    file: './dir/prueba.md',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://nodeschool.io/s/',
    text: 'Nodeschool 404',
    file: './dir/prueba.md',
    status: 404,
    statusText: 'Fail' } ]   
    
const arrObjectOutput2 = [
  { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    text: 'Marked Documentation',
    file: './dir/abc/archivo.md', 
    status: 200,
    statusText: 'Ok'  },
  { href: 'https://github.com/markedjs/marked',
    text: 'Marked Js Github',
    file: './dir/abc/archivo.md',
    status: 200,
    statusText: 'Ok' } ]

describe('validateLinks', () => {
    it('debería ser una función', () => {
        expect(typeof validateLinks).toBe('function')
    })
    // it('debería retornar un array de objetos', () => {
    //     expect(typeof validateLinks(arrObject)).toBe('object')
    // })
    it('debería retornar un array de objetos con las propiedades status y statusText agregadas con links que no funcionan', () =>{
        return validateLinks(arrObject)
        .then((res) => {
            expect(res).toEqual(arrObjectOutput)
        })
    })
    it('debería retornar un array de objetos con las propiedades status y statusText agregadas con links que sí funcionan', () => {
        return validateLinks(arrObject2)
        .then((res) => {
            expect(res).toEqual(arrObjectOutput2)
        })
    })
});