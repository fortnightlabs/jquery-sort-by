;(function($) {
  $.fn.sortBy = function(fn, options) {
     var opts = $.extend({ reverse: false }, options);
     return this.map(function(i, el) { return [[fn(el, i), el]]; }).sort(function(a, b) {
       return (a[0] == b[0] ? 0 : (a[0] > b[0] ? 1 : -1)) * (opts.reverse ? -1 : 1);
     }).map(function(i, ar) { return ar[1]; });
   };
})(jQuery);
