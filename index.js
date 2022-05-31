const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./database');
const { rot13Encoder } = require('./utils');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (req, res) =>{
  res.send(`Hello World! => ${rot13Encoder('Hello World!')}`);
});

app.post('/', (req, res) => {
  const { str } = req.body;
  if (!str) {
    return res.status(500).send('Please input a string.');
  }

  const enc = rot13Encoder(str);
  const sql = 'INSERT INTO history (origin, encoded) VALUES (?, ?)';
  const params = [str, enc];
  db.run(sql, params, (err) => {
    if (err) {
      return res.status(400).json({error: err.message});
    }
    res.json({
      origin: str,
      encoded: enc
    });
  });
});

app.get('/history', (req, res) => {
  const sql = 'SELECT * FROM history';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(400).json({error: err.message});
    }
    res.json({
      data: rows
    });
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
