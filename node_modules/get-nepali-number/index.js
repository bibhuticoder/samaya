'use strict';
var nums = {
  0: '०',
  1: '१',
  2: '२',
  3: '३',
  4: '४',
  5: '५',
  6: '६',
  7: '७',
  8: '८',
  9: '९'
};

module.exports = function (strNum) {
  var arrNumNe = strNum.toString().split('').map(function (ch) {
    if (ch === '.' || ch === ',') {
      return ch;
    }
    return nums[Number(ch)];
  });
  return arrNumNe.join('');
};
