/* eslint-disable func-names */
/* eslint-disable no-console */
const { Client } = require('pg');
const { idProductQuery, nameProductQuery, userQuery } = require('./queries.js');

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

client.connect();


const selectAllReviews = function () {
  return new Promise((resolve, reject) => {
    client.query('select * from reviews', (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
const selectReviewsByID = function (id) {
  return new Promise((resolve, reject) => {
    client.query(`${idProductQuery(id)}`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const selectReviewsByName = function (name) {
  return new Promise((resolve, reject) => {
    client.query(`${idProductQuery(name)}`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
const selectUserByName = function (name) {
  return new Promise((resolve, reject) => {
    client.query(userQuery(name), (err, res) => {
      if (err && err.code !== '42703') {
        reject(err);
      } else if (err && err.code !== '42703') {
        // this will execute if no user is found
        resolve(-1);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = { selectAllReviews, selectReviewsByID, selectReviewsByName, selectUserByName };
