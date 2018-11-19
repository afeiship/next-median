(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.median = function(inArray) {
    var mid = inArray.length / 2;
    var prev = parseInt(mid);
    var arr = inArray.slice(0).sort(function(a, b) {
      return a - b;
    });
    if (prev === mid) {
      return 0.5 * (arr[mid] + arr[mid - 1]);
    } else {
      return arr[prev];
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.median;
  }
})();
