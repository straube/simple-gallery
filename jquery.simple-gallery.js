/*!
 * jQuery Simple Gallery Plugin v2.0
 * https://github.com/straube/simple-gallery
 *
 * Copyright 2013, 2014 Gustavo Straube
 */
;(function ($) {

    $.fn.gallery = function (options) {

        return this.each(function () {
            var settings = $.extend({}, $.fn.gallery.defaults, options),
                $gallery = $(this),
                $images  = $gallery.find(settings.elements),
                loop,

                // Local functions
                show = function ($image) {
                    $images.removeClass('current').fadeOut().promise().done(function () {
                        $image.addClass('current').fadeIn();
                    });
                };

            $images.hide().first().show().addClass('current');

            $gallery.find('a').on('click', function (event) {
                var id = this.href.replace(/^[^#]*(#.*)?$/i, '$1');
                if (!id) {
                    return true;
                }
                event.preventDefault();
                window.clearInterval(loop);
                loop = null;
                show($images.filter(id));
            });

            if (settings.loop) {
                var interval = settings.interval * 1000;
                loop = window.setInterval(function () {
                    var prev = false,
                        $next = $images.filter(function () {
                            var aux = prev;
                            prev = $(this).is('.current');
                            return aux;
                        });
                    if ($next.length === 0) {
                        $next = $images.first();
                    }
                    show($next);
                }, interval);
            }
        });

    };

    $.fn.gallery.defaults = {
        elements : 'figure',
        loop     : true,
        interval : 5
    };

    $(document).ready(function () {
        $simple = $('.simple-gallery');
        if ($simple.length) {
            $simple.gallery($simple.data());
        }
    });

})(jQuery);