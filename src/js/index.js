import * as thirdScreenModule from './thirdScreen.js'

let position = 0;
const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const slide = document.querySelectorAll('.slider__item');
const itemWidth = container.clientWidth;
const movePosition = itemWidth;
const trackWidth = itemWidth * slide.length;
const firstScreenBtn = document.querySelector('.firstScreen__button__img');
const homenBtn = document.querySelector('.logo');

//Main full page slider
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
	const firstTouch = event.touches[0];
	x1 = firstTouch.clientX;
	y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
	if (!x1 || !y1) {
		return false;
	}
	if (event.target.classList.contains('secondScreen__descr') 
	|| event.target.classList.contains('secondScreen__descr__text')
	|| event.target.classList.contains('secondScreen__descr__scroll')
	|| event.target.classList.contains('secondScreen__descr__layer')) {
		return false;
	}
	let x2 = event.touches[0].clientX;
	let y2 = event.touches[0].clientY;
	let xDiff = x2 - x1;
	let yDiff = y2 -y1;
	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			//left
			if (Math.abs(position) < itemWidth) {
				return false;
			} else {
				leftMove();
			}
		} else {
			//right
			if (Math.abs(position) >= (trackWidth - itemWidth)) {
				return false;
			} else {
				rightMove();
				// Анимация сперматозоидов на 2м экране
				if(Math.abs(position) === 1024) {
					const sperm = document.querySelectorAll('.sperm');
					if (sperm.length > 0) {
						for(let i = 1; i < sperm.length; i++) {
							sperm[i].classList.add(`sperm_${i}`);
							sperm[i].classList.remove('sperm');
						}
					}
				}
			}
		}
	} else {
		if (yDiff > 0) {
			return false;
		} else {
			return false;
		}
	}

}

function leftMove() {
	position += movePosition;
	track.style.transform = `translateX(${position}px)`;
	x1 = null;
	y1 = null;
}

function rightMove() {
	position -= movePosition;
	track.style.transform = `translateX(${position}px)`;
	x1 = null;
	y1 = null;
}

// FirstScreen button click to slide on second 'Page'
firstScreenBtn.addEventListener('click', () => {
	rightMove();
	const sperm = document.querySelectorAll('.sperm');
	if (sperm.length > 0) {
		for(let i = 1; i < sperm.length; i++) {
			sperm[i].classList.add(`sperm_${i}`);
			sperm[i].classList.remove('sperm');
		}
	}
});

homenBtn.addEventListener('click', () => {
	position = 0;
	track.style.transform = `translateX(${position}px)`
});
