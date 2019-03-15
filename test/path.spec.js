import {goThroughDirectory} from '../src/path-lib'

describe('goThroughDirectory', () => {
    it('debería ser una función', () => {
        expect(typeof goThroughDirectory).toBe('function')
    });
    it('debería retornar un array de strings', () => {
        expect(typeof goThroughDirectory(`${process.cwd()}\\test\\dir`)).toBe('object')
    });
    it('debería mostrar el array de strings con las rutas de los archivos md si le mando ruta de directorio', () => {
        expect(goThroughDirectory(`${process.cwd()}\\test\\dir`)).toEqual([`${process.cwd()}\\test\\dir\\abc\\archivo.md`, `${process.cwd()}\\test\\dir\\prueba.md`])
    });
    it('debería mostrar el array de strings con las rutas de los archivos md si le mando ruta de archivo', () => {
        expect(goThroughDirectory(`${process.cwd()}\\test\\abc.md`)).toEqual([`${process.cwd()}\\test\\abc.md`])
    })
});

