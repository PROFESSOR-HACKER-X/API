const express = require('express');
const axios = require('axios');
const app = express();

// Ab aap direct "/" par number bhej sakte hain
app.get('/', async (req, res) => {
    const { number } = req.query;

    if (!number) {
        return res.send("Welcome! Please use ?number=YOUR_NUMBER at the end of URL.");
    }

    try {
        const response = await axios.get(`https://fam-official.serv00.net/api/database.php?number=${number}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Source API is not responding" });
    }
});

module.exports = app;
