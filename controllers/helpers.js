const helpers = require('../legos/helpers');

const getReviewsData = function (data) {
  if (data.length === 0) {
    return {};
  }

  const reviews = data.map(data=> {
    return {
      id: data.id,
      createdAt: data.created_at,
      rating: data.rating,
      recommended: data.recommended,
      subject: data.subject,
      description: data.comment,
      isHelpful: data.is_helpful,
      isNotHelpful: data.is_not_helpful,
      experience: {
        playExperience: data.play_experience,
        difficulty: data.difficulty,
        value: data.value_for_money,
        buildTime: data.build_time,
      },
      user: {
        name: data.first_name,
        age: data.age
      }
    };
  });

  return {
    productName: data[0].product_name,
    productId: data[0].product_id,
    count: reviews.length,
    reviews
  };
};

module.exports = {
  getReviewsData,
};