const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})