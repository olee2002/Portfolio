$(document).ready(function () {

    $('.tlt').textillate({
        in: {
            effect: 'fadeInDown',
            shuffle: 'true',
            delay: '50',
            minDisplayTime: 500,
            initialDelay: 0,
        },
        out: {
            effect: 'fadeInUp',
            shuffle: 'true',
            minDisplayTime: 500,
            initialDelay: 500,
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
    $(".aboutMe").click(() => {
        $("#statement")
            .addClass("animated slideInRight")
            .html("Olee is a full-stack software developer with a strong design background. In her previous career as an architect, the process of designing skyscrapers trained her to break down complex problems into their constituent parts. No one could build the projects alone, it was always the result of collaborative effort. Due to that, she grew to be a team player.")
            .css({
                "font-size": "2.75vh",
                "text-shadow":"0.5px 0.5px rgba(0, 0,0, 0.25)"
            })
        $("#olee").addClass("animated bounce").css("display", "block")
        $(".allworks").css({
            "display": "none",
        })
    })

    $(".works").click(() => {
        $("#statement")
            .addClass("animated slideInRight")
            .html('')
            $(".allworks").css({
                "display": "flex",
                "z-index": "10"
            })
            $("#olee").addClass("animated bounce").css("display", "none")
    })
    
  
});

