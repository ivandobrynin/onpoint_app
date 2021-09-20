const nextBtn = document.querySelector('.thirdScreen__list__buttons__next');
const prevBtn = document.querySelector('.thirdScreen__list__buttons__prev');
const showMoreBtn = document.querySelector('.thirdScreen__button');
const content = document.querySelector('.thirdScreen__content');
const listSlides = document.querySelectorAll('.thirdScreen__list__content');
const listDots = document.querySelectorAll('.thirdScreen__list__dot');
const modal = document.querySelector('.thirdScreen__content__modal');
const main = document.querySelector('.thirdScreen__content__main');
const closeBtn = document.querySelector('.thirdScreen__content__modal__close');
const thirdScreen = document.querySelector('.thirdScreen');

let listSlidesIndex = 0;
let moveIndex= 1;

for(let i = 1; i < listSlides.length; i++) {
	listSlides[i].style.display = 'none';
	listDots[i].style.backgroundColor = '#ffffff';
	listDots[i].style.border = '1px solid #fc6da9';
}

nextBtn.addEventListener('click', () => {
	// Проверяем, долистали ли мы до конца
	if (listSlidesIndex + 1 >= listSlides.length ) {
		return false;
	}
	//Скрываем лишнее (индекс = 0)
	listSlides[listSlidesIndex].style.display = 'none';
	listDots[listSlidesIndex].style.backgroundColor = '#ffffff';
	listDots[listSlidesIndex].style.border = '1px solid #fc6da9';
	//Меняем индекс, показываем нужное
	listSlidesIndex += moveIndex;
	listSlides[listSlidesIndex].style.display = '';
	listDots[listSlidesIndex].style.backgroundColor = '#fc6da9';
});

prevBtn.addEventListener('click', () => {
	// Проверяем, долистали ли мы до начала
	if (listSlidesIndex < 1 ) {
		return false;
	}
	//Скрываем лишнее 
	listSlides[listSlidesIndex].style.display = 'none';
	listDots[listSlidesIndex].style.backgroundColor = '#ffffff';
	listDots[listSlidesIndex].style.border = '1px solid #fc6da9';
	//Меняем индекс, показываем нужное
	listSlidesIndex -= moveIndex;
	listSlides[listSlidesIndex].style.display = '';

	listDots[listSlidesIndex].style.backgroundColor = '#fc6da9';
});

showMoreBtn.addEventListener('click', () => {
	content.style.borderRadius =`40px`;
	content.style.backgroundColor = `#ffffff`;
	thirdScreen.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
	main.style.display = 'none';
	modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
	content.style.borderRadius =`0`;
	content.style.backgroundColor = `transparent`;
	thirdScreen.style.backgroundColor = 'transparent';
	main.style.display = 'block';
	modal.style.display = 'none';
});