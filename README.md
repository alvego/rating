jQuery 5-star rating plugin
======

HTML5 CSS3 jQuery rating (5 stars) Only one span in CSS. Without images. Not need js in read-only mode.

Using

    <span id="rating1" data-rating="3"></span>

    $('#rating1').rating(
        {'change': function(selectedRating, callback){
            // async code (ajax request)
            //...
            // set new value (not necessarily)
            callback(selectedRating);
        }}
    );

