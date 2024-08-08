import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';

const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');
const buttons = [homeBtn, menuBtn, contactBtn];

let currentPage = Home();
content.appendChild(currentPage);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        content.removeChild(currentPage);
        if (button === homeBtn) {
            currentPage = Home();
        } else if (button === menuBtn) {
            currentPage = Menu();
        } else if (button === contactBtn) {
            currentPage = Contact();
        }
        content.appendChild(currentPage);
    });
});