var button, more, height, visible;

more = document.querySelector('.more');

// get height of .more element
height = more.clientHeight;

// console.log(height)

//hide content with css
more.style.cssText = 'max-height:0; overflow:hidden';

button = document.createElement('button');
button.classList.add('show-more');
button.innerHTML = 'Read more...';

//insert button after .more element

more.parentNode.insertBefore(button, more.nextSibling);

button = document.querySelector('.show-more');

visible = false;

button.addEventListener ('click', function() {
	if (!visible) {
	button.innerHTML = 'Read less...';
	more.style.transition = '1s';
	more.style.maxHeight = height +'px';}
	else {
		button.innerHTML = 'Read more...';
		more.style.maxHeight = 0;
	}

	//Alternate between false and true

	visible = !visible;
});