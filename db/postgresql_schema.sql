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


COPY users(first_name, last_name, username, age) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgUsers.txt' WITH DELIMITER ',';
COPY products(product_name) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgProducts.txt';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews1.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews2.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews3.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews4.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews5.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews6.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews7.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews8.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews9.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews10.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews11.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews12.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews13.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews14.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews15.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews16.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews17.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews18.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews19.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews20.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews21.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews22.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews23.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews24.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews25.txt' WITH DELIMITER ',';
COPY reviews(user_id, product_id, created_at, subject, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) FROM '/Users/whisly/Documents/HR/SDC/Reviews/db/data/pgReviews26.txt' WITH DELIMITER ',';

ALTER TABLE reviews ADD FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE reviews ADD FOREIGN KEY (user_id) REFERENCES users(user_id);