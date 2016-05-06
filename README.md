# safedegrees

Add degree angles and get a result between 0 and 359.

## Installation

    npm install safedegrees

## Usage

```javascript
const safedegrees = require('safedegrees');

safedegrees(0, -10); // 350

safedegrees(270, 180); // 90

safedegrees(359, 2); // 1
```

## License

[MIT](LICENSE)
