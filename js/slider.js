const reviews = [
    {
        name: 'Ivan',
        proffesion: 'Photographer',
        reviewText: 'I was very pleased with the services of web developer. He quickly created a website for me that works perfectly and looks modern. I was satisfied with the result.',
        srcAvatar: './img/reviers/revier-2-man.jpg',
    },
    {
        name: 'Lera',
        proffesion: 'barista',
        reviewText: 'Amazing work! The website is fast, responsive, and beautifully designed.',
        srcAvatar: './img/reviers/revier-3-women.jpg',
    },
    {
        name: 'Irina',
        proffesion: 'artist',
        reviewText: 'Highly professional and detail-oriented. Delivered the project on time with outstanding results.',
        srcAvatar: './img/reviers/revier-4-women.jpg',
    },
    {
        name: 'Kristina',
        proffesion: 'Photographer',
        reviewText: 'Great communication throughout the process. The final product exceeded all expectations!',
        srcAvatar: './img/reviers/revier-5-women.jpg',
    },
    {
        name: 'Artur',
        proffesion: 'welder',
        reviewText: 'Impressive coding skills and creativity. The functionality and design are exactly what we needed.',
        srcAvatar: './img/reviers/revier-1-man.jpg',
    }
]

const minMove = 20;
let slider = null;
let track = null;
let currentWidthMove = null;
let countSlide = 0;
let listControlButtons = null;
let startPoint = 0;
let endPoint = 0;
let currentMove = 0;

const creatorOfSlides = (arrayReviews, elementTrack) => {
    if (arrayReviews && arrayReviews.length > 0) {
        arrayReviews.forEach(element => {
            const slide = document.createElement('div');
            slide.className = 'slide';

            const slideHeaderElement = document.createElement('div');
            slideHeaderElement.className = 'slide__header';

            const avatarElement = document.createElement('img');
            avatarElement.className = 'slide__avatar';
            avatarElement.src = element.srcAvatar;

            const wrapperAvatarElement = document.createElement('div');
            wrapperAvatarElement.className = 'slide__wrapper-avatar';

            const wrapperInfoElement = document.createElement('div');
            wrapperInfoElement.className = 'slide__wrapper-info';

            const nameElement = document.createElement('p');
            nameElement.className = 'slide__name';
            nameElement.innerText = element.name;
            
            const proffesionElement = document.createElement('p');
            proffesionElement.className = 'slide__proffesion';
            proffesionElement.innerText = element.proffesion;

            const reviewElement = document.createElement('p');
            reviewElement.className = 'slide__review';
            reviewElement.innerText = element.reviewText;

            slide.append(slideHeaderElement);
            slide.append(reviewElement);

            slideHeaderElement.append(wrapperAvatarElement);

            wrapperAvatarElement.append(avatarElement);
            slideHeaderElement.append(wrapperInfoElement);

            wrapperInfoElement.append(nameElement);
            wrapperInfoElement.append(proffesionElement);

            elementTrack.append(slide);
        });
    }
}

const creatorOfArrows = (slider) => {
    const arrowLeft = document.createElement('button');
    const arrowRight = document.createElement('button');

    arrowLeft.className = 'arrow arrow--left';
    arrowRight.className = 'arrow arrow--right';

    arrowLeft.setAttribute('data-arrow', 'left');
    arrowRight.setAttribute('data-arrow', 'right');

    const spriteLeft = `
    <svg class="arrow__icon">
        <use xlink:href = "#arrowLeft"></use>
    </svg>
    `;
    const spriteRight = `
    <svg class="arrow__icon">
        <use xlink:href = "#arrowRight"></use>
    </svg>
    `;

    arrowLeft.insertAdjacentHTML('beforeend', spriteLeft);
    arrowRight.insertAdjacentHTML('beforeend', spriteRight);

    slider.prepend(arrowLeft);
    slider.prepend(arrowRight);
}

const creatorOfPagination = (slider, reviewsLength) => {
    const listButtons = document.createElement('div');
    listButtons.className = 'list-buttons';

    let i = 0;
    while (i < reviewsLength) {
        const buttonPagination = document.createElement('button');
        buttonPagination.className = 'button-pagination';

        if (i === 0) {
            buttonPagination.classList.add('active');
        }

        buttonPagination.setAttribute('data-pagination', 'button');
        listButtons.append(buttonPagination);
        
        i++;
    }

    slider.append(listButtons);
}

const motion = () => {
    track.style.transform = `translateX(-${countSlide * currentWidthMove}px)`;
    changeStyleButtonPagination();
}

const choosingDirection = (direction) => {
    if (direction === 'left') {
        countSlide = countSlide > 0 ? countSlide -= 1 : reviews.length - 1;
    } else if (direction === 'right') {
        countSlide = countSlide < reviews.length - 1 ?  countSlide += 1 : countSlide = 0;
    }
}

const changeStyleButtonPagination = () => {
    const activeButton = slider.querySelector('.button-pagination.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    listControlButtons[countSlide].classList.add('active');
}

const handlerEvent = (event) => {
    const isArrowLeft = event.target.closest('[data-arrow="left"]');
    const isArrowRight = event.target.closest('[data-arrow="right"]');
    const isButtonPagination = event.target.closest('[data-pagination="button"]');
    track = slider.querySelector('#track');

    if (isButtonPagination) {
        countSlide = Array.from(listControlButtons).indexOf(isButtonPagination);
    }

    if (isArrowLeft) {
        choosingDirection('left');
    }
    else if (isArrowRight) {
        choosingDirection('right');
    }
    motion();
}

const handlerMove = () => {
    currentMove = startPoint - endPoint;
    if (Math.abs(currentMove) > minMove) {
        currentMove > 0 ? choosingDirection('right') : choosingDirection('left');
        motion();
    }
}

const startPoindHandler = (e) => {
    startPoint = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
}

const endPoindHandler = (e) => {
    endPoint = e.type.includes("mouse") ? e.clientX : e.changedTouches[0].clientX;
    handlerMove();
}

const initialSlider = () => {
    const orientirSection = document.querySelector('#reviewsContent');

    slider = document.createElement('div');
    slider.id = 'slider';
    slider.className = 'slider';
    orientirSection.append(slider);
    
    const wrapperHidden = document.createElement('div');
    wrapperHidden.className = 'slider__wrapper-hidden';
    slider.append(wrapperHidden);

    
    track = document.createElement('div');
    track.id = 'track';
    track.className = 'slider__track';
    wrapperHidden.append(track);

    creatorOfSlides(reviews, track);
    creatorOfArrows(slider);
    creatorOfPagination(slider, reviews.length);
    listControlButtons = slider.querySelectorAll('.button-pagination');

    currentWidthMove = slider.querySelector('.slide').offsetWidth;

    slider.addEventListener('click', handlerEvent);
    slider.addEventListener('mousedown', startPoindHandler);
    slider.addEventListener('mouseup', endPoindHandler);
    slider.addEventListener('touchstart', startPoindHandler);
    slider.addEventListener('touchend', endPoindHandler);
}

initialSlider();
