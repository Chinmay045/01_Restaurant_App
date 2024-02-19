
const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());


app.get('/data', (req, res) => {
    res.status(200).json({ "data": "sending array data" });
});

app.listen(5000, () => {
    console.log("Server started at Port 5000");
});