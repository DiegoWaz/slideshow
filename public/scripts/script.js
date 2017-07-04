$(document).ready(function () {

		var slideIndex = 1;

		showSlidesArrow(slideIndex);

		play();

		function play() {
			var slides = $(".mySlides");
			if(slideIndex <= slides.length) {
					thatInterval = setInterval(function(){
					showSlidesArrow(slideIndex ++);
				}, 5000);
			}

		}

		function pause(){
			clearInterval(thatInterval);
		}

		// Aller au slide suivant
		$(".next").click(function(){
	        plusSlides(1);
	    });

		// Aller au slide précédent
		$(".before").click(function(){
	        plusSlides(-1);
	    });

		// Mettre en pause lorsqu'on passe la souris par dessus le slideshow
		$(".slideshow-container").mouseover(function(){
	        clearInterval(thatInterval);
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
			}

			if (n < 1) {
				slideIndex = slides.length
			}

			for (i = 0; i < slides.length; i++) {
			  slides[i].style.display = "none";  
			}

			for (i = 0; i < dots.length; i++) {
			  dots[i].className = dots[i].className.replace(" active", "");
			}

			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
		}

		// Récupération des infos via l'url
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
				var height = 600;
				var width = 100;
					
	 	      	$(".slideshow-container").prepend('<div class="mySlides fade"><img src="'+ srcimg + '"><h1>'+ titleimg +'</h1><div class="text">'+ descimg +'</div></div>');
		      	//$("#slideshow .tabs").append('<div class="tab-slide"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div>');
		      	$(".mySlides img").css({
		      		"height": height+"px",
		      		"width": width+"%",
		      	});
	 	    }

	 	    // Ajout des bullets point
	 	   	for (i = 0; i < ListSlide.length; i++) {
		   		$(".bulletspoint").append('<span class="dot" onclick="currentSlide('+i+')"></span>');
		   		$(".none").remove();
			}
		})
});