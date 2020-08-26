'use strict';

module.exports = function (inp, opts) {
  if (Object.prototype.toString.call(inp) === '[object Object]') {
    opts = inp;
    inp = undefined;
  }
  if (inp !== undefined && Object.prototype.toString.call(inp) !== '[object Date]' && typeof inp !== 'number') {
    return new TypeError('Expected a date object or a number');
  }

  if (typeof inp === 'number' && (inp < 0 || inp > 6)) {
    return new RangeError('Expected the value of inp between 0-6');
  }

  opts = opts || {};

  var data = {};
  data.ne = {
    full: ['आइतवार', 'सोमवार', 'मगलवार', 'बुधवार', 'बिहिवार', 'शुक्रवार', 'शनिवार'],
    short: ['आइत', 'सोम', 'मगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'],
    min: ['आ', 'सो', 'म', 'बु', 'बि', 'शु', 'श']
  };
  data.en = {
    full: ['Aaitabaar', 'Sombaar', 'Mangalbaar', 'Budhabaar', 'Bihibaar', 'Shukrabaar', 'Shanibaar'],
    short: ['Aaita', 'Som', 'Mangal', 'Budha', 'Bihi', 'Shukra', 'Shani'],
    min: ['Aai', 'So', 'Man', 'Bu', 'Bi', 'Shu', 'Sha']
  };

  var lang = 'ne';

  if (opts.lang === 'en') {
    lang = 'en';
  }

  if (inp === undefined) {
    inp = new Date().getDay();
  }

  if (Object.prototype.toString.call(inp) === '[object Date]') {
    inp = inp.getDay();
  }

  if (!opts.type) {
    var nepday = {
      full: data[lang].full[inp],
      short: data[lang].short[inp],
      min: data[lang].min[inp]
    };
    return nepday;
  }

  switch (opts.type) {
    case 'short':
      return data[lang].short[inp];
    case 'min':
      return data[lang].min[inp];
    default:
      return data[lang].full[inp];
  }

  // should never be here :D
  return null;
};
