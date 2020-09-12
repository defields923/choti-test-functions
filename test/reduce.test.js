const assert = require('assert');
const _reduce = require('../helpers/reduce.js');


describe('Reduce', () => {

  it('should add all the numbers together', () => {
    const set = [1, 1, 1, 3, 5, 7, 3, 5];

    const result = _reduce(set, (accumulator, value, index, collection) => accumulator + value);
    assert.equal(result, 26);
  });

  it('should concat all the strings', () => {
    const set = ['b', 'c', 'd'];

    const result = _reduce(set, (accumulator, value, index, collection) => { // USING BRACKETS HERE JUST TO MAKE IT EASIER FOR YOU TO NOTICE WHAT IS ON LINE 19
      return accumulator + value
    }, 'a');

    assert.equal(result, 'abcd');
  });

  it('should split up an array into two organized within the storage object', () => {
    const set = ['a', 1, 'b', 2, 'c', 'd'];

    const storage = {
      strings: [],
      numbers: []
    };

    const result = _reduce(set, (memo, value, index, collection) => { // USING BRACKETS HERE JUST TO MAKE IT EASIER FOR YOU TO NOTICE WHAT IS ON LINE 19
      if (typeof value === 'string') {
        memo.strings.push(value);
      } else if (typeof value === 'number') {
        memo.numbers.push(value)
      }

      return memo;
    }, storage);

    assert.equal(!Array.isArray(result), true);
    assert.equal(typeof result, 'object');

    assert.equal(result.strings.length, 4);
    assert.equal(result.numbers.length, 2);

    assert.equal(result.strings[0], 'a');
    assert.equal(result.strings[1], 'b');
    assert.equal(result.strings[2], 'c');
    assert.equal(result.strings[3], 'd');

    assert.equal(result.numbers[0], 1);
    assert.equal(result.numbers[1], 2);

  });
});

