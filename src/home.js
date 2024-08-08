import './style.css';
import burgerImg from './images/burger.jpeg';

const Home = () => {
    const content = document.createElement('div');

    const header = document.createElement('h1');
    header.innerHTML = '<h1>The Burger Joint</h1>';
    header.classList.add('restTitle');
    content.appendChild(header);

    const headline = document.createElement('div');
    headline.textContent = 'Home of the best burgers in town!';
    headline.classList.add('headline');
    content.appendChild(headline);

    const image = document.createElement('img');
    image.src = burgerImg;
    image.alt = 'burger';
    image.classList.add('burgerImg');
    content.appendChild(image);

    return content;
}

export default Home;
