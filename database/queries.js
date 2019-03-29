const idQuery = id => `SELECT * FROM reviews 
                       INNER JOIN users ON reviews.user_id=users.id
                       INNER JOIN avatars ON users.avatar_id = avatars.id 
                       WHERE reviews.user_id=${id} LIMIT 5;`;
const userQuery = name => `SELECT * FROM users WHERE users.name=${name}`;
module.exports = { idQuery, userQuery };
