const assert = require('assert');
const _some = require('../helpers/some.js');

// I'm just doing this to show you. Would be more easy to assign each of these funcs directly to a variable instead of a key/value pair in this object.
// ex: const isEqualToOrAbove50 = (number) => number >= 50;
const testFunctions = {
  isEqualToOrAbove50: (number) => number >= 50,
  isBelow50: (number) => number < 50,
  isDivisibleByTwo: (number) => number % 2 === 0,
};

describe('Some', () => {

  it('should return true if at least one of the array values satisfies the testing function, else false', () => {
    const set = [5, 35, 41, 13, 71, 27, 39];
    const result = _some(set, testFunctions.isEqualToOrAbove50); // Just passing the function in, not invoking it, let the _some function invoke it later
    assert.equal(result, true);

    const result2 = _some(set, testFunctions.isBelow50);
    assert.equal(result2, true);

    const result3 = _some(set, testFunctions.isDivisibleByTwo);
    assert.equal(result3, false);

    const result4 = _some(set, (value) => !testFunctions.isDivisibleByTwo(value)); // pay attention to this line, what is going on here?
    assert.equal(result4, true);
  });
});

