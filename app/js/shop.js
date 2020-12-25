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

Array.from(document.querySelectorAll('.aside__size-round')).forEach(item=> {
	item.addEventListener('click', function() {
		item.parentElement.style.color = '#fe4b62';
		if (!item.children[0].classList.contains('radio-checked__active')) item.parentElement.style.color = '#9c9c9c';
	})

})

Array.from(document.querySelectorAll('.aside__category-item')).forEach(item=> {
	item.addEventListener('click', function() {
		this.classList.toggle('active-item')
	})
})

function switchstyle($buttons, $items) {
	$buttons.forEach((item, index) => {
		item.addEventListener('click', function() {
			$buttons.forEach(items => items.classList.remove('picked'))
			item.classList.add('picked');

			this.classList.add('picked')
			if (index == 0) {
				$items.classList.remove('store-item__items--line')
			} else {
				$items.classList.add('store-item__items--line')
			}
		})
	})
}

switchstyle(
	Array.from(document.querySelectorAll('.shop__buttons-icon')) , 
document.querySelector('.store-item__items'),
)