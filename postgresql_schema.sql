 DROP DATABASE IF EXISTS reviews;

  CREATE DATABASE reviews;
  \c reviews;

  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    username VARCHAR(30) UNIQUE NOT NULL,
  );

  CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL
  );

  CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    created_at DATE NOT NULL,
    comment TEXT NOT NULL,
    rating SMALLINT NOT NULL,
    recommended BOOLEAN NOT NULL,
    is_helpful INT NOT NULL,
    is_noot
    play_experience SMALLINT NOT NULL,
    difficulty SMALLINT NOT NULL,
    value_for_money SMALLINT NOT NULL,
    build_time SMALLINT NOT NULL
  );
