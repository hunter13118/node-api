const express = require('express');
const app = express();
app.get('/', function (req, res) { res.send('Hello World this is my api of greatness poggers')})
app.listen(3000);

