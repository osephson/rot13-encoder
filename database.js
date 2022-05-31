var sqlite3 = require('sqlite3').verbose();

const { rot13Encoder } = require('./utils');

const DBSOURCE = 'db.sqlite'; 

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  }else{
    console.log('Connected to the SQlite database.');
    db.run(`CREATE TABLE history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            origin text, 
            encoded text
            )`,(err) => {
      if (err) {
        // Table already created
      } else {
        // Table is just created
        const insert = 'INSERT INTO history (origin, encoded) VALUES (?, ?)';
        const sample = 'Hello World!';
        db.run(insert, [sample, rot13Encoder(sample)]);
      }
    });  
  }
});

module.exports = db;
