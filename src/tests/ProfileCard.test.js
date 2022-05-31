import { titleCase, mayorDeEdad } from '../components/ProfileCard';

describe('funciones dentro del componente ProfileCard', () => {

    describe('titleCase', () => {

        test('debe retornar un string', () => {
            const result = titleCase('Un valor');
            expect(typeof result).toBe('string');
        });

        test('debe retornar el string transformado', () => {
            expect(titleCase('en un lugar de la mancha')).toBe('En Un Lugar De La Mancha');
        });

        test('debe devolver un string vacío si recibe un string vacío', () => {
            expect(titleCase('')).toBe('');
        });

    });

    describe('mayorDeEdad', () => {

        test('debe devolver un boolean', () => {
            expect(typeof mayorDeEdad(19)).toBe('boolean');
        });

        test('si es mayor de edad devuelve true', () => {
            expect(mayorDeEdad(34)).toBeTruthy();
        });

        test('si la edad es 18 debe devolver true', () => {
            expect(mayorDeEdad(18)).toBeTruthy();
        });

        test('si la edad es menor de 18 devuelve false', () => {
            expect(mayorDeEdad(4)).toBeFalsy();
        });

        test('si la edad es negativa nos devuelve un null', () => {
            expect(mayorDeEdad(-21)).toBeNull();
        });

    })

});