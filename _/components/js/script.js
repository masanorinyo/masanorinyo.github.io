// // Create HTML5 elements for IE
// <!--[if lt IE 9]>
// document.createElement("article");
// document.createElement("section");
// document.createElement('video');

// <![endif]-->
//--------Jquery-----------//

//*navi*

$(function(){

	//if the window's width is for the large screen size, then the video src will be inserted.
	if(!($("header nav #navi-bars").is(":visible"))){
		$("header video").attr("src","video/background_video.mp4");
	}//video src insertion


	//navi menu toggles 
	$("#navi-bars").click(function(){
	
		$("nav .nav").fadeToggle("fast");	
	
	});//navi bar click

	
	//this code will invoke the modal box for skill list
	$("#skills .column.type-a li").click(function(){
		
		//if the menu icon is not shown (smaller screen size)
		if(!($("header nav #navi-bars").is(":visible"))){
			var open_box = $(this).children(".hidden-description");
		
			$("#blurred-effect").fadeIn(1000);
			$(this).children(".graph-container").css("opacity","0");
			
			$(this).children(".hidden-description").hide().css("left","0").fadeIn(1000);
			
			if($('#close_blurred_modal').is(":visible")){
				$('html').css("overflow", "hidden");	
			}	

			//close the modal box
			$("#close_blurred_modal").click(function(){
				$("#skills .graph-container").css("opacity","1");
				$("#blurred-effect").fadeOut("fast");
				$("#skills .hidden-description").css("left","-3000px");
				$('html').css("overflow", "visible");
			});//close_blurred_modal
		}
		

	});//skills .column li click event

	//this code will fade in and out the level box
	$("#portfolio .creation").hover(function(){
		$(this).find(".popup-slides,.edited").fadeIn("fast");
	},function(){
		$(this).find(".popup-slides,.edited").fadeOut("fast");
	});//level box fade in and out

	//back to button scrolls back to the top.
	$('html').on("click","#back-to-top",function(){
		
		$('html, body').animate({ scrollTop: 0 }, 800);	
		
	});//back to top click event

	
	$('header nav a,#intro p a').click(function(e){
		e.preventDefault();
		var position_id = $(this).attr("href");
		if(position_id=="#"){
			var top = 0;	
		}else{
			var top = $('div'+position_id+'').position().top;	
		}

		$('html, body').animate({ scrollTop:top}, 800);	
		
		return false;
	});
  	
  	//this code will change the navi menu to be a fixed menu bars after a certain scroll position
  	$(window).scroll(function(){
        var scrollTop = $("nav .nav").offset().top;
        
        if($(window).scrollTop() >= scrollTop){
            $('#back-to-top').fadeIn("slow");
            $('header nav .nav').addClass("fixed_nav");
        }

        if($(window).scrollTop() < scrollTop){
            $('#back-to-top').fadeOut("slow");
            $('header nav .nav').removeClass("fixed_nav");
        }
    });//fixed menu bar scroll event

  	
  	if(!($("header nav #navi-bars").is(":visible"))){
   		
		//once the window scroll position hits the certain place, this code will lbe invoked	
		//each area will fade in as the user scrolls down.
	    $(window).scroll(function(){
	        var scrollTop = $(window).height();
	        
			
	        if($(window).scrollTop() >= $("#about-me").offset().top-($("#about-me").height()*0.7)){
	            
	            $("#about-me").animate({"opacity":1},500);
	            
	        }

	        if($(window).scrollTop() >= $("#intro").offset().top-($("#intro").height()*0.7)){
	            $("#intro").css("opacity",1);

	            makes_animation("#intro .profile-picture","bounceInLeft",0);
	          
	        }


			if($(window).scrollTop() >= $("#skills").offset().top-($("#skills").height()*0.35)){
	            $("#skills").animate({"opacity":1},1000);
	        }

	        
	        if($(window).scrollTop() >=$("#portfolio").offset().top-($("#portfolio").height())){
	            $("#portfolio").animate({"opacity":1},500);
	        
	        }

	        if($(window).scrollTop() >= $("#education").offset().top-($("#education").height()*0.9)){
	            $("#education").animate({"opacity":1},500);
	         }

	      	if($(window).scrollTop() >=$("#work").offset().top-($("#work").height()*0.7)){
	            $("#work").animate({"opacity":1},1000);
	        }


	       if($(window).scrollTop() >=$("#contact").offset().top-($("#contact").height())){
	            $("#contact").animate({"opacity":1},1000);
	            
	        }
	        
	    });
	}else{
		$('.pages').css("opacity",1);
	}//scroll down -> each area shows up	
	
});//jquery close


function makes_animation(section,animation,time){

	setTimeout(function(){$(section).addClass("animated "+animation)},time);	

};