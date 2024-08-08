const menuItems = [
    {
        name: "Classic Cheeseburger",
        description: "A juicy beef patty topped with cheddar cheese, lettuce, tomato, and our special sauce.",
        price: "$9.99",
        image: "images/classic-cheeseburger.jpeg"
    },
    {
        name: "Bacon BBQ Burger",
        description: "Tender beef patty with crispy bacon, tangy BBQ sauce, onions, and cheddar cheese.",
        price: "$11.49",
        image: "images/bacon-bbq-burger.jpeg"
    },
    {
        name: "Mushroom Swiss Burger",
        description: "Grilled mushrooms, Swiss cheese, and a savory sauce on top of a seasoned beef patty.",
        price: "$10.99",
        image: "images/mushroom-swiss-burger.jpeg"
    },
    {
        name: "Spicy Jalapeño Burger",
        description: "A spicy kick with jalapeños, pepper jack cheese, and a spicy mayo on a juicy beef patty.",
        price: "$11.99",
        image: "images/spicy-jalapeno-burger.jpeg"
    },
    {
        name: "Veggie Burger",
        description: "A delicious plant-based patty with lettuce, tomato, and avocado on a fresh bun.",
        price: "$10.49",
        image: "images/veggie-burger.jpeg"
    }
];

const Menu = () => {
    const content = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = 'Menu';
    header.classList.add('menuHeader');
    content.appendChild(header);

    const menuList = document.createElement('div');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        image.classList.add('itemImage');

        const name = document.createElement('h4');
        name.textContent = item.name;
        name.classList.add('itemName');
        menuItem.appendChild(name);

        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add('itemDescription');
        menuItem.appendChild(description);

        const price = document.createElement('p');
        price.textContent = item.price;
        price.classList.add('itemPrice');
        menuItem.appendChild(price);

        menuList.appendChild(menuItem);
    });

    content.appendChild(menuList);

    return content;
};

export default Menu;