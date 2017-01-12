'use strict';

/*
The first parameter that is passed to mainAccordion is a boolean for the fade toggle option (true for fadeToggle and false for no fade).
The second parameter tells the function the initial state of the accordion. If all of the accordion
sections are closed pass in true. If the accordion loads with a section open pass false.
*/


mainAccordion(false, true);


function mainAccordion(fade, closed) {
    var fadetime = 400;
    var slidetime = 400;
    var $accordion = $('[data-accordion="toggle"]');
    var $page = $("body");
    var $scrollTo;
    //sets sections opacity for the slide fade toggle
    if (fade){
        $accordion.parent().children('[data-accordion="target"]').css({"opacity": "0"});
        $accordion.parent('.section-open').children('[data-accordion="target"]').css({"opacity": "1"});
    }
    //sets a class on the accordion container if all of the sections load closed
    if (closed){
        $accordion.parent().parent('[data-accordion="container"]').addClass('all-closed');
    }

    $accordion.on('click', function(){
        var $this = $(this);
        //code that runs if a section besides the one clicked on is currently open
        if(!$this.parent().hasClass('section-open')){
            // code used for slide fade
            if(fade){
                $this.parent().parent('[data-accordion="container"]').children('.section-open').children('[data-accordion="target"]').stop().animate({
                    opacity: 0
                }, fadetime).slideUp(slidetime);
                $this.parent().parent('[data-accordion="container"]').children('.section-open').removeClass('section-open');
                if ($this.parent().parent('[data-accordion="container"]').hasClass("all-closed")){
                    $this.siblings('[data-accordion="target"]').stop().slideDown(slidetime, function(){
                        $(this).animate({
                            opacity: 1
                        }, fadetime);
                    });
                    $this.parent().parent(".all-closed").removeClass("all-closed");
                } else {
                    setTimeout(function(){
                        $this.siblings('[data-accordion="target"]').stop().slideDown(slidetime, function(){
                            $(this).animate({
                                opacity: 1
                            }, fadetime);
                        });
                    }, fadetime);
                }
                $this.parent().addClass('section-open');
                 // checks if the top of the open section is out of the viewport. if out of view the section gets scrolled back into view.
                setTimeout(function(){
                    if(($(window).scrollTop()) > $this.offset().top){
                        $scrollTo = $this.offset().top - 100;
                        $page.animate({ scrollTop : $scrollTo }, (slidetime*2));
                    }
                },(slidetime + fadetime));
            // code used for slide without the fade animation
            } else {
                $this.parent().parent('[data-accordion="container"]').children('.section-open').children('[data-accordion="target"]').stop().slideUp(slidetime);
                $this.parent().parent('[data-accordion="container"]').children('.section-open').removeClass('section-open');
                $this.siblings('[data-accordion="target"]').stop().slideToggle(slidetime);
                $this.parent().addClass('section-open');
                setTimeout(function(){
                    if(($(window).scrollTop()) > $this.offset().top){
                        $scrollTo = $this.offset().top - 100;
                        $page.animate({ scrollTop : $scrollTo }, (slidetime*2));
                    }
                },(slidetime));
            }
        //code that runs if the section clicked on is currently open
        } else {
            if(fade){
                $this.parent().parent('[data-accordion="container"]').children('.section-open').children('[data-accordion="target"]').stop().animate({
                    opacity: 0
                }, fadetime).slideUp(slidetime);
                $this.parent().parent('[data-accordion="container"]').addClass("all-closed");
                $this.parent().parent('[data-accordion="container"]').children('.section-open').removeClass('section-open');
            } else {
                $this.parent().parent('[data-accordion="container"]').children('.section-open').children('[data-accordion="target"]').stop().slideUp(slidetime);
                $this.parent().parent('[data-accordion="container"]').children('.section-open').removeClass('section-open');
            }
        }
    });
}
