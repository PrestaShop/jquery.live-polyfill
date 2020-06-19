/*!
  * https://github.com/PrestaShop/jquery.live-polyfill
  *
  * Released under the MIT license
  */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {

  var oldInit = $.fn.init

  $.fn.init = function(selector) {
    var args = Array.prototype.slice.call(arguments);

    if (typeof selector === 'string' && selector === '#') {
      // JQuery( "#" ) is a bogus ID selector, but it returned an empty set before jQuery 3.0
      migrateWarn('jQuery(\'#\') is not a valid selector');
      args[0] = [];
    }

    var ret = oldInit.apply(this, arguments);
    ret.selector = typeof selector === 'string' ? selector : '';

    return ret;
  };

  $.fn.init.prototype = $.fn;

  if (typeof $.fn.live == 'undefined' || !($.isFunction($.fn.live))) {
    $.fn.extend({
      live: function (types, data, callback) {
        if (this.selector) {
          $(document).on(types, this.selector, data, callback);
        }

        console.warn('jQuery.live() has been removed since jquery v1.9, please use jQuery.on() instead.');
        return this;
      }
    });
  }
}));
