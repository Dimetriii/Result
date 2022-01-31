let menuBtn = document.querySelector('.cross-btn');
let menu = document.querySelector('.menu');
let opac1 = document.querySelector('.opaciti1');
let opac2 = document.querySelector('.opaciti2');
let opac3 = document.querySelector('.opaciti3');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    opac1.classList.toggle('active');
    opac2.classList.toggle('active');
    opac3.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navigation-item');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu(event) {
    if (event.target.classList.contains('navigation-item')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        opac1.classList.remove('active');
        opac2.classList.remove('active');
        opac3.classList.remove('active');
    }
}

// portfolio#3
// WINTER
const portfolioBtnWinter = document.querySelector('.button-items__winter');
const portfolioImagesWinter = document.querySelectorAll('.block-imegs__imeg');

portfolioBtnWinter.addEventListener('click', () => {
    portfolioImagesWinter.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});

// Spring
const portfolioBtnSpring = document.querySelector('.button-items__spring');
const portfolioImagesSpring = document.querySelectorAll('.block-imegs__imeg');

portfolioBtnSpring.addEventListener('click', () => {
    portfolioImagesSpring.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
});

// Summer
const portfolioBtnSummer = document.querySelector('.button-items__summer');
const portfolioImagesSummer = document.querySelectorAll('.block-imegs__imeg');

portfolioBtnSummer.addEventListener('click', () => {
    portfolioImagesSummer.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
});

// Autumn
const portfolioBtnAutumn = document.querySelector('.button-items__autumn');
const portfolioImagesAutumn = document.querySelectorAll('.block-imegs__imeg');

portfolioBtnAutumn.addEventListener('click', () => {
    portfolioImagesAutumn.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
});




const whiteTheme = document.querySelector('.clickIcon');
const whiteBody = document.querySelector('.background');
const headerColor1 = document.querySelector('.white-theme-nav1');
const headerColor2 = document.querySelector('.white-theme-nav2');
const headerColor3 = document.querySelector('.white-theme-nav3');
const headerColor4 = document.querySelector('.white-theme-nav4');
const headerColor5 = document.querySelector('.white-theme-nav5');
const logoColor = document.querySelector('.main-block__logo');
const headBackImeg = document.querySelector('.background-imeg');
const enColor = document.querySelector('.main-block__navigation_enVSru_color');
const ruColor1 = document.querySelector('.main-block__navigation_enVSru');
const ruColor2 = document.querySelector('.ru');
const titleColor = document.querySelector('.block-title__title');
const aboutColor = document.querySelector('.block-title__about');
const btnTitle = document.querySelector('.block-title__submit');
const titleDarkSkills = document.querySelector('.block-Skills__title');
const darkSkills = document.querySelectorAll('.block-Skills_colot-text');
const titleDarkPortfolio = document.querySelector('.block-Portfolio__title');
const darkLineTitile = document.querySelectorAll('.dark-line');
const titleDarkVideo = document.querySelector('.block-Video__title');
const titleDarkPrice = document.querySelector('.block-Price__title');
const priceDarkColor = document.querySelectorAll('.price-dark-color');
const contDarkColor = document.querySelector('.cont-dark-color');
const footDate = document.querySelector('.block-footer__date__date-of-creation');
const footDarkColor = document.querySelector('.foot-dark-color-git');
const footDarkColorRS = document.querySelector('.block-footer__rs');
const footDarkIconInst = document.querySelector('.block-footer_inst-logo');
const foorDarkIconFace = document.querySelector('.block-footer_face-logo');
const foorDarkIconTvit = document.querySelector('.block-footer_tvit-logo');
const foorDarkIconPin = document.querySelector('.block-footer_pin-logo');
const contactsWhiteImeg = document.querySelector('.block-Contact-me_imeg-size');
const darkLine = document.querySelectorAll('.darkLine');
const burgerWhite = document.querySelector('.white-menu');


whiteTheme.addEventListener('click', function () {
    whiteTheme.classList.toggle('active');
    whiteBody.classList.toggle('active');
    headerColor1.classList.toggle('active');
    headerColor2.classList.toggle('active');
    headerColor3.classList.toggle('active');
    headerColor4.classList.toggle('active');
    headerColor5.classList.toggle('active');
    logoColor.classList.toggle('active');
    headBackImeg.classList.toggle('active');
    enColor.classList.toggle('active');
    ruColor1.classList.toggle('active');
    ruColor2.classList.toggle('active');
    titleColor.classList.toggle('active');
    aboutColor.classList.toggle('active');
    btnTitle.classList.toggle('active');
    titleDarkSkills.classList.toggle('active');
    darkSkills.forEach((but) => but.classList.toggle('active'))
    titleDarkPortfolio.classList.toggle('active');
    darkLineTitile.forEach((but) => but.classList.toggle('active'));
    titleDarkVideo.classList.toggle('active');
    titleDarkPrice.classList.toggle('active');
    priceDarkColor.forEach((but) => but.classList.toggle('active'));
    contDarkColor.classList.toggle('active');
    footDate.classList.toggle('active');
    footDarkColor.classList.toggle('active');
    footDarkColorRS.classList.toggle('active');
    footDarkIconInst.classList.toggle('active');
    foorDarkIconFace.classList.toggle('active');
    foorDarkIconTvit.classList.toggle('active');
    foorDarkIconPin.classList.toggle('active');
    contactsWhiteImeg.classList.toggle('active');
    darkLine.forEach((but) => but.classList.toggle('active'));
    burgerWhite.classList.toggle('active');
});





