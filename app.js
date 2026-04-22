const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is how it works you know?'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
