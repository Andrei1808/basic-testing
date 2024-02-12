// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const add = { a: 1, b: 5, action: Action.Add };
    const result = simpleCalculator(add);
    expect(result).toBe(6);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const subtract = { a: 3, b: 7, action: Action.Subtract };
    const result = simpleCalculator(subtract);
    expect(result).toBe(-4);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const multiply = { a: 5, b: 5, action: Action.Multiply };
    const result = simpleCalculator(multiply);
    expect(result).toBe(25);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const divide = { a: 20, b: 4, action: Action.Divide };
    const result = simpleCalculator(divide);
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const exponentiate = { a: 5, b: 5, action: Action.Exponentiate };
    const result = simpleCalculator(exponentiate);
    expect(result).toBe(3125);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const input = { a: 5, b: 3, action: 'invalid' };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const input = [
      { a: 'invalid', b: 6, action: Action.Add },
      { a: 8, b: 'invalid', action: Action.Add },
      { a: 'invalid', b: 6, action: Action.Add },
      { a: null, b: 6, action: Action.Add },
      { a: null, b: null, action: Action.Add },
    ];
    const result = input.every((testCase) => {
      return simpleCalculator(testCase) === null;
    });
    expect(result).toBe(true);
  });
});
