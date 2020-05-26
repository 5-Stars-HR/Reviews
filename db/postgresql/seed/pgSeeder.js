const faker = require('faker');
const fs = require('fs');
const path = require('path');

const seedUsers = () => {
  let fileContent = ''
  const randomAge = [5, 10, 30, 40, 13, 15, 34, 32, 21 , 5, 9, 12, 22, 14, 17, 19, 30, 20, 22, 23];
  let index = 0;
  for (let i = 1; i <= 100; i += 1) {
    const firstName = faker.name.firstName().replace(/'/, ' ');
    const lastName = faker.name.lastName().replace(/'/, ' ');
    const username = faker.internet.userName();
    fileContent += `'${firstName}', '${lastName}', '${username}', ${randomAge[index]}\n`;
    (index === 19) ? index = 0 : index += 1;
  }
  fs.writeFile(path.join(__dirname, '../data/pgUsers.txt'), fileContent, (err) => {
    if (err) {
      console.log('error while writing pgData' , err)
    } else {
      console.log('the Users file is successfully created');
    }
  });
};

const seedProducts = (quantity) =>  {
  let fileContent = '';
  for (let i = 1; i <= quantity; i += 1) {
    const productName = faker.commerce.productName();
    fileContent += `'${productName}'\n`;
  }
  fs.writeFile(path.join(__dirname, '../data/pgProducts.txt'), fileContent, (err) => {
    if (err) {
      console.log('error while writing pgData' , err)
    } else {
      console.log('the products file is successfully created');
    }
  });
}

const seedReviews = (productQuantity) => {
  const filePath = path.join(__dirname, '../data/pgReviews.txt');
  let writeStream = fs.createWriteStream(filePath, { flags : 'w+'});
  let fileContent = '';
  let fileIndex = 1;
  let index = 0;
  let reviewIndex = 0;
  let userId = 1;
  const randomReviews = [5, 10, 6, 8, 7, 3, 15, 10, 15, 8, 2, 9, 14, 12, 11, 14, 12, 15, 7, 8];
  const randomRatings = [1, 5, 4, 3, 2, 5, 3, 1, 2, 3, 4, 5, 3, 2, 1, 1, 3, 5, 4, 5];
  const randomExp = [5, 3, 4, 5, 1, 2, 3, 2, 1, 4, 5, 2, 3, 3, 3, 3, 2, 5, 4, 1];
  const randomDiff = [5, 4, 1, 5, 2, 3, 5, 4, 5, 4, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3];
  const randomValue = [5, 5, 5, 4, 4, 4, 1, 5, 4, 1, 4, 5, 3, 2, 5, 4, 1, 2, 3, 5];
  const randomBuildTimes = [10, 20, 15, 8, 9, 40, 70, 100, 30, 40, 60, 80, 13, 14, 63, 54, 67, 23, 4, 5];
  for (let i = 1; i <= productQuantity; i += 1) {
    for (let j = 1; j <= randomReviews[reviewIndex]; j += 1) {
      const createdAt = faker.date.between('2020-01-01', '2020-05-05').toString().replace(/G.+/g, 'PST');
      const subject = faker.lorem.words();
      const comment = faker.lorem.sentence();
      const rating = randomRatings[index];
      const recommended = faker.random.boolean();
      const isHelpful = faker.random.number();
      const isNotHelpful = faker.random.number();
      const playExperience = randomExp[index];
      const difficulty = randomDiff[index];
      const valueForMoney = randomValue[index];
      const buildTime = randomBuildTimes[index];

      fileContent += `${userId}, ${i}, '${createdAt}', '${subject}', '${comment}', ${rating}, ${recommended}, ${isHelpful}, ${isNotHelpful}, ${playExperience}, ${difficulty}, ${valueForMoney},${buildTime}\n`;
      //increment or reset index
      (index === 19) ? index = 0 : index += 1;
      (userId === 100) ? userId = 1 : userId += 1;
    }
    (reviewIndex === 19) ? reviewIndex = 0 : reviewIndex += 1;
    //reset filecontent ecery 300k entries due to string max-length of V8
    if ((i+1) % 300000 === 0) {
      writeStream.write(fileContent, (err) => {
        if (err) {
          console.log('error while writing pgData' , err)
        } else {
          console.log(`the Reviews file is successfully created`);
        }
      })
      fileIndex += 1;
      fileContent = '';
    }
  }
  //write the remaining entries
  writeStream.write(fileContent, (err) => {
    if (err) {
      console.log('error while writing pgData' , err)
    } else {
      console.log(`the Reviews file is successfully created`);
      writeStream.end();
    }
  })
}

seedUsers();
seedProducts(10000000);
seedReviews(10000000);
