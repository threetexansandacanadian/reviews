const idProductQuery = id => `SELECT * FROM reviews 
                       INNER JOIN users ON reviews.user_id=users.id
                       INNER JOIN avatars ON users.avatar_id = avatars.id 
                       WHERE reviews.user_id=${id};`;
const nameProductQuery = name => `SELECT * FROM products
                                  INNER JOIN reviews ON products.id=reviews.product_id
                                  INNER JOIN users ON users.id=reviews.user_id
                                  INNER JOIN avatars ON users.avatar_id=avatars.id
                                  WHERE products.name='${name}';`;
const userQuery = name => `SELECT * FROM users WHERE users.name=${name}`;
module.exports = { idProductQuery, userQuery, nameProductQuery };
