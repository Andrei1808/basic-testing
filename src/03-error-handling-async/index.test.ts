// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    expect.assertions(1);
    const data = await resolveValue('some value');
    expect(data).toBe('some value');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    expect.assertions(1);
    expect(() => throwError('some error')).toThrow('some error');
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    expect.assertions(1);
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
    expect.assertions(1);
    expect(throwCustomError).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    expect.assertions(1);
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
