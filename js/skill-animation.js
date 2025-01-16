const listSkills = document.querySelector('#listSkills');

const toggleCards = (event) => {
    const isCard = event.target.closest('[data-skill-card]');
    const isCross = event.target.closest('[data-cross]');
    const fadeBlock = document.querySelector('#fadeBlock');

    if (isCard) {
        isCard.classList.add('active');
        fadeBlock.classList.add('active');
        document.body.classList.add('block');
    }

    if (isCross) {
        const card = isCross.closest('[data-skill-card]');
        card.classList.remove('active');
        fadeBlock.classList.remove('active');
        document.body.classList.remove('block');
    }
}

listSkills.addEventListener('click', toggleCards);
