const {customFilter} = require('../customFunctions')

// Jest test suite for customFilter
describe('customFilter', () => {
  test('filters an array of numbers for values greater than 2', () => {
    const numbers = [1, 2, 3, 4, 5];
    const isGreaterThanTwo = (num) => num > 2;
    const result = customFilter(numbers, isGreaterThanTwo);
    expect(result).toEqual([3, 4, 5]); // Only values > 2
  });

  test('filters an array of strings containing a specific character', () => {
    const strings = ['apple', 'banana', 'cherry', 'date'];
    const containsA = (str) => str.includes('a');
    const result = customFilter(strings, containsA);
    expect(result).toEqual(['apple', 'banana', 'date']); // Only strings containing 'a'
  });

  test('filters based on index in the array', () => {
    const numbers = [10, 20, 30, 40, 50];
    const isEvenIndex = (_, index) => index % 2 === 0;
    const result = customFilter(numbers, isEvenIndex);
    expect(result).toEqual([10, 30, 50]); // Elements at indices 0, 2, and 4
  });

  test('returns an empty array when no elements match the condition', () => {
    const numbers = [1, 2, 3];
    const isGreaterThanFive = (num) => num > 5;
    const result = customFilter(numbers, isGreaterThanFive);
    expect(result).toEqual([]); // No values > 5
  });

  test('handles an empty array gracefully', () => {
    const emptyArray = [];
    const alwaysTrue = () => true;
    const result = customFilter(emptyArray, alwaysTrue);
    expect(result).toEqual([]); // Should return an empty array
  });

  test('does not mutate the original array', () => {
    const numbers = [1, 2, 3];
    const isOdd = (num) => num % 2 !== 0;
    customFilter(numbers, isOdd);
    expect(numbers).toEqual([1, 2, 3]); // Original array remains unchanged
  });

  test('filters an array of objects based on a property', () => {
    const objects = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
    ];
    const isActive = (obj) => obj.active;
    const result = customFilter(objects, isActive);
    expect(result).toEqual([
      { id: 1, active: true },
      { id: 3, active: true },
    ]);
  });

  test('handles complex conditions in the callback', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const complexCondition = (num, index) => num % 2 === 0 && index < 4;
    const result = customFilter(numbers, complexCondition);
    expect(result).toEqual([2, 4]); // Even numbers at indices less than 4
  });
});