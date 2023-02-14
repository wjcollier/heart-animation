

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size+'px';
    heart.style.height = 20 + size+'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate('+ transformValue +'deg)';
    
    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    },1000)
});

/**
 * Custom cursor
 */

const cursors = document.querySelectorAll('[data-cursor]')
const hoveredElements = [
	...document.querySelectorAll('button'),
	...document.querySelectorAll('a'),
]

window.addEventListener('mousemove', function (event) {
	const posX = event.clientX
	const posY = event.clientY

	/** cursor dot position */
	cursors[0].style.left = `${posX}px`
	cursors[0].style.top = `${posY}px`

	/** cursor outline position */
	setTimeout(function () {
		cursors[1].style.left = `${posX}px`
		cursors[1].style.top = `${posY}px`
	}, 80)
})

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements, 'mouseover', function () {
	for (let i = 0, len = cursors.length; i < len; i++) {
		cursors[i].classList.add('hovered')
	}
})

/** remove hovered class when mouseout on hoverElements */
addEventOnElements(hoveredElements, 'mouseout', function () {
	for (let i = 0, len = cursors.length; i < len; i++) {
		cursors[i].classList.remove('hovered')
	}
})