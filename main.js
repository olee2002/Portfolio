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
            .html("Olee is a full-stack software developer with a strong design background. In her previous career as an architect, the process of designing skyscrapers trained her to break down complex problems into their constituent parts. No one could build the projects alone, it was always the result of collaborative effort. Due to that, she grew to be a team player.")
            .css({
                "font-size": "3vh",
            })
        $("#olee").addClass("animated bounce").css("display", "block")
    })
   
    
  
});

