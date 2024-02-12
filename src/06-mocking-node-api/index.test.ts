// Uncomment the code below and write your tests
import { doStuffByInterval, doStuffByTimeout, readFileAsynchronously } from '.';
import path, { join } from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';

describe('doStuffByTimeout', () => {
  const callback = jest.fn();
  const timeout = 5000;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    const spy = jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(callback, timeout);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    const spy = jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(callback, timeout);
    expect(spy).toBeCalledTimes(1);
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
  });
});

describe('doStuffByInterval', () => {
  const callback = jest.fn();
  const interval = 1000;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    const spy = jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, interval);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    jest.clearAllTimers();
    const spy = jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, interval);
    expect(spy).toBeCalled();
    jest.advanceTimersByTime(7000);
    expect(callback).toBeCalledTimes(7);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
    const spy = jest.spyOn(path, 'join');
    const pathToFile = './fileTest.txt';
    await readFileAsynchronously(pathToFile);
    expect(spy).toBeCalled();
    expect(join).toBeCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    jest.spyOn(path, 'join');
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    const pathToFile = './fileTest.txt';
    const returnedValue = await readFileAsynchronously(pathToFile);
    expect(returnedValue).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    const fileContent = 'Hello from test file';
    const pathToFile = './fileTest.txt';
    jest.spyOn(path, 'join').mockReturnValue('./fileTest.txt');
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest.spyOn(fsPromises, 'readFile').mockResolvedValue(fileContent);

    const returnedContent = await readFileAsynchronously(pathToFile);

    expect(returnedContent).toEqual(fileContent);
  });
});
