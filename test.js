'use strict';

var net = require('net');

var tap = require('tap');

var findPort = require('./');

tap.test('Finding an open port', function(t) {
  findPort().then(function(port) {
    var server = net.createServer();
    server.listen(port, function() {
      t.equal(port, server.address().port,
        'Can listen on the returned port');
      server.close();
      t.end();
    });
  });
});

tap.test('Checking if a port is available', function(t) {
  findPort().then(function(port) {
    findPort.isAvailable(port).then(function(available) {
      t.ok(available,
        'findPort() should return an available port');

      var server = net.createServer();
      server.listen(port, function() {
        findPort.isAvailable(port).then(function(available) {
          server.close();
          t.ok(!available,
            'after listening the port should no longer be available');
          t.end();
        });
      });
    });
  });
});
