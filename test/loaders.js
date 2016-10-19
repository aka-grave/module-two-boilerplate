import loadUsers from 'js/loaders/load_user'
import sinon from 'sinon';
import mockery from 'mockery';
import { assert } from 'chai';

describe('loaders', function () {
  const username = 'john';
  const fakeData = [1, 2, 3, 4];
  let loadUsers

  const renderSearchResult = sinon.stub();

  before(function() {
    mockery.enable();

    mockery.registerMock('../renders/render_search_result', { renderSearchResult });
    loadUsers = require('js/loaders/load_user').default
    console.log(renderSearchResult())
  })

  beforeEach(function () {
    document.body.innerHTML = '<input id="username" type="search" name="search" value="">'
    sinon.stub(window, 'fetch');
    window.fetch.returns(
      Promise.resolve({
        json() {
          return { status: 'ok', data: fakeData }
        }
      })
    )
  });

  it('should call fetch', function (done) {
    // console.log(loadUsers(username))
    loadUsers(username)
      .then(done)
      .catch(done)

    assert.isTrue(window.fetch.called)

    const [ url ] = window.fetch.firstCall.args;
    assert.equal(url, `http://188.166.73.133/wg-api/wot/account/list/?search=${username}`)
  })
})
