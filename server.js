const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

//Starts the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})