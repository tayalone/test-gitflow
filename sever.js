const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/testRequest', (req, res) => {
  return res.send({ message: 'OK' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
