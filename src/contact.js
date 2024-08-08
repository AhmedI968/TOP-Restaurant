import './style.css'

const Contact = () => {
    const content = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = 'Contact Us';
    header.classList.add('contactHeader');
    content.appendChild(header);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 555-555-5555';
    contactInfo.appendChild(phone);

    const email = document.createElement('p');
    const emailLink = document.createElement('a');
    emailLink.href = "mailto:info@burgerplace.com";
    emailLink.textContent = 'Email: customerSupport@theBurgerJoint.com';
    email.appendChild(emailLink);
    contactInfo.appendChild(email);

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Burger St, Burger Town, USA';
    contactInfo.appendChild(address);

    content.appendChild(contactInfo);

    return content;
};

export default Contact;