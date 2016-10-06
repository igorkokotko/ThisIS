$('.part1').mouseover(function() {
  $('.centered').css("visibility","visible");
});

$('.part1').mouseout(function() {
  $('.centered').css("visibility","hidden");
});

$('.part2').mouseover(function() {
  $('.next').css("visibility","visible");
});

$('.part2').mouseout(function() {
  $('.next').css("visibility","hidden");
});

$('.part3').mouseover(function() {
  $('.after').css("visibility","visible");
});

$('.part3').mouseout(function() {
  $('.after').css("visibility","hidden");
});

$('.part4').mouseover(function() {
  $('.fourth').css("visibility","visible");
});

$('.part4').mouseout(function() {
  $('.fourth').css("visibility","hidden");
});


$(document).ready(function(){
	$(function (){
		$("#back-top").hide();
	
		$(window).scroll(function (){
			if ($(this).scrollTop() > 100){
				$("#back-top").fadeIn();
			} else{
				$("#back-top").fadeOut();
			}
		});
		$("#back-top a").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
});



$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$('.btn').click(function(){
 alert("Don't Panic, just send me massage!");
});
