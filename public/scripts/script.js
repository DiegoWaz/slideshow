$(document).ready(function () {

		var slideIndex = 1;
		var timeout = 3000;
		var timeoutAnimate = 1500;
		showSlidesArrow(slideIndex);

        function play() {
            var slides = $(".mySlides");
                thatInterval = setInterval(function(){
                showSlidesArrow(slideIndex ++);
            }, timeout);
        }

        // Aller au slide suivant
        $(".next").click(function(){
            plusSlides(1);
            $("#container h1").animate({letterSpacing: "+=10px"},timeoutAnimate);
            $("#container h1").animate({letterSpacing: "-=10px"},timeoutAnimate);
        });

        // Aller au slide précédent
        $(".before").click(function(){
            plusSlides(-1);
            $("#container h1").animate({letterSpacing: "+=10px"},timeoutAnimate);
            $("#container h1").animate({letterSpacing: "-=10px"},timeoutAnimate);
        });

        // Mettre en pause lorsqu'on passe la souris par dessus le slideshow
        $(".slideshow-container").mouseover(function(){
            clearInterval(thatInterval);

            $(".slideshow-container").prepend('');
            $(".pause").css("display", "block");
	           
        });        

        // Mettre en pause lorsqu'on passe la souris par dessus le slideshow
        $(".slideshow-container").mouseout(function(){
            play();
            $(".pause").css("display", "none");
        });

        // Direction slide
        function plusSlides(n) {
            showSlidesArrow(slideIndex += n);
        }

        // Slide actuel
        function currentSlide(n) {
        	showSlidesArrow(slideIndex = n);
        }

        function showSlidesArrow(n) {

            var i;
            var slides = $(".mySlides");
            var dots = $(".dot");

            if (n > slides.length) {
                slideIndex = 1
            } else if (n < 1) {
                slideIndex = slides.length
            }

            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
            }

            for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += "active";
        }

		$.ajax({
			type: "POST",
			url: "https://www.skrzypczyk.fr/slideshow.php",
			data: { nom: "Diego"},
			}).done(function( msg ) {
	     	var ListSlide = jQuery.parseJSON(msg);

		    for (slide in ListSlide) {
			    var srcimg = ListSlide[slide].url;
				var titleimg  = ListSlide[slide].title;
				var descimg  = ListSlide[slide].desc;
				var id  = ListSlide.length;
				var height = 600;
				var width = 100;

	    		// Mettre en pause lorsqu'on passe la souris par dessus le slideshow
	            $(".slideshow-container").mouseover(function(){
	                clearInterval(thatInterval);
	            });

			    $(".slideshow-container").prepend('<div class="mySlides fade"><img src="'+ srcimg + '"><div id="container"><h1>'+ titleimg +'</h1><h2>'+ descimg +'</h2></div></div>');
	            $(".mySlides img").css({
	                "height": height+"px",
	                "width": width+"%",
	            });
	 	    }

	 	   	for (i = 0; i < ListSlide.length; i++) {
		   		$(".bulletpoint").append('<span class="dot"></span>');
		   		$(".none").remove();
			}
	 	})
    });
