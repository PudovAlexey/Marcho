$(function() {
	$(".js-range-slider").ionRangeSlider({
		prefix: "$",
		onStart: function (data) {
			$('.aside__range--from').text(data.from)
			$('.aside__range--to').text(data.to)
	},
		onChange: function (data) {
			$('.aside__range--from').text(data.from)
			$('.aside__range--to').text(data.to)
	},
	});
})

Array.from(document.querySelectorAll('.aside__size-round')).forEach(item => {
	if (item.children[0].classList.contains('radio-checked__active')) {

		item.addEventListener('click', function() {
		this.parentNode.style.color = '#fe4b62'

	})
} else {

	item.addEventListener('click', function() {
		this.parentNode.style.color = '#bcbcbc';
	})

}
})