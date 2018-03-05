$(document).ready(function () {

    $('.tlt').textillate({
        in: {
            effect: 'fadeInDown',
            shuffle: 'true',
            delay: '50',
            minDisplayTime: 1000,
            initialDelay: 0,
            callback: function () {
                $('.tlt').textillate('out')
            }
        },
        out: {
            effect: 'rotateOut',
            shuffle: 'true',
            minDisplayTime: 1000,
            initialDelay: 1000,
            delay: '75',
            callback: function () {
               $('.tlt').textillate('stop')
               $('.tlt')
               .html('Click for more bubbles!')
               .addClass("animated zoomIn")
               .css({
                   "font-size":"32px",
                   "font-family": "Montserrat, sans-serif",
            }).textillate({
                in: {
                    effect: 'rollIn',
                    shuffle: 'true',
                    delay: '50',
                    minDisplayTime: 5000,
                    initialDelay: 0}
            })
               
            },
        },
        
        loop: false,
    })


    $("#icon").mouseenter(() => {
        $(event.target).css({
            "opacity": "0.25",
            "transform": "translateY(-2px)",
        })
    })
    $("#icon").mouseleave(() => {
        $(event.target).css({
            "opacity": "1",
            "transform": "translateY(2px)",
        })
    })

    $(".aboutMe").click(() => {
        $("#statement")
            .addClass("animated fadeIn")
            .html("Olee is a full-stack software developer with a strong design background. In her previous career as an architect, the process of designing skyscrapers trained her to break down complex problems into their constituent parts. No one could build the projects alone, it was always the result of collaborative effort. Due to that, she grew to be an excellent team player.")
            .css({
                "font-size": "2.65vh",
                "text-shadow": "0px 0px rgba(0, 0,0, 0.25)",
                "font-family": "Montserrat, sans-serif",
                "top": "225px"
            })
        $("#olee").addClass("animated bounce").css("display", "block")
        $(".allworks").css({
            "display": "none",
        })
    })
    $(".works").click(() => {
        $("#statement")
            .html('')
        $(".allworks").css({
            "display": "flex",
            "z-index": "10"
        })
        $("#olee").addClass("animated bounce").css("display", "none")
    })

    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9
    });


});

