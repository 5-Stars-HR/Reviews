 DROP DATABASE IF EXISTS reviews;

  CREATE DATABASE reviews;
  \c reviews;

  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    username VARCHAR(30) UNIQUE NOT NULL,
    age SMALLINT NOT NULL
  );

  CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL
  );

  CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    created_at DATE NOT NULL,
    subject TEXT NOT NULL,
    comment TEXT NOT NULL,
    rating SMALLINT NOT NULL,
    recommended BOOLEAN NOT NULL,
    is_helpful INT NOT NULL,
    is_not_helpful INT NOT NULL,
    play_experience SMALLINT NOT NULL,
    difficulty SMALLINT NOT NULL,
    value_for_money SMALLINT NOT NULL,
    build_time SMALLINT NOT NULL
  );

COPY users(first_name, last_name, username, age) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/postgresql/data/pgUsers.txt' WITH DELIMITER ',';
COPY products(product_name) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/postgresql/data/pgProducts.txt';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/postgresql/data/pgReviews.txt' WITH DELIMITER ',';

ALTER TABLE reviews ADD FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE reviews ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
CREATE INDEX ON reviews (product_id);
CREATE INDEX ON products (product_name);
CREATE INDEX query_index ON reviews (product_id, user_id, created_at);
CREATE INDEX ON users (first_name, age)

