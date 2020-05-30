/*
  - Use this file to generate JSON data for mongoimport ( when time is a concern)
  - Will take ~10mins to generate data, and ~10mins to import
  - Sub Document will NOT have _id auto populate
*/

const faker = require('faker');
const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const { mongoDb, Users, Products } = require('../index.js')

// seed Users
const seedUsers = async () => {
  await Users.deleteMany({}, (err) => console.log('reset Users'));
  const bulkData = [];
  const randomAge = [5, 10, 30, 40, 13, 15, 34, 32, 21 , 5, 9, 12, 22, 14, 17, 19, 30, 20, 22, 23];
  let index = 0;
  for (let i = 1; i <= 100; i += 1) {
    const firstName = faker.name.firstName().replace(/'/, ' ');
    const lastName = faker.name.lastName().replace(/'/, ' ');
    const username = faker.internet.userName();
    const document = {
      insertOne: {
        document: {
          first_name: firstName,
          last_name: lastName,
          username,
          age: randomAge[index]
        }
      }
    };
    bulkData.push(document);
    (index === 19) ? index = 0 : index += 1;
  }
  const result = await Users.bulkWrite(bulkData)
  return console.log(`Succesfully created: ${result.insertedCount}`);
};

// seed Products
const seedProducts = async (quantity) => {
  const filePath = path.join(path.join(__dirname, '../data/mongoProducts.json'));
  const writeStream = fs.createWriteStream(filePath, { flags: 'w+' });
  await seedUsers();
  const docs = await Users.find( {}, {_id : 1} );
  const userIds = _.shuffle(docs.map(doc => doc._id));
  let index = 0;
  let reviewIndex = 0;
  let idIndex = 0;
  const randomReviews = [5, 10, 6, 8, 7, 3, 12, 9, 11, 4, 2, 7, 8, 3, 5, 7, 11, 12, 7, 6];
  const randomRatings = [1, 5, 4, 3, 2, 5, 3, 1, 2, 3, 4, 5, 3, 2, 1, 1, 3, 5, 4, 5];
  const randomExp = [5, 3, 4, 5, 1, 2, 3, 2, 1, 4, 5, 2, 3, 3, 3, 3, 2, 5, 4, 1];
  const randomDiff = [5, 4, 1, 5, 2, 3, 5, 4, 5, 4, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3];
  const randomValue = [5, 5, 5, 4, 4, 4, 1, 5, 4, 1, 4, 5, 3, 2, 5, 4, 1, 2, 3, 5];
  const randomBuildTimes = [10, 20, 15, 8, 9, 40, 70, 100, 30, 40, 60, 80, 13, 14, 63, 54, 67, 23, 4, 5];

  for (let i = 0; i < quantity; i += 1) {
    const product = {
      product_name: faker.commerce.productName(),
      reviews: [],
    };

    for (let j = 0; j < randomReviews[reviewIndex]; j += 1) {
      const review = {
        id: j+1,
        user: {"$oid":userIds[idIndex]},
        created_at: {"$date": faker.date.between('2020-01-01', '2020-05-05')},
        subject: faker.lorem.words(),
        comment: faker.lorem.sentence(),
        rating: randomRatings[index],
        recommended: faker.random.boolean(),
        is_helpful: faker.random.number(),
        is_not_helpful: faker.random.number(),
        play_experience: randomExp[index],
        difficulty: randomDiff[index],
        value_for_money: randomValue[index],
        build_time: randomBuildTimes[index],
      };
      // increment or reset index
      (index === 19) ? index = 0 : index += 1;
      (idIndex === 99) ? idIndex = 0 : idIndex += 1;
      product.reviews.push(review);
    };

    const jsonData = JSON.stringify(product) + '\n';
    await writeStream.write(jsonData);
    if ( (i + 1) % 50000 === 0) {
      console.log(`created ${i + 1} records`);
    };
    (reviewIndex === 19) ? reviewIndex = 0 : reviewIndex += 1;
  };
};

seedProducts(10000000)
  .then(() => {
    console.log('Completed')
    mongoDb.close();
  })
  .catch((err) => console.log(err));
