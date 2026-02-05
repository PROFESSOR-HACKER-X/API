const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send("SIM Database API is live! Powered By PROFESSOR DEATH SYSTEM");
});

// Dynamic API Endpoint
app.get('/:number', (req, res) => {
    const phoneNumber = req.params.number;

    // Check karein ke input sirf numbers hain
    if (!/^\d+$/.test(phoneNumber)) {
        return res.status(400).json({
            status: "error",
            message: "Please enter a valid mobile number (digits only).",
            footer: "©️ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗣𝗥𝗢𝗙𝗘𝗦𝗦𝗢𝗥 𝗗𝗘𝗔𝗧𝗛 𝗦𝗬𝗦𝗧𝗘𝗠"
        });
    }

    // Har number ke liye random data generate karna
    const operators = ["Jazz", "Telenor", "Zong", "Ufone", "SCOM"];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    
    // Fake data structure
    const dynamicData = {
        "number": phoneNumber,
        "name": "User_" + phoneNumber.slice(-4), 
        "cnic": `35201-${Math.floor(1000000 + Math.random() * 9000000)}-1`,
        "address": "Street " + Math.floor(Math.random() * 100) + ", Area XYZ, Pakistan",
        "operator": randomOperator,
        "sim_type": "Prepaid",
        "status": "Active"
    };

    // JSON Response with your Footer
    res.status(200).json({
        status: "success",
        data: dynamicData,
        footer: "©️ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗣𝗥𝗢𝗙𝗘𝗦𝗦𝗢𝗥 𝗗𝗘𝗔𝗧𝗛 𝗦𝗬𝗦𝗧𝗘𝗠"
    });
});

module.exports = app;
