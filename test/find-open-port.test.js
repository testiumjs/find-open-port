'use strict';
var net = require('net');

var assert = require('assertive');

var findPort = require('../');

describe('Finding an open port', function () {
  it('can listen on the returned port', function (done) {
    findPort().then(function (port) {
      var server = net.createServer();
      server.listen(port, function () {
        assert.equal(port, server.address().port);
        server.close();
        done();
      });
    });
  });
});

describe('Checking if a port is available', function () {
  var port;
  before(function () {
    return findPort().then(function (p) { port = p; });
  });

  it('returns an available port', function () {
    return findPort.isAvailable(port)
      .then(function (available) {
        assert.expect(available);
      });
  });

  describe('after listening on the port', function () {
    before(function (done) {
      var server = net.createServer();
      server.listen(port, done);
    });

    it('is no longer available', function () {
      return findPort.isAvailable(port)
        .then(function (available) {
          assert.expect(!available);
        });
    });
  });
});
