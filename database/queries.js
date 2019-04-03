const selectReviewsById = id => `SELECT * FROM reviews 
                       INNER JOIN users ON reviews.user_id=users.id
                       INNER JOIN avatars ON users.avatar_id = avatars.id 
                       WHERE reviews.product_id=${id};`;
const selectReviewsByProdName = name => `SELECT * FROM products
                                  INNER JOIN reviews ON products.id=reviews.product_id
                                  INNER JOIN users ON users.id=reviews.user_id
                                  INNER JOIN avatars ON users.avatar_id=avatars.id
                                  WHERE products.name='${name}';`;
const selectUserByName = name => `SELECT * FROM users WHERE users.name='${name}';`;
const insertReview = rev => `INSERT INTO reviews 
                                  (review, stars, product_id, user_id)
                                  VALUES ('${rev.review}', ${rev.stars}, ${rev.product_id}, ${rev.user_id});`;
const insertUser = user => `INSERT INTO users (avatar_id, name) 
                            VALUES (${user.avatar_id}, '${user.name}')
                            ON CONFLICT DO NOTHING;`;
module.exports = {
  selectReviewsById,
  selectUserByName,
  selectReviewsByProdName,
  insertReview,
  insertUser,
};
