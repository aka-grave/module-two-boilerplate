import { assert } from 'chai';

// import { toggleSpinner } from 'helpers';

import renderSearchResult from 'js/renders/render_search_result';

describe('render search result', function(){
  const fakeUser = [
    { account_id: 42, nickname: "John Doe" },
    { account_id: 24, nickname: "John" }
  ];

  before(function(){
    document.body.innerHTML = '<div id="search-results"></div>'
  })

  it('render list', function() {
    renderSearchResult(fakeUser);

    const result = document.querySelectorAll('.js-nickname')
    assert.equal( result.length, 2)
    for (let i in fakeUser) {
      assert.equal(result[i].getAttribute('data-user-id'), fakeUser[i].account_id)
      assert.equal(result[i].innerHTML.trim(), fakeUser[i].nickname)
    }
  })

  after(function() {
    console.log(document.body.innerHTML)
  })
})
