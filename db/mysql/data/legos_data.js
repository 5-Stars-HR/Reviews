const users = [{ name: 'Adolph', age: 97 }, { name: 'Pinkie', age: 34 }, { name: 'Lonna', age: 104 }, { name: 'Casey', age: 57 }, { name: 'Alvaro', age: 75 }];

const products = [
  { name: 'batman' }, { name: 'superman' }, { name: 'luke' }, { name: 'leia' }, { name: 'robin' },
];

const experiences = [
  {
    play_experience: 4, difficulty: 4, value: 5, build_time: 5,
  },
  {
    play_experience: 2, difficulty: 5, value: 1, build_time: 50,
  },
  {
    play_experience: 4, difficulty: 2, value: 4, build_time: 18,
  },
  {
    play_experience: 4, difficulty: 1, value: 3, build_time: 2,
  },
  {
    play_experience: 5, difficulty: 5, value: 5, build_time: 15,
  },
];

const reviews = [
  {
    rating: 5, recommended: 1, subject: 'Fantastic build and impressive model.1', is_helpful: 5, is_not_helpful: 1, product_id: 1, experience_id: 1, user_id: 1, created_at: '2020-01-01', description: 'I’m an AFOL who has been a fan of LEGO for a very long time, especially LEGO Star Wars. I was very excited to see that this years UCS set was the A-Wing star fighter from ROTJ and I new when I saw it I’d have to buy it. I am very happy with the build, it looks like a lot of care went into this set and it really shows. Definitely looks good on the display stand and is a stand out LEGO model.',
  },
  {
    rating: 4, recommended: 1, subject: 'Super sleek, it looks fast!. 2', is_helpful: 3, is_not_helpful: 4, product_id: 1, experience_id: 2, user_id: 2, created_at: '2020-01-01', description: 'I’m an AFOL who has been a fan of LEGO for a very long time, especially LEGO Star Wars. I was very excited to see that this years UCS set was the A-Wing star fighter from ROTJ and I new when I saw it I’d have to buy it. I am very happy with the build, it looks like a lot of care went into this set and it really shows. Definitely looks good on the display stand and is a stand out LEGO model.',
  },
  {
    rating: 4, recommended: 1, subject: 'A+ for this A-Wing.3', is_helpful: 0, is_not_helpful: 9, product_id: 1, experience_id: 3, user_id: 3, created_at: '2020-01-01', description: 'I’m an AFOL who has been a fan of LEGO for a very long time, especially LEGO Star Wars. I was very excited to see that this years UCS set was the A-Wing star fighter from ROTJ and I new when I saw it I’d have to buy it. I am very happy with the build, it looks like a lot of care went into this set and it really shows. Definitely looks good on the display stand and is a stand out LEGO model.',
  },
  {
    rating: 1, recommended: null, subject: 'Beautiful UCS Model.4', is_helpful: 5, is_not_helpful: 1, product_id: 1, experience_id: 4, user_id: 4, created_at: '2020-01-01', description: 'I’m an AFOL who has been a fan of LEGO for a very long time, especially LEGO Star Wars. I was very excited to see that this years UCS set was the A-Wing star fighter from ROTJ and I new when I saw it I’d have to buy it. I am very happy with the build, it looks like a lot of care went into this set and it really shows. Definitely looks good on the display stand and is a stand out LEGO model.',
  },
  {
    rating: 2, recommended: null, subject: 'Pretty good...5', is_helpful: 2, is_not_helpful: 1, product_id: 1, experience_id: 5, user_id: 5, created_at: '2020-01-01', description: 'This is honestly one of the best sets this year...its a perfect blend of play set and display set...building it was very fun and surprisingly it wasnt very repetitive despite the walls looking the same..my only small issue was that i wish it had a base plate on the bottom..which would of been useful for when you want to pick up the set and hold the tie advanced...possibly could of added some stability but this set isnt supposed to be moved around and its an easy thing to add if you really want that(like it did)... Like many of my reviews i dont like to bore anyone with many details they might already know...Just know that if you are a Darth Vader fan(Like me) or a Lego Star wars fan then get this set...you will not regret it...it was a fun build and its a great display set for adults and a great play sets with kids..minifigures are great too, no krennic but its still a great group of figs...you can always add a Director Krennic minifigure to the mix anyway since hes not a difficult figure to get ;)... All in all an amazing set... Vader definitely has the high ground now! haha.',
  },
];

const images = [
  { url: 'localhost', review_id: 1 },
  { url: 'localhost', review_id: 1 },
  { url: 'localhost', review_id: 1 },
];

//  SELECT image_url from image table inner join reference table on image_id = reference.image_id
//  inner join product on product.id = reference.product_id where product.id = 1
//  reference table
//  id     product_id   image_id
//  1     1                2
//  2     1                3
//  3     1                5
//  4     1                6
//  5     2                2
//  6     2                4

// image table
// id .  image url
// 1       www...
// 2       www..
// 3       www...
// 4       www...
// 5       www...

// product table
// id
// 1
// 2
// 3
// 4
// 5

// create your product
// create your images

// for (let i = 0; i < 100; i += 1) {
//   randomImageCount = // get random number
//   // loop through the image count
//   //    get 5 unique image id's
//   //    insert reference with i, unique image id
// }
// for each product
// get a random number of images to attach to the product
// create reference
// insert reference (product_id, image_id) values (1, 4)
// insert reference (product_id, image_id) values (1, 6)
// insert reference (product_id, image_id) values (1, 2)
// insert reference (product_id, image_id) values (1, 9)

// insert reference (product_id, image_id) values (2, 2)
// insert reference (product_id, image_id) values (2, 1)
// insert reference (product_id, image_id) values (2, 8)
// insert reference (product_id, image_id) values (2, 3)

module.exports = {
  users,
  images,
  products,
  reviews,
  experiences,
};
