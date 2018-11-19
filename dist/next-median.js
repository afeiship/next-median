(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.median = function(inArray) {
    var next;
    var mid = inArray.length / 2;
    var prev = parseInt(mid);

    if (prev === mid) {
      return inArray[mid];
    } else {
      next = Math.ceil(mid);
      return 0.5 * (inArray[prev] + inArray[next]);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.median;
  }
})();
