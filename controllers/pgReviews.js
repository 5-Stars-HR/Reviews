const pgdb = require('../db/postgresql/index.js');
const helpers = require('./helpers');

const getReviewsForProduct = (req, res) => {
  const productId = req.params.product_id;
  const sql = `
    SELECT
      products.product_id, products.product_name, users.age, users.first_name, reviews.id, reviews.created_at,
      reviews.comment, reviews.build_time, reviews.difficulty, reviews.play_experience, reviews.value_for_money,
      reviews.is_helpful, reviews.is_not_helpful, reviews.rating, reviews.recommended, reviews.subject
    FROM
      reviews, users, products
    WHERE
      products.product_id = ${productId} AND reviews.user_id = users.user_id AND reviews.product_id = products.product_id;
  `
  pgdb.client.query(sql, (err, data) => {
    if (err) {
      console.log('Error from query PSQL DB: ', err);
      res.status(500);
    } else {
      const result = helpers.getReviewsData(data.rows);
      res.status(200).send(result);
    }
  });
};

const updateReviewForProduct = (req, res) => {
  const {feedback, action} = req.body;
  const reviewId = req.params.review_id;
  console.log(feedback, action, reviewId);
  const sql = `UPDATE reviews SET ${feedback} = ${feedback} ${action} 1 WHERE id = ${reviewId}`
  pgdb.client.query(sql, (err, data) => {
    if (err) {
      console.log('Error from update PSQL DB reviews\'s vote counts:', err);
      res.status(500);
    } else {
      res.status(201).send(data);
    }
  });
};

const getReview = (req, res) => {
  const reviewId = req.params.review_id;
  console.log(reviewId);
  const sql = `SELECT reviews.id, reviews.is_helpful, reviews.is_not_helpful FROM reviews WHERE id = ${reviewId}`;
  pgdb.client.query(sql, (err, data) => {
    if (err) {
      console.log('Error from getting review vote counts :', err);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

module.exports = {
  getReviewsForProduct, updateReviewForProduct, getReview
};
