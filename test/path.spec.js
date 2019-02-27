import {isAbsolute, turnIntoAbsolute, goThroughDirectory} from '../src/controller/path-controller'

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
    it('si ingreso ruta relativa debe devolver ruta absoluta', () => {
        expect(turnIntoAbsolute('bar/baz')).toBe('C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\bar\\baz')
    });
    it('si ingreso ruta absoluta debe devolver lo mismo', () => {
        expect(turnIntoAbsolute('C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\bar\\baz')).toBe('C:\\Users\\Laboratoria\\Documents\\Project_Markdown\\LIM008-fe-md-links\\bar\\baz')
    });
});
describe('goThroughDirectory', () => {
    it('debería ser una función', () => {
        expect(typeof goThroughDirectory).toBe('function');
    });
});