$(document).ready(function () {

		var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");

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
				
 	      	//$(".slideshow-container").append('<div class="imgslide"><img src="'+ srcimg + '"><div class="text"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div></div>');
 	      	$(".slideshow-container").prepend('<div class="mySlides fade"><img src="'+ srcimg + '" style="width:100%"><h1>'+ titleimg +'</h1><div class="text">'+ descimg +'</div></div>');
// 	      	//$("#slideshow .tabs").append('<div class="tab-slide"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div>');
	      	$(".mySlides img").css({"height":height+"px"});
// 	      	$("#slideshow .slide img").css({"height":height+"px"});
 	   }

	 })
});