const assert = require('assert');
const helpers = require('../helper.js');

// for example: helpers._forEach(...) 


// DONT TOUCH
describe('Array', () => {

  describe('forEach', () => {
    it('should iteratively add 1 to each number', () => {
      const numbers = [1, 2, 3];

      numbers.forEach((value, index, collection) => {
        collection[index] += 1;
      });
      
      assert.equal(numbers[0], 2);
      assert.equal(numbers[1], 3);
      assert.equal(numbers[2], 4);
    });

    it('should double each number with your custom function', () => {
      const numbers = [1, 2, 3];

      helpers._forEach(numbers, (value, index, collection) => {
        collection[index] += value;
      });
      
      assert.equal(numbers[0], 2);
      assert.equal(numbers[1], 4);
      assert.equal(numbers[2], 6);
    });
  });

  describe('map', () => {
    it('should return a new array of doubled values', () => {
      const numbers = [1, 2, 3];

      const newArr = numbers.map((value, index, collection) => {
        return value + value;
      });
      
      assert.equal(newArr[0], 2);
      assert.equal(newArr[1], 4);
      assert.equal(newArr[2], 6);
    });

    it('should return a new array of values added with their index', () => {
      const numbers = [1, 2, 3];

      const newArr = helpers._map(numbers, (value, index, collection) => {
        return value + index;
      });
      
      assert.equal(numbers[0], 1);
      assert.equal(numbers[1], 2);
      assert.equal(numbers[2], 3);

      assert.equal(newArr[0], 1);
      assert.equal(newArr[1], 3);
      assert.equal(newArr[2], 5);
    });
  });

  describe('filter', () => {
    it('should return a new array of filtered values', () => {
      const numbers = [1, 2, 3, 4, 5];

      const newArr = numbers.filter((value, index, collection) => {
        return /** only return even values */;
      });
      
      assert.equal(newArr[0], 2);
      assert.equal(newArr[1], 4);
    });

    it('should return a new array of matching strings', () => {
      const animals = ['cat', 'dog', 'cat', 'mouse', 'bird', 'dog'];

      const newArr = helpers._filter(animals, (value, index, collection) => {
        return value + index;
      });
      
      assert.equal(animals.length, 6);

      assert.equal(newArr.length, 2);
      helpers._forEach(newArr, (value) => {
        assert.equal(value, 'cat');
      });
    });
  });
});
///
///
///