//Change visibility in services
$('.btn-text-display').click(function() {
	var id = $(this).attr('id');
	//Selected element visible
	var elem_visible = ($('#txt-' + id + ':visible').length);
	//Any element visible
	var any_visible = ($('.text-display:visible').length);

	if(!elem_visible){
		//Check if any element is visible and hide it
		if(any_visible){
			$(".text-display").css("display","none");
		}
		//Display selected element
		$('#services-text').css('display','block');
		$('#txt-' + id).css('display','block');

		$('html, body').animate({
			scrollTop: $("#services-text").offset().top
		}, 1000);
	}else{
		$('html, body').animate({
			scrollTop: $("#services").offset().top
		}, 1000, function(){
			//Check if any element is visible and hide it
			if(any_visible){
				$(".text-display").css("display","none");
			}
			//Hide section
			$('#services-text').css('display','none');
		});
	}
});

//Hide services text
$('#btn-hide').click(function() {
	$('html, body').animate({
		scrollTop: $("	#services").offset().top
	}, 1000,function(){
		$(".text-display").css("display","none");
		$('#services-text').css('display','none');
	});
});

