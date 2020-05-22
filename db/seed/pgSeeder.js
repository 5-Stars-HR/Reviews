const faker = require('faker');
const fs = require('fs');
const path = require('path');


let fileContent = ' \\c reviews \n';

const seedUsers = () => {
  for (let i = 1; i <= 100; i += 1) {
    const firstName = faker.name.firstName().replace(/'/, ' ');
    const lastName = faker.name.lastName().replace(/'/, ' ');
    const username = faker.internet.userName();
    fileContent += `INSERT INTO users (first_name, last_name, username) values ('${firstName}', '${lastName}', '${username}'); \n`;
  }
};

const seedProducts = (quantity) =>  {
  for (let i = 1; i <= quantity; i += 1) {
    const productName = faker.commerce.productName();
    fileContent += `INSERT INTO products (product_name) values ('${productName}'); \n`;
  }
}

const seedReviews = (productQuantity) => {
  for (let i = 1; i <= productQuantity; i += 1) {
    const numberOfReviews = Math.floor(Math.random() * 20 + 1);
    for (let j = 1; j <= numberOfReviews; j += 1) {
      const userId = Math.floor(Math.random() * 100 + 1);
      const createdAt = faker.date.between('2020-01-01', '2020-05-05').toString().replace(/G.+/g, 'PST');
      const comment = faker.lorem.paragraph();
      const rating = Math.floor(Math.random() * 5 + 1);
      const recommended = faker.random.boolean();
      const isHelpful = faker.random.number();
      const isNotHelpful = faker.random.number();
      const playExperience = Math.floor(Math.random() * 5 + 1);
      const difficulty = Math.floor(Math.random() * 5 + 1);;
      const valueForMoney = Math.floor(Math.random() * 5 + 1);
      const buildTime = Math.floor(Math.random() * 100 + 1);

      fileContent += `INSERT INTO reviews (user_id, product_id, created_at, comment, rating, recommended, is_helpful, is_not_helpful, play_experience, difficulty, value_for_money, build_time) values (${userId}, ${i}, '${createdAt}', '${comment}', ${rating}, ${recommended}, ${isHelpful}, ${isNotHelpful}, ${playExperience}, ${difficulty}, ${valueForMoney}, ${buildTime}); \n`;
    }
  }
}

seedUsers();
seedProducts(1000000);
seedReviews(1000000);

const filePath = path.join(__dirname, '../pgData.txt');
fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.log('error while writing pgData' , err)
  } else {
    console.log('the file is successfully created');
  }
});

