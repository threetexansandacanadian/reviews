/* eslint-disable func-names */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

let host = process.env.SERVER_PATH || 'http://localhost:3000';

export const getReviewsByID = function (id) {
  return new Promise((resolve, reject) => {
    axios.get( `${host}/api/reviews`, { headers: { productid: id } })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getReviewsByName = function (name) {
  return new Promise((resolve, reject) => {
    axios.get(`${host}/api/reviews`, { headers: { productname: name } })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const postReview = function (review) {
  return new Promise((resolve, reject) => {
    axios.post(`${}`, review)
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
