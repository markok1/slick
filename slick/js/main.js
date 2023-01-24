$( ".prospecting .left .whitebox .area" ).click(function() {
  if($(this).hasClass("activearea")){

  }else{
  	$(".prospecting .left .whitebox .area").removeClass("activearea");
  	$(this).addClass("activearea");

  	var idofslide = $(this).attr('id');
  	$(".prospecting .activesl").removeClass("activesl");
  	$("." + idofslide).addClass("activesl");
  }
});