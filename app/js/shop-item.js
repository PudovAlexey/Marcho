 $(function() {

	$('.shop-blocks__big').slick({
		asNavFor: '.shop-blocks__thumb',
		slidesToShow: 1,
		draggable: false,
		arrows: false,
		variableWidth: true,
		centerMode: true,
	});

	$('.shop-blocks__thumb').slick({
		asNavFor: '.shop-blocks__big',
		focusOnSelect: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
});

	$(".tabs__rating-stars").rateYo({
			starWidth: "16px",
			normalFill: "#ccccce",
			ratedFill: "#ffc35b",
			numStars: 5,
			starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">' +
							'<path fill="ccccce" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">' +
							'</path>' +
							'</svg>',
	});
 })

 function selectColor($item) {

	$item.forEach(element => {
		element.addEventListener('click', function() {
			$item.forEach(items => {items.classList.remove('shop-blocks__color--active')})
			this.classList.add('shop-blocks__color--active')
		})
	});

 }

 selectColor(Array.from(document.querySelectorAll('.shop-blocks__color')))