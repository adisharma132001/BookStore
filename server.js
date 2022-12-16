const express = require('express');
const bodyParser = require('body-parser');

const bookRoutes = require('./routes/bookRoutes')
const app = express();

app.use(bodyParser.json());
app.use('/api/v1', bookRoutes);



app.listen(8000, () => {
    console.log('Server is running on port 8000');
});