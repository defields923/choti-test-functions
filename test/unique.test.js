const assert = require('assert');
const helpers = require('../helpers/unique.js');


describe('Unique', () => {

  it('should return only unique values', () => {
    const startingList = [5, 4, 5, 7, 7, 7, 9, 'a', {}, {}, 'b', 5, 2, true, true];

    const result1 = helpers._uniqueWithFilter(startingList);
    const result2 = helpers._uniqueWithSet(startingList);

    assert.equal(result1.length, 10);
    assert.equal(result1[0], 5);
    assert.equal(result1[1], 4);
    assert.equal(result1[2], 7);
    assert.equal(result1[3], 9);
    assert.equal(result1[4], 'a');
    assert.equal(result1[result1.length - 1], true);

    assert.equal(result2.length, 10);
    assert.equal(result2[0], 5);
    assert.equal(result2[1], 4);
    assert.equal(result2[2], 7);
    assert.equal(result2[3], 9);
    assert.equal(result2[4], 'a');
    assert.equal(result2[result2.length - 1], true);
  });
});

