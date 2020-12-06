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



Array.from(document.querySelectorAll('#is-active')).forEach(item => {
	console.log(item)
		// 	item.children.forEach(child => {
		// child.addEventListener('click' function() {
		// 	this.classList.add('is-active-item')

		if (!this.classList.contains('is-active-item')) this.style.color = '#b3b3b3'
		})