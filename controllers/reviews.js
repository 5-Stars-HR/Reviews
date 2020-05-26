const pgdb = require('../db/postgresql/index.js');
const mysqldb = require('../db/mysql');
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
      products.product_id = ${productId} AND reviews.user_id = users.user_id AND reviews.product_id = products.product_id
    ORDER BY
      reviews.created_at desc;
  `
  pgdb.client.query(sql, (err, data) => {
    if (err) {
      console.log('Error from query PSQL DB: ', err);
      res.status(500);
    } else {
      const result = helpers.getReviewsData(data.rows);
      res.status(200).send(result);
    }
  })
};

// const getReviewsForProduct = function (productId) {
//   return new Promise((resolve, reject) => {
//     const queryString = `
//     SELECT prod.name AS product_name, prod.id AS product_id, rev.id, rev.created_at, rev.rating, rev.recommended, rev.subject, rev.description, rev.is_helpful, rev.is_not_helpful, exp.play_experience, exp.difficulty, exp.value, exp.build_time, users.name, users.age FROM products AS prod
//     JOIN reviews AS rev ON rev.product_id=prod.id
//     JOIN experiences AS exp ON exp.id=rev.experience_id
//     JOIN users ON users.id=rev.user_id
//     WHERE prod.id=${productId}`;

//     db.connection.query(queryString, (err, data) => {
//       if (err) {
//         console.error(err);
//         return reject(err);
//       }
//       const product = helpers.getReviewsData(data);
//       resolve(product);
//     });
//   });
// };

const updateReviewForProduct = function (productId, reviewId, data) {
  return new Promise((resolve, reject) => {
    const queryString = `UPDATE reviews SET ${data.feedback}=${data.feedback} ${data.action} 1 WHERE id=? AND product_id=?`;

    mysqldb.connection.query(queryString, [reviewId, productId], (err, data) => {
      if (err) {
        console.error(err);
        return reject(err);
      }

      resolve(data);
    });
  });
};

const getReview = function (productId, reviewId) {
  return new Promise((resolve, reject) => {
    const queryString = 'SELECT * FROM reviews WHERE id=? AND product_id=?';
    mysqldb.connection.query(queryString, [reviewId, productId], (err, data) => {
      if (err) {
        console.error(err);
        return reject(err);
      }

      resolve(data[0]);
    });
  });
};

module.exports = {
  getReviewsForProduct, updateReviewForProduct, getReview
};
