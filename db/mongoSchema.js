
const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  username: { type: String, unique: true },
  reviews: [{type: Schema.Types.ObjectId, ref: 'Reviews'}]
});

const productSchema = mongoose.Schema({
  product_name: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'Reviews'}]
});

const reviewSchema = mongoose.Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Products'
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  created_at: Date,
  comment: String,
  rating: Number,
  recommended: Boolean,
  is_helpful: Number,
  is_not_helpful: Number,
  play_experience: Number,
  difficulty: Number,
  value_for_money: Number,
  build_time: Number,
})

const Users= mongoose.model('Users', userSchema);
const Products = mongoose.model('Products', productSchema);
const Reviews = mongoose.model('Reviews', reviewSchema);