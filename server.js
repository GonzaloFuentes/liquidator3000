const express = require('express');

const app = express();

app.use(express.static('../dist/green-mind'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/green-mind/'}),
);

app.listen(process.env.PORT || 8080);
