/*
 * jQuery 5-star rating plugin
 * Version 1.0
 * https://github.com/alvego/rating
 *
 * jQuery 5-star rating plugin (necessary for user interaction).
 *
 * Copyright (c) 2014 http://themext.com/rating
 * Licensed under the MIT and GPL licenses.
 */

(function( $ ){
  $.fn.rating = function( options ) {  
    var settings = $.extend( {
      'change' : null
    }, options);
    return this.each(function() {    
        var rating = 0;
        var prop = 'data-rating' 
        var control = $(this);
        control.attr('data-enabled','').hover(
            function(){
                rating = control.attr(prop);
                control.attr(prop, 0);
            },
            function(){ 
                control.attr(prop,  rating); 
            }
        ).click(function(){
            if (rating == control.attr(prop)) {
                return;
            }
            rating = control.attr(prop);
            if (null !== settings.change) {
                settings.change(parseInt(rating), function(result){
                    rating = Math.min(Math.max(parseInt(result), 0), 5);
                    control.attr(prop,  rating);
                });
            } 
        }).mousemove(function(e) { 
            $(this).attr(prop, Math.floor(e.offsetX * 5 / $(this).width()+1));
        });
    });
  };
})( jQuery );
