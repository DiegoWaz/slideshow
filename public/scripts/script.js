$(document).ready(function () {




		var slideIndex = 1;
		showSlidesArrow(slideIndex);

        play();

        function play() {
            var slides = $(".mySlides");
            if(slides.length <= slideIndex) {
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
				
 	      	/*//$(".slideshow-container").append('<div class="imgslide"><img src="'+ srcimg + '"><div class="text"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div></div>');
 	      	$(".slideshow-container").prepend('<div class="mySlides fade"><img src="'+ srcimg + '"style="width:100%"><div id="container"><h1>'+ titleimg +'</h1><h2>'+ descimg +'</h2></div></div>');
// 	      	//$("#slideshow .tabs").append('<div class="tab-slide"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div>');
	      	$(".mySlides img").css({"height":height+"px"});
// 	      	$("#slideshow .slide img").css({"height":height+"px"});*/
			

			// Mettre en pause lorsqu'on passe la souris par dessus le slideshow
        $(".slideshow-container").mouseover(function(){
            clearInterval(thatInterval);
        });

		$(".slideshow-container").prepend('<div class="mySlides fade"><img src="'+ srcimg + '"><div id="container"><h1>'+ titleimg +'</h1><h2>'+ descimg +'</h2></div></div>');
                  //$("#slideshow .tabs").append('<div class="tab-slide"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div>');
                  $(".mySlides img").css({
                      "height": height+"px",
                      "width": width+"%",
                  });


 	   }

 	   	for (i = 0; i < ListSlide.length; i++) {

	   		$(".bulletpoint").append('<span class="dot" onclick="currentSlide('+i+')"></span>');
	   		$(".none").remove();
	   	
		}

    

	 })

$(document).ready(function(){
        $("#container h1").animate({letterSpacing: "+=10px"},1500);
        $("#container h1").animate({letterSpacing: "-=10px"},1500);
        }),

        $(".next").click(function(){
        $("#container h1").animate({letterSpacing: "+=10px"},1500);
        $("#container h1").animate({letterSpacing: "-=10px"},1500);
        }),
        $(".before").click(function(){
        $("#container h1").animate({letterSpacing: "+=10px"},1500);
        $("#container h1").animate({letterSpacing: "-=10px"},1500);
    	});
    });

