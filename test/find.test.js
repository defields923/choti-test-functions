const assert = require('assert');
const _find = require('../helpers/find.js');

describe('Find', () => {

  it('should find and return the first value that that satisfies the provided testing function (meaning, it returns true)', () => {
    const animals = ['mouse', 'dog', 'lion', 'cow', 'cat', 'pigeon'];

    const foundValueOne = _find(animals, (value) => value === 'cat');
    assert.equal(foundValueOne, 'cat');

    const foundValueTwo = _find(animals, (value) => value === 'dog');
    assert.equal(foundValueTwo, 'dog');

    const foundValueThree = _find(animals, (value) => value[value.length - 1] === 'n');
    assert.equal(foundValueThree, 'lion');

    const foundValueFour = _find(animals, (value) => value !== 'mouse');
    assert.equal(foundValueFour, 'dog');
  });

  it('should return undefined if value does not exist', () => {
    const animals = ['mouse', 'dog', 'lion', 'cow', 'cat', 'pigeon'];

    const foundValue = _find(animals, (value) => value === 'sunflower');
    assert.equal(foundValue, undefined);
  });

  it('should return the first object that satisfies the provided testing function', () => {
    const testObj1 = { a: 1 };
    const testObj2 = { a: 2 };
    const testObj3 = { a: 3 };
    const objects = [testObj1, testObj2, testObj3];

    const foundObj = _find(objects, (obj) => obj.a === 2);
    assert.equal(foundObj, testObj2);
  });

  it('should return the first value that satisfies the provided testing function from assortment of types', () => {
    const randomArr = [];
    const randomFunc = function() {};
    const randomObj = { foo: 'bar' };
    const randomStuff = [45, 'hello', randomArr, true, randomFunc, randomObj];

    const foundValue = _find(randomStuff, (value) => value === randomFunc);
    assert.equal(foundValue, randomFunc);
  });
});

