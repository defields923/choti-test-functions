const expect = require('chai').expect
const sinon = require('sinon');
const _once = require('../helpers/once.js');

describe('One', () => {


  it('should return a new function', () => {
    const testFunc = () => { };

    const memoizedTestFunc = _once(testFunc);

    expect(memoizedTestFunc).to.not.equal(testFunc);
  });

  it('calls the original function only once', () => {
    var callback = sinon.fake();
    var proxy = _once(callback);

    proxy();
    proxy();
    proxy();

    expect(callback.calledOnce).to.be.true;
  });

  it('should still return the value even if original function is only called once', () => {
    const testFunc = (number) => number + 8;
    var spy = sinon.spy(testFunc);
    var proxy = _once(spy);

    const result1 = proxy(5);
    const result2 = proxy(6);
    const result3 = proxy(7);

    expect(result1).to.equal(13);
    expect(result2).to.equal(13);
    expect(result3).to.equal(13);
  });
});

