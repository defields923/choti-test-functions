const assert = require('assert');
const _findIndex = require('../helpers/findIndex.js');

describe('findIndex', () => {

  it('should find and return the INDEX of the first value that that satisfies the provided testing function (meaning, it returns true)', () => {
    const animals = ['mouse', 'dog', 'lion', 'cow', 'cat', 'pigeon'];

    const foundIndexOne = _findIndex(animals, (value) => value === 'cat');
    assert.equal(foundIndexOne, 4);

    const foundIndexTwo = _findIndex(animals, (value) => value === 'dog');
    assert.equal(foundIndexTwo, 1);

    const foundIndexThree = _findIndex(animals, (value) => value[value.length - 1] === 'n');
    assert.equal(foundIndexThree, 2);

    const foundIndexFour = _findIndex(animals, (value) => value !== 'mouse');
    assert.equal(foundIndexFour, 1);
  });

  it('should return -1 if value does not exist', () => {
    const animals = ['mouse', 'dog', 'lion', 'cow', 'cat', 'pigeon'];

    const foundIndex = _findIndex(animals, (value) => value === 'sunflower');
    assert.equal(foundIndex, -1);
  });

  it('should return the INDEX of the first object that satisfies the provided testing function', () => {
    const testObj1 = { a: 1 };
    const testObj2 = { a: 2 };
    const testObj3 = { a: 3 };
    const objects = [testObj1, testObj2, testObj3];

    const foundIndex = _findIndex(objects, (obj) => obj.a === 2);
    assert.equal(foundIndex, 1);
  });

  it('should return the INDEX of the first value that satisfies the provided testing function from assortment of types', () => {
    const randomArr = [];
    const randomFunc = function() {};
    const randomObj = { foo: 'bar' };
    const randomStuff = [45, 'hello', randomArr, true, randomFunc, randomObj];

    const foundIndex = _findIndex(randomStuff, (value) => value === randomFunc);
    assert.equal(foundIndex, 4);
  });
});

