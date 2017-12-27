$(document).ready(function () {

    $('.tlt').textillate({
        in: {
            effect: 'fadeInDown',
            shuffle: 'true',
            delay: '50',
            minDisplayTime: 1000,
            initialDelay: 0,
        },
        out: {
            effect: 'fadeInUp',
            shuffle: 'true',
            minDisplayTime: 1000,
            initialDelay: 1000,
        },

        loop: false
    });
    // $('.tlt').textillate();

    $("img").mouseenter(() => {
        $(event.target).css({
            "opacity": "0.25",
            "transform": "translateY(2px)",
        })
    })
    $("img").mouseleave(() => {
        $(event.target).css({
            "opacity": "1",
            "transform": "translateY(-2px)",
        })
    })

    $("img").click(() => {
        $("#statement")
            .addClass("animated slideInRight")
            .html("Olee is a full-stack software engineer with a strong design background as an architect creating physical spaces.")
            .css({
                "font-size": "3.5vh",
                "margin": "5vh",
                "padding": "5vh"
            })
    
        $("#olee").addClass("animated bounce").css("display", "block")
    
    
    })


});

