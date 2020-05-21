
// let users = mongoose.Schema({
//   first_name: String,
//   last_name: String,
//   username: {
//     type: String,
//     unique: true,
//   },
// });

let products = mongoose.Schema({
  _id: Number,
  product_name: String,
});

let reviews = mongoose.Schema({
  _id: Number,
  product_id: Number,
  user: {
    first_name: { type: String },
    last_name: { type: String },
    username: { type: String },
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

