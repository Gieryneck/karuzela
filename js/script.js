

$(function(){

	var carouselList = $('#carousel ul');


	setInterval(changeSlide, 3000);



	function changeSlide() {

		carouselList.animate({'margin-left':-600}, 500, moveFirstSlide)


		function moveFirstSlide(){

			var firstImage = carouselList.find('li:first');
			var lastImage = carouselList.find('li:last');

			$(lastImage).after(firstImage);

			carouselList.css('margin-left', '0');
		}
	}

});