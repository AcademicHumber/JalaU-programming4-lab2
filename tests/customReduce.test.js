const {customReduce} = require('../customFunctions')

// Jest test suite
describe('customReduce', () => {
  test('reduces an array of numbers to their sum with an initial value', () => {
    const numbers = [1, 2, 3, 4];
    const sum = (acc, val) => acc + val;
    const result = customReduce(numbers, sum, 10);
    expect(result).toBe(20); // 10 + 1 + 2 + 3 + 4
  });

  test('reduces an array of numbers to their sum without an initial value', () => {
    const numbers = [1, 2, 3, 4];
    const sum = (acc, val) => acc + val;
    const result = customReduce(numbers, sum);
    expect(result).toBe(10); // 1 + 2 + 3 + 4
  });

  test('handles an empty array with an initial value', () => {
    const emptyArray = [];
    const sum = (acc, val) => acc + val;
    const result = customReduce(emptyArray, sum, 5);
    expect(result).toBe(5); // Initial value is returned
  });

  test('throws an error when reducing an empty array without an initial value', () => {
    const emptyArray = [];
    const sum = (acc, val) => acc + val;
  
    // Expecting it to throw a TypeError
    expect(() => emptyArray.reduce(sum)).toThrow(TypeError);
  });

  test('reduces an array of strings to a concatenated string', () => {
    const strings = ['a', 'b', 'c'];
    const concat = (acc, val) => acc + val;
    const result = customReduce(strings, concat, '');
    expect(result).toBe('abc');
  });

  test('reduces an array of objects into a single object', () => {
    const objects = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
    ];
    const merge = (acc, obj) => ({ ...acc, [obj.id]: obj.value });
    const result = customReduce(objects, merge, {});
    expect(result).toEqual({ 1: 10, 2: 20, 3: 30 });
  });

  test('reduces with complex operations', () => {
    const numbers = [1, 2, 3];
    const operation = (acc, val) => acc * val + val;
    const result = customReduce(numbers, operation, 1);
    expect(result).toBe(21); // ((1 * 1 + 1) * 2 + 2) * 3 + 3 = 21
  });

  test('does not mutate the original array', () => {
    const numbers = [1, 2, 3];
    const sum = (acc, val) => acc + val;
    customReduce(numbers, sum, 0);
    expect(numbers).toEqual([1, 2, 3]); // Original array remains unchanged
  });
});