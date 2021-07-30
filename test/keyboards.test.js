import Keyboard from "../utils/keyboard.js";
describe('buildKeys should', () => {
    test('return an array with length 27 of 27', () => {
        // Arrenge
        const length = 27;
        const keyboard = new Keyboard();
        // Act
        let keyboards = keyboard.keyboards;
        let result = Object.keys(keyboards).length;
        // Assert
        expect(result).toBe(length);
    });
});


describe('repeat should', () => {
    test('return 222 when i == 2 and j == 3', () => {
        // Arrenge
        let i = 2;
        let j = 3;
        let value = '222';
        const keyboard = new Keyboard();
        // Act
        let result = keyboard.repeatValues(i, j);
        // Assert
        expect(result).toBe(value);
    });

    test('return 44 when i == 4 and j == 2', () => {
        // Arrenge
        let i = 4;
        let j = 2;
        let value = '44';
        const keyboard = new Keyboard();
        // Act
        let result = keyboard.repeatValues(i, j);
        // Assert
        expect(result).toBe(value);
    });
});

describe('keyboardSequence should', () => {
    test('return 44 444 when value is hi', () => {
        // Arrenge
        const str = 'hi';
        const value = '44 444';
        const keyboard = new Keyboard();
        // Act
        let result = keyboard.keyboardSequence(str);
        // Assert
        expect(result).toBe(value);
    });
    
    test('return 999337777 when value is yes', () => {
        // Arrenge
        const str = 'yes';
        const value = '999337777';
        const keyboard = new Keyboard();
        // Act
        let result = keyboard.keyboardSequence(str);
        // Assert
        expect(result).toBe(value);
    });
    
    test('return 333666 666022 2777 when value is foo bar', () => {
        // Arrenge
        const str = 'foo bar';
        const value = '333666 666022 2777';
        const keyboard = new Keyboard();
        // Act
        let result = keyboard.keyboardSequence(str);
        // Assert
        expect(result).toBe(value);
    });
    
    test('return 4433555 555666096667775553 when value is hello world', () => {
        // Arrenge
        const str = 'hello world';
        const value = '4433555 555666096667775553';
        const keyboard = new Keyboard();
        // Act
        let result = keyboard.keyboardSequence(str);
        // Assert
        expect(result).toBe(value);
    });

    test('report Error when value contains a char that not is letter', () => {
        const value = 'h3ll0 w0rld';
        const keyboard = new Keyboard();
    
        expect(() => {
            keyboard.keyboardSequence(value)
        }).toThrow(Error);
    });

    test('report Error when empty value', () => {
        const value = '';
        const keyboard = new Keyboard();
    
        expect(() => {
            keyboard.keyboardSequence(value)
        }).toThrow(Error);
    });
});