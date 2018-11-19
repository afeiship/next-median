(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.median = function(inArray) {
    var length = inArray.length;
    var mid = length / 2;
    var prev, next;

    if (parseInt(mid) === mid) {
      return inArray[mid];
    } else {
      prev = Math.floor(mid);
      next = Math.ceil(mid);
      return 0.5 * (inArray[prev] + inArray[next]);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.median;
  }
})();
