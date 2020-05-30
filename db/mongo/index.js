const mongoose = require('mongoose');

/* Comment this in to use mongoDb
mongoose.connect('mongodb://localhost/reviewsDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoDb = mongoose.connection;

mongoDb.on('error', console.error.bind(console, 'connection error:'));
mongoDb.once('open', () => {
  console.log(' Connected to mongoDB')
  console.log(`--------------------`)
});

*/

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
  username: String,
});

const productSchema = new mongoose.Schema({
  product_name: String,
  id: Number,
  reviews: [
    {
      id: Number,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema'
      },
      created_at: Date,
      comment: String,
      subject: String,
      rating: Number,
      recommended: Boolean,
      is_helpful: Number,
      is_not_helpful: Number,
      play_experience: Number,
      difficulty: Number,
      value_for_money: Number,
      build_time: Number,
    }
  ]
})

const Users= mongoose.model('Users', userSchema);
const Products = mongoose.model('Products', productSchema);

// Comment this in to use mongo Db
// module.exports = { mongoDb, Users, Products }
