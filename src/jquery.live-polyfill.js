/*!
 * jquery.live-polyfill 1.0.3
 *
 * https://github.com/PrestaShop/jquery.live-polyfill
 *
 * Released under the MIT license
*/;(function (factory) {
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
  if (typeof $.fn.live == 'undefined' || !($.isFunction($.fn.live))) {
    $.fn.extend({
      live: function (event, callback) {
        if (this.selector) {
          $(document).on(event, this.selector, callback);
        }
        console.warn('jQuery.live() has been removed since jquery v1.9, please use jQuery.on() instead.');
        return this;
      }
    });
  }
}));
