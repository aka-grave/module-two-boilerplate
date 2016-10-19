import sinon from 'sinon';

import { assert } from 'chai';

import mockery from 'mockery';

describe('main', function() {
  const loadUsers = sinon.stub()

  before(function() {
    document.body.innerHTML = '<div id="search-results"></div><input id="username" value="test"><button id="search"></button>'

    mockery.enable()
    mockery.registerMock('./js/loaders/load_user', loadUsers)
    mockery.registerMock('bootstrap-sass/assets/stylesheets/_bootstrap.scss', {})
    mockery.registerMock('./main.css', {})

    require('../src/main.js')

    const DOMContentLoadedEvent = document.createEvent('Event')
    DOMContentLoadedEvent.initEvent('DOMContentLoaded', true, true)
    document.dispatchEvent(DOMContentLoadedEvent)
  })

  it('should call click handler on button click', function() {
    const buttonNode = document.body.querySelector('#search')
    const field = document.body.querySelector('#username')
    const value = field.value

    buttonNode.click()
    assert.isTrue(loadUsers.called)
  })
})
