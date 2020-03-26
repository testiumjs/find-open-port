'use strict';

const net = require('net');

const assert = require('assert');

const findPort = require('../');

describe('Finding an open port', () => {
  it('can listen on the returned port', done => {
    findPort().then(port => {
      const server = net.createServer();
      server.listen(port, () => {
        assert.strictEqual(server.address().port, port);
        server.close();
        done();
      });
    });
  });
});

describe('Checking if a port is available', () => {
  let port, server;
  before(async () => {
    port = await findPort();
  });
  after(() => server.close());

  it('returns an available port', async () => {
    const available = await findPort.isAvailable(port);

    assert.ok(available);
  });

  describe('after listening on the port', () => {
    before(done => {
      server = net.createServer();
      server.listen(port, done);
    });

    it('is no longer available', async () => {
      const available = await findPort.isAvailable(port);

      assert.ok(!available);
    });
  });
});
