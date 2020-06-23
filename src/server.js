const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

const { CustomerList } = require('./generated/customerlist_pb');
const PYTHON_SERVER_URL = 'http://localhost:3001';

app.get('/customers', async (req, res) => {
    try {
        const binaryData = await axios.get(`${PYTHON_SERVER_URL}/customer-list`);

        // convert string to base64 to be read by `deserializeBinary`
        const base64data = Buffer.from(binaryData.data).toString('base64')

        const customerList = CustomerList.deserializeBinary(base64data)

        // convert to json
        res.send(customerList.toObject());
    } catch (e) {
        console.log(e)
        res.send(404);
    }
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))