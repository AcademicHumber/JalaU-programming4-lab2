const {customForEach} = require('../customFunctions')

// Jest test suite for customForEach
describe('customForEach', () => {
  test('executes the callback once for each element in the array', () => {
    const numbers = [1, 2, 3];
    const mockCallback = jest.fn();

    customForEach(numbers, mockCallback);

    // Check that the callback was called the correct number of times (3)
    expect(mockCallback).toHaveBeenCalledTimes(3);

    // Check that the callback was called with the correct arguments
    expect(mockCallback).toHaveBeenCalledWith(1, 0, numbers);
    expect(mockCallback).toHaveBeenCalledWith(2, 1, numbers);
    expect(mockCallback).toHaveBeenCalledWith(3, 2, numbers);
  });

  test('does not call the callback for an empty array', () => {
    const emptyArray = [];
    const mockCallback = jest.fn();

    customForEach(emptyArray, mockCallback);

    // The callback should not be called
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('handles arrays with different data types', () => {
    const mixedArray = [1, 'hello', true];
    const mockCallback = jest.fn();

    customForEach(mixedArray, mockCallback);

    // Check that the callback was called with the correct arguments
    expect(mockCallback).toHaveBeenCalledWith(1, 0, mixedArray);
    expect(mockCallback).toHaveBeenCalledWith('hello', 1, mixedArray);
    expect(mockCallback).toHaveBeenCalledWith(true, 2, mixedArray);
  });

  test('handles arrays with objects correctly', () => {
    const objects = [{ id: 1 }, { id: 2 }];
    const mockCallback = jest.fn();

    customForEach(objects, mockCallback);

    // Check that the callback was called with the correct object
    expect(mockCallback).toHaveBeenCalledWith({ id: 1 }, 0, objects);
    expect(mockCallback).toHaveBeenCalledWith({ id: 2 }, 1, objects);
  });

  test('does not mutate the original array when applying the callback', () => {
    const numbers = [1, 2, 3];
    const mockCallback = jest.fn();

    customForEach(numbers, mockCallback);

    // Ensure the original array is not modified
    expect(numbers).toEqual([1, 2, 3]);
  });
});