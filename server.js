const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express();
app.use(bodyParser.json());

app.use(cors());


//db configuration
const db = config.get('mongoURI');

//connect to Mongodb

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

//Use Route
app.use('/api/items', items);
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running on port ${port}`));

