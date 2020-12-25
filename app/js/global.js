let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.75119884987794, lng: -73.98456921490443 },
    zoom: 8,
		styles: [
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#a31645"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "weight": "3.79"
            },
            {
                "visibility": "on"
            },
            {
                "color": "#ffecf0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#a31645"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#d89ca8"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#a31645"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "84"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d89ca8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fedce3"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
],
  });
}

$(function() {

    $(".store-item__stars").rateYo({
        starWidth: "16px",
        readOnly: true,
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        numStars: 5,
        starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">' +
                '<path fill="ccccce" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">' +
                '</path>' +
                '</svg>',
    });
    

	$('.blog-page-item__slider').slick({
		dots: false,
		arrows: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev">'+
		'<?xml version="1.0" encoding="UTF-8"?>'+
	'	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10pt" height="16pt" viewBox="0 0 10 16" version="1.1">'+
		'<g id="surface1">'+
		'<path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 1.078125 7.46875 L 7.152344 1.398438 C 7.445312 1.105469 7.921875 1.105469 8.210938 1.398438 L 8.921875 2.105469 C 9.214844 2.398438 9.214844 2.871094 8.921875 3.164062 L 4.109375 8 L 8.921875 12.835938 C 9.214844 13.128906 9.214844 13.601562 8.921875 13.894531 L 8.210938 14.605469 C 7.917969 14.898438 7.445312 14.898438 7.152344 14.605469 L 1.078125 8.53125 C 0.785156 8.238281 0.785156 7.761719 1.078125 7.46875 Z M 1.078125 7.46875 "/>'+
		'</g>'+
		'</svg>'+
		'</button>',
		nextArrow: '<button type="button" class="slick-next">'+
		'<?xml version="1.0" encoding="UTF-8"?>'+
'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10pt" height="16pt" viewBox="0 0 10 16" version="1.1">'+
'<g id="surface1">'+
'<path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 8.921875 8.53125 L 2.847656 14.605469 C 2.554688 14.894531 2.082031 14.894531 1.789062 14.605469 L 1.078125 13.894531 C 0.785156 13.601562 0.785156 13.128906 1.078125 12.835938 L 5.890625 8 L 1.078125 3.164062 C 0.785156 2.871094 0.785156 2.398438 1.078125 2.105469 L 1.789062 1.394531 C 2.082031 1.105469 2.554688 1.105469 2.847656 1.394531 L 8.921875 7.46875 C 9.214844 7.761719 9.214844 8.238281 8.921875 8.53125 Z M 8.921875 8.53125 "/>'+
'</g>'+
'</svg>'+
		'</button>',
});

$('.shop-blocks__inp').styler();

})






function toggleCheck () {
	let checked = document.createElement('span');
	checked.className = 'radio-checked__active'
	checked.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>`
	if (!this.children[0].classList.contains('radio-checked__active')) {
	this.prepend(checked);
	} else if (this.children[0].classList.contains('radio-checked__active')) {
		document.querySelector('.radio-checked__active').remove()
	}

}

Array.from(document.querySelectorAll('#radio-button')).forEach(item => {
	item.addEventListener('click', toggleCheck)
})

function pop (select, List) {

	function toggleList() {
		let dropDown = this.lastElementChild.children[0];
		dropDown.classList.toggle('dropdown--active')
	}

	function chooseItem() {
		let selectedItem = this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
		console.log(selectedItem)

		selectedItem.innerHTML = this.innerHTML
	}



	select.forEach(item => {
		item.addEventListener('click', toggleList)
	})

	List.forEach(item => {
		item.addEventListener('click', chooseItem)
	})
}

pop(Array.from(document.querySelectorAll('.select')),
Array.from(document.querySelectorAll('.dropdown__item')),
)



function isActiveList (isActive) {
	isActive.forEach(item => {
		item.addEventListener('click', function() {
			this.classList.toggle('is-active-item')
		})
	})
}

isActiveList(Array.from(document.querySelectorAll('#is-active-item')))