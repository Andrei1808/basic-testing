// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: 7, action: Action.Subtract, expected: 3 },
  { a: 50, b: 5, action: Action.Divide, expected: 10 },
  { a: 5, b: 5, action: Action.Multiply, expected: 25 },
  { a: 3, b: 4, action: Action.Exponentiate, expected: 81 },
  { a: 3, b: 'invalid', action: Action.Add, expected: null },
  { a: null, b: 7, action: Action.Add, expected: null },
  { a: 3, b: 3, action: null, expected: null },
  // continue cases for other actions
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  it.each(testCases)(
    'should return $expected, when $a $action $b',
    ({ a, b, action, expected }) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toEqual(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});
