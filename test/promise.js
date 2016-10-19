import { assert } from 'chai';

import sinon from 'sinon';

function promise(onSuccess) {
  return Promise.resolve(42).then(onSuccess);
}

describe('promise tests', function() {

  let callback = sinon.stub();

  it('promise works', function(done) {
    assert.equal(callback.called, false)
    callback()
    callback()
    assert.equal(callback.calledTwice, true)

    promise(callback).then(function() {
      assert.equal(callback.calledThrice, true);
      assert.equal(callback.calledWith(42), true)
      done()
    })

  })
})
