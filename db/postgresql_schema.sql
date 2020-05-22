 DROP DATABASE IF EXISTS reviews;

  CREATE DATABASE reviews;
  \c reviews;

  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    username VARCHAR(30) UNIQUE NOT NULL,
  );

  CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL
  );

  CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    product_id INT NOT NULL REFERENCES products(product_id),
    created_at DATE NOT NULL,
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
