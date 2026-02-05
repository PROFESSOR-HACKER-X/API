const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Fake Database (Aap ise MongoDB ya JSON file se replace kar sakte hain)
const userData = {
    "03018787786": {
        "name": "Ammar Kharal",
        "cnic": "35202-xxxxxxx-x",
        "address": "Lahore, Pakistan",
        "operator": "Jazz"
    }
};

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

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
});
