import {isAbsolute, turnIntoAbsolute, goThroughDirectory, isFile} from '../src/lib/path-lib'

describe('isAbsolute', () => {
    it('debería ser una función', () => {
        expect(typeof isAbsolute).toBe('function')
    });
    it('debería retornar true si es absoluta', () => {
        expect(isAbsolute('C:/foo/..')).toBe(true)
    });
    it('debería retornar false si es ruta relativa', () => {
        expect(isAbsolute('fool/')).toBe(false)
    });
});

describe('turnIntoAbsolute', () => {
    it('debería ser una función', () => {
        expect(typeof turnIntoAbsolute).toBe('function')
    });
    it('debería retornar un string', () => {
        expect(typeof turnIntoAbsolute('bar/baz')).toBe('string')
    });
    it('si ingreso ruta relativa debe devolver ruta absoluta', () => {
        expect(turnIntoAbsolute('bar/baz')).toBe('C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\bar\\baz')
    });
    it('si ingreso ruta absoluta debe devolver lo mismo', () => {
        expect(turnIntoAbsolute('C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\bar\\baz')).toBe('C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\bar\\baz')
    });
});

describe('isFile', () => {
    it('debería ser una función', () => {
        expect(typeof isFile).toBe('function')
    })
    it('debería retornar un array de string', () => {
        expect(typeof isFile('./test/abc.md')).toBe('object')
    })
    it('debería retornar un array de string con la ruta del archivo', () => {
        expect(isFile('./test/abc.md')).toEqual(['./test/abc.md'])
    })
    it('debería retornar un array vacío si se ingresa como argumento un directorio', () => {
        expect(isFile('./test/dir')).toEqual([])
    })
})

describe('goThroughDirectory', () => {
    it('debería ser una función', () => {
        expect(typeof goThroughDirectory).toBe('function')
    });
    it('debería retornar un array de strings', () => {
        expect(typeof goThroughDirectory('./test/dir')).toBe('object')
    });
    it('debería mostrar el array de strings con las rutas de los archivos md', () => {
        expect(goThroughDirectory('./test/dir')).toEqual(['./test/dir/abc/archivo.md', './test/dir/prueba.md'])
    });
});
