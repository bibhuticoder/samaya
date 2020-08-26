# get-nepali-number [![Build Status](https://travis-ci.org/techgaun/get-nepali-number.svg?branch=master)](https://travis-ci.org/techgaun/get-nepali-number)

> Convert any english numeral to Nepali number


## Install

```
$ npm install --save get-nepali-number
```


## Usage

```js
var getNepaliNumber = require('get-nepali-number');

getNepaliNumber('100');
//=> '१००'

getNepaliNumber('200.05');
//=> '२००.०५'

getNepaliNumber('1,000,365.50');
//=> '१,०००,३६५.५०'
```


## API

### getNepaliNumber(num)

#### num

Type: `number` or `string`

provide a number to convert to Nepali numeral

## License

MIT © [techgaun](http://samar.techgaun.com)
