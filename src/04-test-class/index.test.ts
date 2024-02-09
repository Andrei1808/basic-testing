// Uncomment the code below and write your tests
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';
import lodash from 'lodash';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const initialBalance = 1000;
    const newAccount = getBankAccount(initialBalance);
    expect(newAccount).toBeDefined();
    expect(newAccount.getBalance()).toEqual(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const initialBalance = 1000;
    const withdrawAmount = 1100;
    const newAccount = getBankAccount(initialBalance);
    expect(newAccount).toEqual(newAccount);
    expect(() => newAccount.withdraw(withdrawAmount)).toThrow(
      new InsufficientFundsError(initialBalance),
    );
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const initialBalance = 1000;
    const transferringAmount = 1100;
    const currAccount = getBankAccount(initialBalance);
    const newAccount = getBankAccount(0);
    expect(currAccount).not.toEqual(newAccount);
    expect(() => currAccount.transfer(transferringAmount, newAccount)).toThrow(
      new InsufficientFundsError(initialBalance),
    );
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const initialBalance = 1000;
    const transferringAmount = 900;
    const currAccount = getBankAccount(initialBalance);
    expect(() => currAccount.transfer(transferringAmount, currAccount)).toThrow(
      new TransferFailedError(),
    );
  });

  test('should deposit money', () => {
    // Write your test here
    const initialBalance = 1000;
    const depositAmount = 100;
    const newAccount = getBankAccount(initialBalance);
    newAccount.deposit(depositAmount);
    expect(newAccount.getBalance()).toEqual(initialBalance + depositAmount);
  });

  test('should withdraw money', () => {
    // Write your test here
    const initialBalance = 1000;
    const widthdrawAmount = 300;
    const newAccount = getBankAccount(initialBalance);
    expect(newAccount.getBalance()).toBeGreaterThan(widthdrawAmount);
  });

  test('should transfer money', () => {
    // Write your test here
    const initialBalance = 1000;
    const transferAmount = 300;
    const currAccount = getBankAccount(initialBalance);
    const newAccount = getBankAccount(0);
    currAccount.transfer(transferAmount, newAccount);
    expect(currAccount.getBalance()).toEqual(initialBalance - transferAmount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here

    lodash.random = jest.fn().mockReturnValue(1);
    const newAccount = getBankAccount(1000);
    const balance = await newAccount.fetchBalance();
    expect(typeof balance).toEqual('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const initialBalance = 1000;
    const newBalance = 100;
    lodash.random = jest.fn().mockReturnValue(newBalance);
    const newAccount = getBankAccount(initialBalance);
    await newAccount.synchronizeBalance();
    expect(newAccount.getBalance()).toEqual(newBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const newAccount = getBankAccount(100);
    lodash.random = jest.fn().mockReturnValue(0);

    expect(async () => await newAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
