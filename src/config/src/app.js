const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to PodLearn API' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
