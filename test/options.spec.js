import {validateLinks, statsLinks} from '../src/lib/options-lib'

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

const arrObject2 = [
    { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    text: 'Marked Documentation',
    file: './test/dir/abc/archivo.md' },
  { href: 'https://github.com/markedjs/marked',
    text: 'Marked Js Github',
    file: './test/dir/abc/archivo.md' } ]
      
const arrObjectOutput = [ 
  { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    text: 'Marked Documentation',
    file: './test/dir/abc/archivo.md', 
    status: 200,
    statusText: 'Ok'  },
  { href: 'https://github.com/markedjs/marked',
    text: 'Marked Js Github',
    file: './test/dir/abc/archivo.md',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://nodeschooio/s/',
    text: 'Not Found Nodeschool',
    file: './test/dir/abc/archivo.md',
    status: '',
    statusText: 'Fail' },
  { href: 'https://babeljs.io/setup#installation',
    text: 'Instalación Babel',
    file: './test/dir/prueba.md',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://www.laboratoria.la/',
    text: 'Laboratoria',
    file: './test/dir/prueba.md',
    status: 200,
    statusText: 'Ok' },
  { href: 'https://nodeschool.io/s/',
    text: 'Nodeschool 404',
    file: './test/dir/prueba.md',
    status: 404,
    statusText: 'Fail' } ]   
    
const arrObjectOutput2 = [
  { href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    text: 'Marked Documentation',
    file: './test/dir/abc/archivo.md', 
    status: 200,
    statusText: 'Ok'  },
  { href: 'https://github.com/markedjs/marked',
    text: 'Marked Js Github',
    file: './test/dir/abc/archivo.md',
    status: 200,
    statusText: 'Ok' } ]


describe('validateLinks', () => {
    it('debería ser una función', () => {
        expect(typeof validateLinks).toBe('function')
    })
    it('debería resolver un array de objetos', () => {
        return validateLinks(arrObject)
        .then((res) => {
          expect(typeof res).toBe('object')
        }) 
    })
    it('debería resolver un array de objetos con las propiedades status y statusText agregadas con links que no funcionan', () =>{
        return validateLinks(arrObject)
        .then((res) => {
            expect(res).toEqual(arrObjectOutput)
        })
    })
    it('debería resolver un array de objetos con las propiedades status y statusText agregadas con links que sí funcionan', () => {
        return validateLinks(arrObject2)
        .then((res) => {
            expect(res).toEqual(arrObjectOutput2)
        })
    })
});

describe('statsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof statsLinks).toBe('function')
  })
  it.only('debería retornarme un objeto stats con las propiedades total: y unique:', () => {
    expect(typeof statsLinks([{},{}])).toEqual('object')
  })  
})