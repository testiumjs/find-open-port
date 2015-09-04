# Find an Open Port

## Install

```bash
npm install --save find-open-port
```

## Usage

```js
var findPort = require('find-open-port');

findPort().then(port => {
  console.log('You may now start listening on %d.', port);
});

findPort.isAvailable(80).then(function(available) {
  console.log('Port 80 is ' + (available ? 'available' : 'not available'));
});
```
