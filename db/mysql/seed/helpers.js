const Promise = require('bluebird');

/*
data
------
names: 100 entries - {name, age}
products: 5 entries - {name}
experiences: 5 entries - {play_experience: 4, difficulty: 4, value: 5, build_time: 5}
reviews: 5 entries - {
  rating: 5,
  recommended: 1,
  subject: 'lorum ipsum 1',
  is_helpful: 5,
  is_not_helpful: 1,
  product_id: 1,
  experience_id: 1,
  user_id: 1
},
images: 5 entries - {url: 'https://aws.s3/1', review_id: 1}
*/

const addUsers = async (users, db) => {
  await Promise.map(users, (user) => db.connection.query('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age]));
};

const addProducts = async (products, db) => {
  await Promise.map(products, (product) => db.connection.query('INSERT INTO products (name) VALUES (?)', [product.name]));
};

const addReviews = async (reviews, productId, db) => {
  const queryString = 'INSERT INTO reviews (rating, recommended, subject, is_helpful, is_not_helpful, experience_id, user_id, created_at, description, product_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  await Promise.map(reviews, (review) => {
    const values = [
      review.rating,
      review.recommended,
      review.subject,
      review.is_helpful,
      review.is_not_helpful,
      review.experience_id,
      review.user_id,
      review.created_at,
      review.description,
      productId,
    ];
    return db.connection.query(queryString, values);
  });
};

const addExperiences = async (experiences, db) => {
  const queryString = 'INSERT INTO experiences (play_experience, difficulty, value, build_time) VALUES (?, ?, ?, ?)';
  await Promise.map(experiences, (experience) => {
    const values = [
      experience.play_experience,
      experience.difficulty,
      experience.value,
      experience.build_time,
    ];
    return db.connection.query(queryString, values);
  });
};

const addImages = async (images, db) => {
  const queryString = 'INSERT INTO images (url, review_id) VALUES (?, ?)';
  await Promise.map(images, (image) => {
    const values = [image.url, image.review_id];
    return db.connection.query(queryString, values);
  });
};

module.exports = {
  addUsers,
  addProducts,
  addReviews,
  addExperiences,
  addImages,
};
