$(document).ready(function(){
	
																		//menu sliding
	$('#navicon').click(function(){
		$(this).toggleClass('open');
		$('.menu').slideToggle(500);
		$('.menu').css('display', 'flex');
	});

																		//scroll to target
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1600);
	        $('#navicon').toggleClass('open');
			setTimeout(function(){
				$('.menu').slideToggle(420);
			}, 400)
	    }
	});

																		//form check
	$("form").on('submit', function(e){
    	e.preventDefault();
	});

	$('.enter_modal').on('click', function (){
		$('.modal_container').css('display', 'block');
		setTimeout(function(){
			$('.modal_container').css('margin-left', '0px');
		}, 100);
	})

	$('.check_form').on('click', function(){
		var count = 0;

		var name = document.querySelector('#myname');
		var nameSelected = name.options[name.selectedIndex].text;

		var city = document.querySelector('#city');
		var citySelected = city.options[city.selectedIndex].text;

		var fav = document.querySelector('#favorite');
		var favSelected = fav.options[fav.selectedIndex].text;

		if(nameSelected == "Maciek"){
			count += 1;
		};
		if(citySelected == "Warszawa"){
			count += 1;
		}
		if(favSelected == "Sass") {
			count += 1;
		}

		if(count >= 2){
			$('.result').text('Dobrze!');
			$('.result').css('color', 'green');
			setTimeout(function(){
				$('.modal_container').css('margin-left', '300%');
				setTimeout(function(){
					$('.modal_container').css('display', 'none');
				},300);
				$('.projects_blocked').animate({opacity: '0'}, 1200, function(){
					$('.projects_blocked').css('visibility', 'hidden');
				});
			}, 1500);
		} else {
			$('.result').text('Spróbuj jeszcze raz.');
			$('.result').css('color', 'red');
		}
	});
																		//skipping form button
	$('.skip_form').on('click', function(){
		setTimeout(function(){
			$('.modal_container').css('margin-left', '300%');
			setTimeout(function(){
				$('.modal_container').css('display', 'none');
			}, 300);
			$('.projects_blocked').animate({opacity: '0'}, 1200, function(){
				$('.projects_blocked').css('visibility', 'hidden');
			});
		}, 400);
	});

																		//main logo animation
	function loop() {
		if($("body").width() > 450){
			setTimeout(function(){
				$('#aciej').animate({width: '150px'}, 1000, function(){
						$('#alewski').animate({width: '275px'}, 1200, function(){
								setTimeout(function(){
										$('#aciej').animate({width: '0px'}, 800);
										$('#alewski').animate({width: '0px'}, 800, function(){
												$('#itam').animate({width: '160px'}, 1500, function(){
														setTimeout(function(){
																$('#itam').animate({width: '0px'}, 1200, loop())
														}, 6000);
												});
										});
										
								}, 2000);
						});
				});
			}, 2000);
		}else{
			setTimeout(function(){
				$('#aciej').animate({width: '150px'}, 1000, function(){
						$('#alewski').animate({width: '175px'}, 1200, function(){
								setTimeout(function(){
										$('#aciej').animate({width: '0px'}, 800);
										$('#alewski').animate({width: '0px'}, 800, function(){
												$('#itam').animate({width: '160px'}, 1500, function(){
														setTimeout(function(){
																$('#itam').animate({width: '0px'}, 1200, loop())
														}, 6000);
												});
										});
										
								}, 2000);
						});
				});
			}, 2000);

		}
	};
	loop();

});