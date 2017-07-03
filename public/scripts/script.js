$(document).ready(function () {

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
				var width = 919;
				var height = 600;
				var autoplay = false;
				var autoTime = 3000;
				var tracker = 0,
  				slidewindow = document.querySelector("#slideshow #slidewindow"),
  				slides = document.querySelectorAll("#slideshow #slidewindow .imgslide"),
  				nbslide = document.querySelectorAll("#slideshow #slidewindow .slide"),
			    next = document.querySelector("#slideshow #controls #next"),
			    prev = document.querySelector("#slideshow #controls #prev"),
			    dots = document.querySelector("#slideshow #controls #dots"),
			    allDots = dots.getElementsByTagName("LI");

				 "use strict";

				  //autoplay true=on, false=off
				  var autoplay = true;

				  //slideshow autoplay timing in ms
				  var autoTime = 3000;

				  //Attach click events to next and prev
				  next.onclick = direction;
				  prev.onclick = direction;

				  //create a dot for each slide
				  for (var i = 0; i < slides.length; i++) {
				    var dot = document.createElement("LI");
				    dot.id = i;
				    dots.appendChild(dot);
				    dot.onclick = direction;

				  }

				  //run function on resize
				  window.onresize = updateAll;

				  //invoke updateAll
				  updateAll();

				  //update slide and container sizes
				  function updateAll() {

				    updateDots(tracker);

				    //set width of slidewindow to 100%
				    slidewindow.style.width = "100%";

				    //Get current width and height
				    var curWidth = slides[0].offsetWidth;
				    var curHeight = slides[0].offsetHeight;

				    //set current w/h of slidewindow to match slide
				    slidewindow.style.width = curWidth + "px";
				    slidewindow.style.height = curHeight + "px";

				    //set position of each slide
				    for (var i = 0; i < slides.length; i++) {
				      slides[i].style.left = (i * curWidth) + (tracker * curWidth) + "px";
				    }
				  }

				  function isNumber(obj) {
				    return !isNaN(parseFloat(obj));
				  }

				  //autoplay
				  if (autoplay == true) {
				    setInterval(function() {
				      if (tracker > 1 - slides.length) {
				        tracker -= 1;
				      } else if (tracker === 1 - slides.length) {
				        tracker = 0;
				      } else if (tracker < 0) {
				        tracker += 1;
				      } else if (tracker === 0) {
				        tracker = -slides.length + 1;
				      }
				      updateAll();
				    }, autoTime);
				  }

				  function direction(eventObject) {

				    //get id from target
				    var idVal = eventObject.target.id;

				    console.log(slides.length);

				    if (idVal === "next" && tracker > 1 - slides.length) {
				      tracker -= 1;
				    } else if (idVal === "next" && tracker === 1 - slides.length) {
				      tracker = 0;
				    } else if (idVal === "prev" && tracker < 0) {
				      tracker += 1;
				    } else if (idVal === "prev" && tracker === 0) {
				      tracker = -slides.length + 1;
				    } else if (isNumber(idVal)) {
				      tracker = -idVal;
				    }
				    updateAll();
				  }



				  //updateDots
				  function updateDots(n) {
				    n *= -1;
				    for (var i = 0; i < allDots.length; i++) {
				      allDots[i].className = "";
				    }
				   // allDots[n].className = "active";
				  }

				  //swipe event listeners
				  slidewindow.addEventListener('touchstart', handleTouchStart, false);
				  slidewindow.addEventListener('touchmove', handleTouchMove, false);

				  //swipe vars
				  var xDown = null;
				  var yDown = null;

				  //swipe handleTouchStart
				  function handleTouchStart(evt) {
				    xDown = evt.touches[0].clientX;
				    yDown = evt.touches[0].clientY;
				  };

				  //swipe handleTouchMove
				  function handleTouchMove(evt) {

				    if (!xDown || !yDown) {
				      return;
				    }

				    var xUp = evt.touches[0].clientX;
				    var yUp = evt.touches[0].clientY;

				    var xDiff = xDown - xUp;
				    var yDiff = yDown - yUp;

				    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*determine most significant*/
				      if (xDiff > 0) {
				        //swipe left - next
				        if (tracker > 1 - slides.length) {
				          tracker -= 1;
				        } else if (tracker === 1 - slides.length) {
				          tracker = 0;
				        }
				        updateAll();
				      } else {
				        //swipe right - prev
				        if (tracker < 0) {
				          tracker += 1;
				        } else if (tracker === 0) {
				          tracker = -slides.length + 1;
				        }
				        updateAll();
				      }
				    } else {
				      if (yDiff > 0) {
				        //swipe up
				      } else {
				        //swipe down
				      }
				    }

				    /* reset values */
				    xDown = null;
				    yDown = null;
				  };

	      	$("#slideshow #slidewindow").append('<div class="imgslide"><img src="'+ srcimg + '"><div class="text"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div></div>');
	      	//$("#slideshow .tabs").append('<div class="tab-slide"><span class="title">'+ titleimg +'</span><span class="description">'+ descimg +'</span></div>');
	      	$("#slideshow").css({"height":height+"px"});
	      	$("#slideshow .slide img").css({"height":height+"px"});
	   }
	 })

	var font = "Arial Black";
	var color = "#000";
	var thatInterval = 0;
	var cent = 100;
	var fontsize = 30;
	var padding = 10;


});

