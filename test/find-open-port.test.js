'use strict';
var assert = require('assertive');

var findOpenPort = require('../');

describe('find-open-port', function () {
  it('is empty', function () {
    assert.deepEqual({}, findOpenPort);
  });
});
