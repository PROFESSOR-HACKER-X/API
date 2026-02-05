const express = require('express');
const app = express();

// Fake Database
const userData = {
    "03018787786": {
        "name": "Ammar Kharal",
        "cnic": "35202-xxxxxxx-x",
        "address": "Lahore, Pakistan",
        "operator": "Jazz"
    }
};

// Root route (check karne ke liye ke API chal rahi hai)
app.get('/', (req, res) => {
    res.send("SIM Database API is live!");
});

// API Endpoint
app.get('/:number', (req, res) => {
    const phoneNumber = req.params.number;
    const info = userData[phoneNumber];

    if (info) {
        res.status(200).json({
            status: "success",
            data: info
        });
    } else {
        res.status(404).json({
            status: "error",
            message: "Number not found"
        });
    }
});

// Vercel ke liye zaroori hai
module.exports = app;
