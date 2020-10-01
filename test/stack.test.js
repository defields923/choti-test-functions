const expect = require('chai').expect
const { Stack } = require('../helpers/stack.js');

describe('Stack', () => {
  it('should have a put method', () => {
    const stack = new Stack();
    expect(stack.put).to.be.a('function');
  });

  it('should have a get method', () => {
    const stack = new Stack();
    expect(stack.get).to.be.a('function');
  });

  it('should not expose the stack', () => {
    const stack = new Stack();
    expect(stack.stack).to.be.a('undefined');
  });

  it('should not return something from put method', () => {
    const stack = new Stack();
    
    expect(stack.put(1)).to.be.an('undefined');
  });

  it('should accept an array of elements and put them into the stack', () => {
    const stack = new Stack();
    const testObj = {};
    
    stack.put([1, 2, testObj, 4]);
    expect(stack.get()).to.equal(4);
    expect(stack.get()).to.equal(testObj);
    expect(stack.get()).to.equal(2);
    expect(stack.get()).to.equal(1);
  });

  it('should accept a single element and put it into the stack', () => {
    const stack = new Stack();
    const testObj = {};
    
    stack.put(testObj);
    expect(stack.get()).to.equal(testObj);
    expect(stack.get()).to.equal(undefined);

    stack.put(0);
    expect(stack.get()).to.equal(0);
    expect(stack.get()).to.equal(undefined);
  });

  it('should not put something into array if no argument provided to put', () => {
    const stack = new Stack();
    const testObj = {};
    
    stack.put(testObj);
    stack.put();

    expect(stack.get()).to.equal(testObj);
  });

  it('should have length property that matches number of elements currently in the stack', () => {
    const stack = new Stack();
    console.log(stack);
    stack.put('a');
    console.log(stack);

    expect(stack.length).to.equal(1);
    stack.put('b');
    expect(stack.length).to.equal(2);
    stack.put('c');
    expect(stack.length).to.equal(3)

    const elementOnTop = stack.get();
    expect(elementOnTop).to.equal('c');
    expect(stack.length).to.equal(2)
  });

  it('should return undefined from get method if nothing in stack', () => {
    const stack = new Stack();
    
    // returns undefined no matter how many times we call
    Array(10).fill(null).forEach(() => {
      expect(stack.get()).to.equal(undefined);
    });
  });
});

