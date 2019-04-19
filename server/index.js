require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');

const Ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());
app.use(cors());

massive(CONNECTION_STRING).then(dbInstance => {
	app.set('db', dbInstance);
	app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
}).catch(err => console.log('err', err));

app.get(`/api/inventory`, Ctrl.read);
app.get(`/api/inventory/:id`, Ctrl.readById);
app.post(`/api/product`, Ctrl.create);

