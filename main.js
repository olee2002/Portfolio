$(document).ready(function () {

    $('.tlt').textillate({
        in: {
            effect: 'fadeInDown',
            shuffle: 'true',
            delay: '50',
            minDisplayTime:1000,
            initialDelay: 0,
        },
        out: {
            effect: 'fadeInUp',
            shuffle: 'true',
            minDisplayTime:1000,
            initialDelay: 1000,
        },

        loop: false
    });
    // $('.tlt').textillate();




});

