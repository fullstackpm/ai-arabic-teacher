

const express = require('express');
const app = express();

// Serve static files from the static folder
app.use(express.static('static'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});