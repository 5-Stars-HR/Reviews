/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */
const data = require('../legos_data.js');
const helpers = require('./helpers.js');
const db = require('../index.js');

/*
data
------
names: 100 entries - {name, age}
products: 5 entries - {name}
experiences: 5 entries - {play_experience: 4, difficulty: 4, value: 5, build_time: 5}
// eslint-disable-next-line max-len
reviews: 5 entries - {rating: 5, recommended: 1, subject: 'lorum ipsum 1', is_helpful: 5, is_not_helpful: 1, product_id: 1, experience_id: 1, user_id: 1},
images: 5 entries - {url: 'https://aws.s3/1', review_id: 1}
*/

// Insert 100 users into the database
helpers.addUsers(data.users, db)
  .then(async () => {
    for (let i = 0; i < 20; i += 1) {
      // Insert 5 unique products 20 times
      await helpers.addProducts(data.products, db);
    }
  })
  .then(async () => {
    for (let i = 0; i < 100; i += 1) {
      // Insert 5 unique experiences 20 times
      await helpers.addExperiences(data.experiences, db);
    }
  })
  .then(async () => {
    for (let i = 1; i <= 100; i += 1) {
      // Insert 5 unique reviews times
      const reviewsToUse = Math.floor(Math.random() * 5);
      const numberOfReviews = Math.floor(Math.random() * 50);
      for (let j = 0; j < numberOfReviews; j += 1) {
        await helpers.addReviews(data.reviews.slice(reviewsToUse), i, db);
      }
    }
  })
  .then(async () => {
    for (let i = 0; i < 20; i += 1) {
      // Insert 5 unique images times
      await helpers.addImages(data.images, db);
    }
  })
  .then(() => {
    console.log('finished inserting all datas!');
    db.connection.end();
  })
  .catch((err) => {
    console.error('err: ', err);
    db.connection.end();
  });
