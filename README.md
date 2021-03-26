[![nlm-chat](https://img.shields.io/badge/chat-http%3A%2F%2Fsignup.testiumjs.com%2F-F4D03F?logo=chat&logoColor=white)](http://signup.testiumjs.com/)
[![nlm-github](https://img.shields.io/badge/github-testiumjs%2Ffind--open--port%2Fissues-F4D03F?logo=github&logoColor=white)](https://github.com/testiumjs/find-open-port/issues)
![nlm-node](https://img.shields.io/badge/node-%3E%3D10.13-blue?logo=node.js&logoColor=white)
![nlm-version](https://img.shields.io/badge/version-2.0.3-blue?logo=version&logoColor=white)
# Find an Open Port [![Build Status](https://travis-ci.org/testiumjs/find-open-port.svg?branch=master)](https://travis-ci.org/testiumjs/find-open-port)

## Install

```bash
npm install --save find-open-port
```

## Usage

```js
const findPort = require('find-open-port');

findPort().then(port => {
  console.log(`You may now start listening on %d.${port}`);
});

findPort.isAvailable(80).then(available => {
  console.log(`Port 80 is ${available ? 'available' : 'not available'}`);
});
```
