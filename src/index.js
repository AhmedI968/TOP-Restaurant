import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';
import './style.css';

const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');
const buttons = [homeBtn, menuBtn, contactBtn];

let currentPage = Home();
content.appendChild(currentPage);

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        content.innerHTML = '';
        if (event.target.id === 'homeBtn') {
            currentPage = Home();
        } else if (event.target.id === 'menuBtn') {
            currentPage = Menu();
        } else if (event.target.id === 'contactBtn') {
            currentPage = Contact();
        }
        content.appendChild(currentPage);
    });
});