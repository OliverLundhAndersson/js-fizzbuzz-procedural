const answer = require('../src/fizzbuzz');

describe('FizzBuzz Test Suite', () => {
    it('should have 15 elements', () => {
        expect(answer.length).toBe(15);
    });

    it('should correctly replace multiples of 3 and 5 with "FizzBuzz"', () => {
        expect(answer[14]).toBe('FizzBuzz'); // 15th element
    });

    it('should correctly replace multiples of 3 with "Fizz"', () => {
        expect(answer[2]).toBe('Fizz'); // 3rd element
        expect(answer[5]).toBe('Fizz'); // 6th element
        expect(answer[8]).toBe('Fizz'); // 9th element
        expect(answer[11]).toBe('Fizz'); // 12th element
    });

    it('should correctly replace multiples of 5 with "Buzz"', () => {
        expect(answer[4]).toBe('Buzz'); // 5th element
        expect(answer[9]).toBe('Buzz'); // 10th element
    });

    it('should correctly replace multiples of both 3 and 5 with "FizzBuzz"', () => {
        expect(answer[14]).toBe('FizzBuzz'); // 15th element
    });

    it('should correctly leave other numbers unchanged', () => {
        expect(answer[0]).toBe(1); // 1st element
        expect(answer[1]).toBe(2); // 2nd element
        expect(answer[3]).toBe(4); // 4th element
        expect(answer[6]).toBe(7); // 7th element
        expect(answer[7]).toBe(8); // 8th element
        expect(answer[10]).toBe(11); // 11th element
        expect(answer[12]).toBe(13); // 13th element
        expect(answer[13]).toBe(14); // 14th element
    });
});