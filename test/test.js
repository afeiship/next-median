var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-median');

describe('next/median', function() {
  it('nx.median', function() {
    var arr1 = [23, 29, 20, 32, 23, 21, 33, 25];
    var arr2 = [10, 20, 20, 20, 30];
    var arr3 = [1, 10, 20, 20, 20, 30, 11, 12, 31, 12];

    assert.equal(nx.median(arr1), 24);
    assert.equal(nx.median(arr2), 20);
    assert.equal(nx.median(arr3), 16);
  });
});
