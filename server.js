// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000; // or any other port you prefer

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/HotelReservationSystem", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

// Define the Admin schema
const adminSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/insertAdmin', (req, res) => {
    console.log("Connected to database");

    // Assuming the form data is sent in the request body
    const { name, password, email } = req.body;

    // Data object with Username, password, and email fields
    const data = {
        Username: name,
        password: password,
        email: email
    };

    // Inserting a single document
    Admin.create(data)
        .then(() => {
            console.log('Admin data inserted successfully');
            res.send('Admin data inserted successfully');
        })
        .catch(err => {
            console.error('Error inserting admin data:', err);
            res.status(500).send('Error inserting admin data');
        });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
