const {customMap} = require('../customFunctions')

describe('customMap', () => {
  test('applies the callback function to each element in the array', () => {
    const numbers = [1, 2, 3];
    const double = x => x * 2;
    const result = customMap(numbers, double);
    expect(result).toEqual([2, 4, 6]);
  });

  test('returns an empty array when input is an empty array', () => {
    const emptyArray = [];
    const callback = x => x * 2;
    const result = customMap(emptyArray, callback);
    expect(result).toEqual([]);
  });

  test('works correctly with string arrays', () => {
    const strings = ['a', 'b', 'c'];
    const toUpperCase = str => str.toUpperCase();
    const result = customMap(strings, toUpperCase);
    expect(result).toEqual(['A', 'B', 'C']);
  });

  test('handles arrays with a single element', () => {
    const singleElement = [10];
    const addFive = x => x + 5;
    const result = customMap(singleElement, addFive);
    expect(result).toEqual([15]);
  });

  test('does not mutate the original array', () => {
    const numbers = [1, 2, 3];
    const double = x => x * 2;
    customMap(numbers, double);
    expect(numbers).toEqual([1, 2, 3]); // Ensure the original array is unchanged
  });

  test('handles complex callback functions', () => {
    const numbers = [1, 2, 3];
    const multiplyAndAdd = x => x * 2 + 1;
    const result = customMap(numbers, multiplyAndAdd);
    expect(result).toEqual([3, 5, 7]);
  });

  test('works with a callback that returns different types', () => {
    const numbers = [1, 2, 3];
    const stringify = x => `Number: ${x}`;
    const result = customMap(numbers, stringify);
    expect(result).toEqual(['Number: 1', 'Number: 2', 'Number: 3']);
  });
});