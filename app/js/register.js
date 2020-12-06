function switchLog (breadItem, sign, pages) {
	Array.from(sign).forEach((item, index) => {
			 item.addEventListener('click', function() {

					if(index == 1) {
							sign[1].classList.add('form-log__item--active')
							breadItem.innerHTML = 'Login'
							pages[1].classList.add('form-log__is-active')
							pages[0].style.transform = 'translateX(-1000%)'
					} else {
							sign[1].classList.remove('form-log__item--active')
							breadItem.innerHTML = 'Register'
							pages[1].classList.remove('form-log__is-active')
							pages[0].style.transform = 'translateX(0%)'
					}

					if(index == 0) {
							sign[0].classList.add('form-log__item--active')
							breadItem.innerHTML = 'Register'
							pages[0].classList.add('form-log__is-active')
							pages[1].style.transform = 'translateX(+1000%)'
					} else {
							sign[0].classList.remove('form-log__item--active')
							breadItem.innerHTML = 'Login'
							pages[0].classList.remove('form-log__is-active')
							pages[1].style.transform = 'translateX(0%)'
					}
			})
	})
}

switchLog(document.querySelector('.bread-crumbs__item--current'), document.querySelectorAll('.form-log__item'), document.querySelectorAll('.form-log'))