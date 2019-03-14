import {mdLinks} from '../src/index.js'
import { validateLinks } from '../src/options-lib.js';

const arrObject = [ 
{   href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    text: 'Marked Documentation',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md' },
{   href: 'https://github.com/markedjs/marked',
    text: 'Marked Js Github',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md' },
{   href: 'https://nodeschooio/s/',
    text: 'Not Found Nodeschool',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md' },
{   href: 'https://babeljs.io/setup#installation',
    text: 'Instalación Babel',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md' },
{   href: 'https://babeljs.io/setup#installation',
    text: 'Instalación Babel',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md' },
{   href: 'https://www.laboratoria.la/',
    text: 'Laboratoria',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md' },
{   href: 'https://nodeschool.io/s/',
    text: 'Nodeschool 404',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md' } ]

const arrObjectValidated = [
{   href: 'https://marked.js.org/#/CONTRIBUTING.md#test-early-',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md',
    status: 200,
    statusText: 'Ok',
    text: 'Marked Documentation' },
{   href: 'https://github.com/markedjs/marked',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md',
    status: 200,
    statusText: 'Ok',
    text: 'Marked Js Github' },
{   href: 'https://nodeschooio/s/',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md',
    status: '',
    statusText: 'Fail',
    text: 'Not Found Nodeschool' },
{   href: 'https://babeljs.io/setup#installation',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md',
    status: 200,
    statusText: 'Ok',
    text: 'Instalación Babel' },
{   href: 'https://babeljs.io/setup#installation',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md',
    status: 200,
    statusText: 'Ok',
    text: 'Instalación Babel' },
{   href: 'https://www.laboratoria.la/',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md',
    status: 200,
    statusText: 'Ok',
    text: 'Laboratoria' },
{   href: 'https://nodeschool.io/s/',
    file: 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md',
    status: 404,
    statusText: 'Fail',
    text: 'Nodeschool 404' }

]

describe('mdLinks', () => {
    it('debería ser una función', () => {
        expect(typeof mdLinks).toBe('function')
    })
    it('debería retornar un array de objetos como resultado si ingreso como argumento solo la ruta', () => {
        expect(typeof mdLinks('./test/dir',{validate:false})).toBe('object')  
    })
    it('debería retornar un objeto si ingreso como argumento la ruta más la opción validate', () => {
        expect(typeof mdLinks('./test/dir',{validate:true})).toBe('object')
    })
    it('debería retornar un array de objetos de los links si se ingreso como argumento solo la ruta', (done) => {
       return mdLinks('./test/dir',{validate:false})
       .then((res) => {
           expect(res).toEqual(arrObject)
           done()
       })
    })
    it('debería retornar un array de objetos de los links validados si se ingreso como argumento la ruta y validate', (done) => {
        mdLinks('./test/dir',{validate:true})
        .then((res) => {
            expect(res).toEqual(arrObjectValidated)
            done()
        })
     })
}) 
