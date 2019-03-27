/* eslint-disable func-names */
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


const selectAllReviews = function () {
  console.log('DB INFO: ', process.env.USER, process.env.HOST, process.env.DATABASE);
  return new Promise((resolve, reject) => {
    client.query('select * from avatars', (err, res) => {
      console.log(err, res);
      if (err) {
        reject(err);
      } else {
        console.log('Query Finished! Results -> ', res);
        resolve(res);
      }
    });
  });
};

module.exports = { selectAllReviews };
