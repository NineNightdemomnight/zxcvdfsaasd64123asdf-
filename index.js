const express = require('express');
const path = require('path');
const { apiKey } = require('./code'); // นำเข้ารหัสจาก code.js
const { imageUrl } = require('./user/test'); // นำเข้าลิงก์ภาพจาก user/test.js

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`API Listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('This is my API running...');
});

app.get('/about', (req, res) => {
    res.send('This is my about route');
});

// Route ใหม่เพื่อตรวจสอบรหัส
app.get('/check-code', (req, res) => {
    const { code } = req.query; // รับรหัสจาก query parameter

    if (code === apiKey) {
        res.send(`Welcome to API SXNGDU\nImage URL: ${imageUrl}`);
    } else {
        res.status(403).send('Unauthorized'); // ใช้รหัสสถานะ 403 สำหรับการเข้าถึงที่ไม่ได้รับอนุญาต
    }
});

module.exports = app;
