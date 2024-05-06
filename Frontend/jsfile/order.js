document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const quantities = document.querySelectorAll('input[type="number"]');

    // Function to update the total
    function updateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const inputQuantity = checkbox.nextElementSibling; 
                const quantity = parseInt(inputQuantity.value, 10);
                if (!isNaN(quantity) && quantity > 0) { 
                    total += parseFloat(checkbox.dataset.price) * quantity;
                }
            }
        });
        document.getElementById('totalAmount').textContent = total.toFixed(2);
    }

    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });


    quantities.forEach(quantity => {
        quantity.addEventListener('input', updateTotal);
    });

    // Form submission
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        updateTotal(); // Ensure the total is up-to-date
        const total = document.getElementById('totalAmount').textContent;
        alert('Your order has been submitted! Total: $' + total);
        
    });
});