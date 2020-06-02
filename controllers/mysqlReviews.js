/* MYSQL database query
---------------------------
const getReviewsForProduct = function (productId) {
  return new Promise((resolve, reject) => {
    const queryString = `
    SELECT prod.name AS product_name, prod.id AS product_id, rev.id, rev.created_at, rev.rating, rev.recommended, rev.subject, rev.description, rev.is_helpful, rev.is_not_helpful, exp.play_experience, exp.difficulty, exp.value, exp.build_time, users.name, users.age FROM products AS prod
    JOIN reviews AS rev ON rev.product_id=prod.id
    JOIN experiences AS exp ON exp.id=rev.experience_id
    JOIN users ON users.id=rev.user_id
    WHERE prod.id=${productId}`;

    db.connection.query(queryString, (err, data) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      const product = helpers.getReviewsData(data);
      resolve(product);
    });
  });
};

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
---------------------------
*/