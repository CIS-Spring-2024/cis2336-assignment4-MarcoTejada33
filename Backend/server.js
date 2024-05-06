// Run node server

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));

// Route to serve the order form
app.get('/order-form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orderform.html'));
});

// Route to handle the form submission via POST request
app.post('/submit-order', (req, res) => {

    const totalAmount = req.body.total || 100;


    res.redirect(`/order-con?total=${totalAmount}`);
});

// Route to serve the order confirmation page
app.get('/order-con', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'order-con.html'));
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
