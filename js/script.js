/*jslint browser: true */
/*global $ */

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function () {
    "use strict";
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
});

$('.text-panel').dotdotdot({
    ellipsis: '...',
    /* The HTML to add as ellipsis. */
    wrap: 'word',
    /* How to cut off the text/html: 'word'/'letter'/'children' */
    watch: true /* Whether to update the ellipsis: true/'window' */
});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
    "use strict";
    event.preventDefault();
    $(this).ekkoLightbox();
});
