'use strict'

mainAccordion();

/*  main accordion ********************************************************************
 **************************************************************************************/

function mainAccordion() {
    $('[data-accordion="toggle"]').on('click', function(){
        var $this = $(this);

        if(!$this.parent().hasClass('section-open')){
            $this.parent().parent('[data-accordion="container"]').children('.section-open').children('[data-accordion="target"]').stop().slideUp(400);
            $this.parent().parent('[data-accordion="container"]').children('.section-open').removeClass('section-open');
            $this.siblings('[data-accordion="target"]').stop().slideToggle(400);
            $this.parent().addClass('section-open');
        } else {
            $this.parent().parent('[data-accordion="container"]').children('.section-open').children('[data-accordion="target"]').stop().slideUp(400);
            $this.parent().parent('[data-accordion="container"]').children('.section-open').removeClass('section-open');
        }

    });
}