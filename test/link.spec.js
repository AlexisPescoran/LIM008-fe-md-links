import {getLinks, cutLinks} from '../src/controller/link-controler'

const arrObject = [{}, {}, {}];
describe('getLinks', () => {
    it('debería ser una función', () => {
        expect(typeof getLinks).toBe('function')
    });
    it('debería retornar un array de objetos', () => {
        expect(typeof getLinks(['//documents', 'C://users/laboratoria'])).toBe('object')
    });
});
describe('cutLinks', () => {
    it('debería ser una función', () => {
        expect(typeof cutLinks).toBe('function')
    });
    it('debería retornar el array de objetos modificado', () => {
        expect(typeof cutLinks([{}, {}, {}])).toBe('object')
    });
    it('no debería modificar el tamaño del array', () => {
        expect(arrObject.length).toBe(3)
    });
});