import frontPage from './frontPage.js';
import menuPage from './menuPage.js';
import contactPage from './contactPage.js';

let current = 'home';

frontPage();

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('home') && (current !== 'home')) {
        frontPage();
        current = 'home';
    } else if (e.target.classList.contains('menu') && (current !== 'menu')) {
        menuPage();
        current = 'menu';
    } else if (e.target.classList.contains('contact') && (current !== 'contact')) {
        contactPage();
        current = 'contact';
    }
})