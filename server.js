const express = require('express');

const app = express();

app.use(express.static('../dist/green-minds'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/green-minds/'}),
);

app.listen(process.env.PORT || 8080);
