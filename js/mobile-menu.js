const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

const switchMenu = () => {
    menu.classList.toggle("open");
    burger.classList.toggle("active");
}

const closeMenu = (event) => {
    const isAnchorLink = event.target.closest('.anchor-link');

    if (isAnchorLink) {
        menu.classList.remove("open");
        burger.classList.remove("active");
    }
}

burger.addEventListener('click', switchMenu);
menu.addEventListener('click', closeMenu);

