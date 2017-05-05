$(document).ready(function () {
		$.ajax({
				type: "POST",
				url: "https://www.skrzypczyk.fr/slideshow.php",
				data: {
					nom: "Diego"
				},
			}).done(function( msg ) {
	     	var ListSlide = jQuery.parseJSON(msg);

	      	$( "slideshow" ).html('<div class="content"></div>');

			    for (slide in ListSlide) {

				    var srcimg = ListSlide[slide].url;
					var titleimg  = ListSlide[slide].title;
					var descimg  = ListSlide[slide].desc;
					var width = 919;
					var height = 600;

			      	$("#slideshow .content").append('<div class="slide"><img src="'+ srcimg + '"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div>');
			      	$("#slideshow").css({"width":width+"px", "height":height+"px"});
			      	$("#slideshow .slide img").css({"width":width+"px", "height":height+"px"});
			   }
			})

	var font = "Arial Black";
	var color = "#000";
	var thatInterval = 0;
	var cent = 100;
	var fontsize = 30;
	var padding = 10;
	var sec = 1500;
	var sec2 = 1800;

	function next(){
		$(".content").animate({
				"margin-left": "-"+cent+"%"
			}, sec,
			function(){
				$(".content .slide:last").after($(".content .slide:first"));
				$(".content").css("margin-left", "0px");
			}
		);

		$('#next').click(
			function(){
				if($('#play').attr("status") == "stop"){
					clearInterval(thatInterval);
					$('#play img').attr("src","public/img/circle-play.png");
					$('#play').attr("status","play");
				}
			}
		);
	}

	function before(){
		if($('#play').attr("status") == "stop"){
			clearInterval(thatInterval);
			$('#play img').attr("src","public/img/circle-play.png");
			$('#play').attr("status","play");
		}

    	$(".content .slide:first").before($(".content .slide:last"));

    	$(".content").css("margin-left", "-"+cent+"%");
		
		$( ".content" ).animate(
			{
				"margin-left": "0px"
			}, sec,
			function(){	}
		);			
	}


	function playAndPause(){

		$( ".content" ).mouseout(function() {
			thatInterval = setInterval(function(){
				next();
			}, sec2);

			$('#play img').attr("src","public/img/circle-pause.png");
		});

		$( ".content" ).mouseover(function() {
			clearInterval(thatInterval);
			$('#play img').attr("src","public/img/circle-pause.png");
		});
	}	

	// Slider avec les flèches gauche et droite
	 $(document).keydown(function(e){
	   
	   switch (e.which){
	   		case 37: 
	       		before();
	    	break;
	     	case 39: 
	       		next(); 
	       	break;
	   	}
	});

	next();
	playAndPause();

	$('#next').click(next);
	$('#before').click(before);
	$('#play').click(play);

});

