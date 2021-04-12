const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());

const performerRoutes = require('./api/routes/performers');
const familyRoutes = require('./api/routes/families');
const venueRoutes = require('./api/routes/venues');

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/performers', performerRoutes);
app.use('/api/families', familyRoutes);
app.use('/api/venues', venueRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})