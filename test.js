const mongoose = require('mongoose');

function insertAdmin(name, password, email) {
    mongoose.connect("mongodb://localhost:27017/HotelReservationSystem")
        .then(() => {
            console.log("Connected to database");
            const AdminSchema = new mongoose.Schema({
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

            const Admin = mongoose.model('Admin', AdminSchema);

            // Data object with Username, password, and email fields
            const data = {
                Username: name,
                password: password,
                email: email
            };

            // Inserting a single document
            Admin.create(data)
                .then(() => console.log('Admin data inserted successfully'))
                .catch(err => console.error('Error inserting admin data:', err));
        })
        .catch((err) => {
            console.error('Error connecting to database:', err);
        });
}

// Example usage:
insertAdmin("Ahmed", "03186808944_a", "f219071@cfd.nu.edu.pk");
