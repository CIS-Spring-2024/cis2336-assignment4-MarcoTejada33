document.addEventListener('DOMContentLoaded', function() {
    const menuData = {
        'Breakfast': {
            items: [
                { name: 'Classic Breakfast', description: 'Your classic breakfast with eggs, toast, and bacon.' },
                { name: 'Power Parfait', description: 'A powerful start with layers of yogurt, granola, and fresh fruit.' },
                { name: 'Breakfast Bowls', description: 'Hearty and healthy bowls with a variety of toppings.' },
                { name: 'Breakfast Sandwich', description: 'Delicious sandwiches made with fresh ingredients.' }
            ],
            image: 'breakfast.jpg'
        },
        'Pastries': {
            items: [
                { name: 'Bagels', description: 'Freshly baked bagels with a variety of spreads.' },
                { name: 'Muffins', description: 'Moist and flavorful muffins available in several flavors.' },
                { name: 'Cheese/Blueberry Danishes', description: 'Sweet and savory danishes, a perfect snack.' }
            ],
            image: 'pastries.jpg'
        },
        'Lunch': {
            items: [
                { name: 'Turkey Club Wrap', description: 'A classic turkey wrap with fresh veggies and dressing.' },
                { name: 'Mediterranean Salad', description: 'A refreshing salad with Mediterranean flavors.' },
                { name: 'Vegetarian Buddha Bowl', description: 'A bowl full of goodness with grains, veggies, and tofu.' },
                { name: 'Chicken Quesadilla', description: 'Grilled chicken and melted cheese in a crispy tortilla.' }
            ],
            image: 'lunch.jpg'
        },
        'Coffee / Tea / Beverages': {
            items: [
                { name: 'Espresso', description: 'A strong and delicious shot of coffee.' },
                { name: 'Latte', description: 'Smooth and creamy latte with steamed milk.' },
                { name: 'Green Tea', description: 'Refreshing green tea rich in antioxidants.' },
                { name: 'Iced Teas', description: 'Chilled iced teas in a variety of flavors.' },
                { name: 'Bottled Water', description: 'Stay hydrated with our pure bottled water.' },
                { name: 'Fountain Drinks', description: 'Fizzy and refreshing assorted fountain drinks.' }
            ],
            image: 'beverages.jpg'
        }
    };

    function generateMenu() {
        const menuContainer = document.getElementById('menu-container');
        if (!menuContainer) {
            console.error('Menu container not found!');
            return;
        }
        menuContainer.innerHTML = '';

        Object.keys(menuData).forEach(category => {
            const categoryInfo = menuData[category];
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'menu-category';

            const categoryHeader = document.createElement('button');
            categoryHeader.className = 'menu-category-header';
            categoryHeader.innerHTML = `
                <img src="${categoryInfo.image}" alt="${category}" class="category-icon">
                <span class="menu-category-title">${category}</span>
                <span class="toggle-icon">▼</span>
            `;

            const itemsList = document.createElement('ul');
            itemsList.className = 'menu-items hidden';
            categoryInfo.items.forEach(item => {
                const itemLi = document.createElement('li');
                itemLi.className = 'menu-item';
                itemLi.innerHTML = `<a href="${item.url}" class="menu-item-link"><h4>${item.name}</h4><p>${item.description}</p></a>`;
                itemsList.appendChild(itemLi);
            });

            categoryHeader.addEventListener('click', function() {
                const isOpen = itemsList.classList.toggle('hidden');
                categoryHeader.querySelector('.toggle-icon').textContent = isOpen ? '▼' : '▲';
            });

            categoryDiv.appendChild(categoryHeader);
            categoryDiv.appendChild(itemsList);
            menuContainer.appendChild(categoryDiv);
        });
    }

    generateMenu();
});