/* eslint-disable no-console */
const { Client } = require('pg');

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

const selectAllReviews = function () {
  const query = new Promise((resolve, reject) => {
    function client.query('SELECT * FROM reviews', (err, res) => {
      console.log(err, res);
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
      client.end();
    });
  });
  return query;
};

module.exports = { selectAllReviews };
