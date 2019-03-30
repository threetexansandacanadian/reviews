CREATE TABLE IF NOT EXISTS avatars(
  id SERIAL PRIMARY KEY,
  url VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  avatar_id int REFERENCES avatars(id),
  name VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS reviews(
  id SERIAL PRIMARY KEY,
  review TEXT NOT NULL,
  stars INT NOT NULL, 
  product_id INT REFERENCES products(id),
  user_id INT REFERENCES users(id)
);