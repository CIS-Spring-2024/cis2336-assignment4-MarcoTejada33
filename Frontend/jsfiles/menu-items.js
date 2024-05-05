const menuData = {
    'Breakfast': { price: 8.99, items: ['Classic Breakfast', 'Power Parfait', 'Breakfast Bowls', 'Breakfast Sandwich'] },
    'Pastries': { price: 3.99, items: ['Bagels', 'Muffins', 'Cheese/Blueberry Danishes'] },
    'Lunch': { price: 11.99, items: ['Turkey Club Wrap', 'Mediterranean Salad', 'Vegetarian Buddha Bowl', 'Chicken Quesadilla'] },
    'Beverages': { price: 1.99, items: ['Espresso', 'Latte', 'Green Tea', 'Iced Teas', 'Bottled Water', 'Fountain Drinks'] }
};

document.addEventListener('DOMContentLoaded', function() {
    const fieldset = document.querySelector('fieldset');
    for (const category in menuData) {
        menuData[category].items.forEach(item => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="${item}" data-price="${menuData[category].price}">${item} - $${menuData[category].price}`;
            const inputQuantity = document.createElement('input');
            inputQuantity.type = 'number';
            inputQuantity.value = 0;
            inputQuantity.min = 0;
            inputQuantity.max = 10;
            inputQuantity.style.marginLeft = '10px';
            label.appendChild(inputQuantity);
            fieldset.appendChild(label);
        });
    }
});