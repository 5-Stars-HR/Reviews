const fixture =
{
  productName: 'batman',
  id: 1,
  count: 3,
  reviews: [
    {
      id: 1,
      createdAt: 'Janurary 1, 2020',
      rating: 4,
      recommended: 1,
      subject: 'lorum ipsum 3',
      isHelpful: 0,
      isNotHelpful: 9,
      experience:
      { playExperience: 4, difficulty: 2, value: 4, buildTime: 18 },
      user: { name: 'Lonna', age: 104 }
    }, {
      id: 2,
      createdAt: 'Janurary 1, 2020',
      rating: 1,
      recommended: null,
      subject: 'lorum ipsum 4',
      isHelpful: 5,
      isNotHelpful: 1,
      experience: { playExperience: 4, difficulty: 1, value: 3, buildTime: 2 },
      user: { name: 'Casey', age: 57 }
    }, {
      id: 3,
      createdAt: 'Janurary 1, 2020',
      rating: 4,
      recommended: null,
      subject: 'lorum ipsum 5',
      isHelpful: 2,
      isNotHelpful: 1,
      experience:
      { playExperience: 5, difficulty: 5, value: 5, buildTime: 15 },
      user: { name: 'Alvaro', age: 75 }
    }],
};

const aggregatedReview = {
  countFiveReviews: 0,
  countFourReviews: 2,
  countThreeReviews: 0,
  countTwoReviews: 0,
  countOneReviews: 1,
  avgRating: 3,
  avgRecommendation: 33.3,
  totalReviews: 3,
  experiences: {
    playExperience: '4.4',
    difficulty: '2.7',
    value: '4',
  },
};
fixture.aggregatedReview = aggregatedReview;

module.exports = fixture;