import {goThroughDirectory} from '../src/path-lib'

describe('goThroughDirectory', () => {
    it('debería ser una función', () => {
        expect(typeof goThroughDirectory).toBe('function')
    });
    it('debería retornar un array de strings', () => {
        expect(typeof goThroughDirectory('./test/dir')).toBe('object')
    });
    it('debería mostrar el array de strings con las rutas de los archivos md si le mando ruta de directorio', () => {
        expect(goThroughDirectory('./test/dir')).toEqual(['C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\abc\\archivo.md', 'C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\dir\\prueba.md'])
    });
    it('debería mostrar el array de strings con las rutas de los archivos md si le mando ruta de archivo', () => {
        expect(goThroughDirectory('./test/abc.md')).toEqual(['C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\test\\abc.md'])
    })
});
