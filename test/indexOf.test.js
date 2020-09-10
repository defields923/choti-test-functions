const assert = require('assert');
const _indexOf = require('../helpers/indexOf.js');

describe('indexOf', () => {

  it('should find and return the INDEX of the first value that that matches the indexOf\'s second argument', () => {
    const animals = ['mouse', 'dog', 'dog', 'lion', 'lion', 'cow', 'cat', 'pigeon'];

    // PAY CLOSE ATTENTION TO WHAT IS BEING PASSED IN THIS TIME. IT'S NOT THE USUAL CALLBACK
    const foundIndexOne = _indexOf(animals, 'lion');
    assert.equal(foundIndexOne, 3);

    const foundIndexTwo = _indexOf(animals, 'pigeon');
    assert.equal(foundIndexTwo, 7);
  });

  it('should return -1 if value does not exist', () => {
    const animals = ['mouse', 'dog', 'lion', 'cow', 'cat', 'pigeon'];

    const foundIndex = _indexOf(animals, (value) => value === 'sunflower');
    assert.equal(foundIndex, -1);
  });

  it('should return the INDEX of the first object that satisfies the provided testing function', () => {
    const testObj1 = { a: 1 };
    const testObj2 = { a: 2 };
    const testObj3 = { a: 3 };
    const objects = [testObj1, testObj2, testObj3];

    const foundIndex = _indexOf(objects, testObj3);
    assert.equal(foundIndex, 2);
  });

  it('should return the INDEX of the first value that satisfies the provided testing function from assortment of types', () => {
    const randomArr = [];
    const randomFunc = function() {};
    const randomObj = { foo: 'bar' };
    const randomStuff = [45, 'hello', randomArr, true, randomFunc, randomObj];

    const foundIndex = _indexOf(randomStuff, randomFunc);
    assert.equal(foundIndex, 4);
  });
});

