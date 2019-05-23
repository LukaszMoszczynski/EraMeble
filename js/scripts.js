$(document).ready(function(){

//nav smooth scrolling
	$('.smooth').click(function(e) {

		e.preventDefault();

		const targetElement = $(this).attr('href');
		const targetPosition = $(targetElement).offset().top;
		$('html, body').animate({scrollTop: targetPosition -50}, 'slow');
	});

//autoclose mobile menu
    if($(window).width() < 992) {
	 $('.navbar-nav li').click(function(){ 
	   $('.navbar-toggler').click();
	  });
	}

//hamburger animation
	const $hamburger = $('.hamburger');
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass('is-active');
	});

	$('.marquee').marquee({
	    duration: 10000,
	    gap: 5,
	    delayBeforeStart: 0,
	    direction: 'left',
	    pauseOnHover: true,
	    duplicated: true
	});

//baner slider
	const speed = 5000;
	(function currencySlide(){
	    var currencyPairWidth = $('.images li:first-child').outerWidth();
	    $(".images").animate({marginLeft:-currencyPairWidth},speed, 'linear', function(){
                $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
        });
        requestAnimationFrame(currencySlide);
	})();

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav: false,
		dots: false,
		autoplay:true,
		autoplayTimeout:15000,
		autoplayHoverPause:true,
		smartSpeed:650,
		items:1
	});


	$(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function(){
        const savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function(){
        let minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = minRows + rows;
    });
    	

	$(window).scroll(function() {

	})


    function animateForm(firstClass, secondClass) {
        firstClass.removeClass('formFadeInAnimation');
        firstClass.addClass('formFadeOutAnimation');

        setTimeout(function(){
            firstClass.addClass('form-hide');
        }, 550);

        setTimeout(function(){
            secondClass.removeClass('formFadeOutAnimation');
            secondClass.addClass('formFadeInAnimation');
            secondClass.removeClass('form-hide');
        }, 600);    
    }

    $(function() {

        $('.form').on('submit', function(e) {

            e.preventDefault();

            var $form = $(this);       
                var dataToSend = $form.serializeArray();
                dataToSend = dataToSend.concat(
                    $form.map(function() {
                        return {"name": this.name, "value": this.value}
                    }).get()
                );

            var $submit = $form.find(':submit');
            $submit.prop('disabled', 1);

            $.ajax({
                url: $form.attr('action'),
                method: $form.attr('method'),
                data: dataToSend,
                success: function() {
                    animateForm( $('#form'), $('.send-succes') );
                },
                error : function() {
                    animateForm( $('#form'), $('.send-error') );
                },
                complete: function() {
                    $submit.prop('disabled', 0);
                }
            });            
        })
    });


    $('.form-message-button').on('click', function() {
        $('#form').trigger('reset');

        const formDiv = $(this).closest('div');

        animateForm(formDiv, $('#form'));
    });

})


