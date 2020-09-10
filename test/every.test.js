const assert = require('assert');
const _every = require('../helpers/every.js');
const _indexOf = require('../helpers/indexOf.js')


// !!!!!!!!!!! YOU NEED TO HAVE FINISHED WRITING YOUR _indexOf METHOD FIRST
describe('Every', () => {
  const set = [
    ['a', 'b'],
    ['b'],
    ['a', 'b'],
    ['a', 'b', 'c'],
    ['c', 'b', 1]
  ];

  it('should return true if EVERY one of the array values includes the string "b"', () => {
    
    const result = _every(set, (subArray) => subArray.includes('b'));
    assert.equal(result, true);
  });

  it('should return true if EVERY one of the array values includes the string "b" (using _indexOf)', () => {
    const result2 = _every(set, (subArray) => _indexOf(subArray, 'b') !== -1); // We're using your _indexOf method! Yay!
    assert.equal(result2, true);
  });

  it('should return false if even one of the array values does not include the string "a"', () => {
    const result3 = _every(set, (subArray) => subArray.includes('a'));
    assert.equal(result3, false);
  });

  it('should return true if EVERY one of the array values is truthy', () => {
    const result4 = _every(set, (subArray) => subArray.every((value) => Boolean(value))); // A loop inside a loop!!!! Insanity
    assert.equal(result4, true);
  });

  it('should return false if even one of the array values is not of type "string"', () => {
    const result5 = _every(set, (subArray) => subArray.every((value) => typeof value === 'string'));
    assert.equal(result5, false);
  });
});

