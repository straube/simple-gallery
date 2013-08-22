(function ($) {

    var 
    gallery,
    images,
    links,
    loop,
    looping = false;

    function init() {
        gallery = $('.simple-gallery');
        images = gallery.find('figure').hide();
        links = gallery.find('a');

        images.first().show();
        links.first().addClass('active');

        links.on('click', function (event, looping) {
            var id = this.href.replace(/^[^#]*(#.*)?$/i, '$1');
            event.preventDefault();
            looping = looping || false;
            if (!looping && loop) {
                window.clearInterval(loop);
                loop = null;
            }
            if (id) {
                links.removeClass('active');
                $(this).addClass('active');
                images.fadeOut().promise().done(function () {
                    images.filter(id).fadeIn();
                });
            }
        });

        if (gallery.data('loop')) {
            loop = window.setInterval(function () {
                var next = links.filter('.active').next('a');
                if (next.length == 0) {
                    next = links.first();
                }
                next.trigger('click', [ true ]);
            }, 5000);
        }
    }

    if ($('.simple-gallery').length > 0) {
        init();
    } else {
        $(document).ready(function () {
            init();
        });
    }

})(jQuery);
