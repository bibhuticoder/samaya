# get-nepday-of-week [![Build Status](https://travis-ci.org/techgaun/get-nepday-of-week.svg?branch=master)](https://travis-ci.org/techgaun/get-nepday-of-week)

> Get nepali day of week from Date object or index (with 0 for Sunday and so on)


## Install

```
$ npm install --save get-nepday-of-week
```


## Usage

Note: If no argument is passed, the dayOfWeek for current day is returned.

```js
var getNepdayOfWeek = require('get-nepday-of-week');

getNepdayOfWeek(new Date('2015/10/24'))
//=>{ full: 'शनिवार', short: 'शनि', min: 'श' }

getNepdayOfWeek({"lang": "en"})
//=>{ full: 'Aaitabaar', short: 'Aaita', min: 'Aai' }

getNepdayOfWeek(2)
//=>{ full: 'मगलवार', short: 'मगल', min: 'म' }

getNepdayOfWeek(1, {"lang": "ne", "type": "short"})
//=>सोम

getNepdayOfWeek(-2)
//=>[RangeError: Expected the value of inp between 0-6]
```


## API

### getNepdayOfWeek([input], [options])

#### input

Type: `Date` or `Number`

Range: `0-6` if `Number` with 0 for Sunday/Aaitabaar and so on.

#### options

##### lang

Type: `string`
Default: `ne`

##### type

Type: `string`
Possible values: `full` (eg. Aaitabaar), `short` (eg. Aaita), `min` (eg. Aai)


## License

MIT © [techgaun](http://samar.techgaun.com)
