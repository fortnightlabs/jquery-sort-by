Sometimes the ruby-style `sort_by` sorting is easier to use than JavaScripts default `sort` implementation.

Here's a plugin that brings `sort_by` functionality to jQuery.

    $.fn.sortBy = function(fn, options) {
      var opts = $.extend({ reverse: false }, options);
      return this.map(function(i, el) { return [[fn(el, i), el]]; }).sort(function(a, b) {
        return (a[0] == b[0] ? 0 : (a[0] > b[0] ? 1 : -1)) * (opts.reverse ? -1 : 1);
      }).map(function(i, ar) { return ar[1]; });
    };

And here's how you use it.

    $trs.sortBy(function(tr) {
      return $(tr).find('.' + col).data('sort');
    }, { reverse: $th.is('.desc') }).appendTo($tbody);
