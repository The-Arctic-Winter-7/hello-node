// Import the express module
import express from 'express';

// Instatiate an express object
const app = express();

// Define a port number where our server will listen to
const PORT = 3000;

// Define the root path
app.get('/', (req, res) => {

    // Send text to the client
    res.send('<h1>Hello, world!</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});