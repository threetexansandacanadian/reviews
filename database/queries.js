const selectReviewsById = id => `SELECT * FROM reviews_but_better 
                       INNER JOIN users ON reviews_but_better.user_id=users.id
                       INNER JOIN avatars ON users.avatar_id = avatars.id 
                       WHERE reviews_but_better.product_id=${id}
                       ORDER BY reviews_but_better.id ASC;`;
const selectReviewsByProdName = name => `SELECT * FROM products
                                  INNER JOIN reviews_but_better ON products.id=reviews_but_better.product_id
                                  INNER JOIN users ON users.id=reviews_but_better.user_id
                                  INNER JOIN avatars ON users.avatar_id=avatars.id
                                  WHERE products.name='${name}';`;
const selectUserByName = name => `SELECT * FROM users WHERE users.name='${name}';`;
const insertReview = rev => `INSERT INTO reviews_but_better 
                                  (review, stars, title, product_id, user_id)
                                  VALUES ('${rev.review}', ${rev.stars}, '${rev.title}', ${rev.product_id}, ${rev.user_id});`;
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
