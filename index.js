const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/get-data', async (req, res) => {
    const { number } = req.query;

    if (!number) {
        return res.status(400).json({ error: "Please provide a number parameter" });
    }

    try {
        // Original API ko call kar rahe hain
        const response = await axios.get(`https://fam-official.serv00.net/api/database.php?number=${number}`);
        
        // Response wapis bhej rahe hain
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from source" });
    }
});

module.exports = app;
