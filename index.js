jQuery.fn.extend({
  live: function (event, callback) {
    if (this.selector) {
      jQuery(document).on(event, this.selector, callback);
    }
    console.warn('jQuery.live() has been removed since jquery v1.9, please use jQuery.on() instead.');
    return this;
  }
});