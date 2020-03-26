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
