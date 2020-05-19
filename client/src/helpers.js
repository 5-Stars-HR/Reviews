const getSumExperience = (data) => {
  return data.reduce((result, review) => {
    let experience = review.experience;
    result.playExperience += experience.playExperience;
    result.difficulty += experience.difficulty;
    result.value += experience.value;
    return result;
  }, {playExperience: 0, difficulty: 0, value: 0});
};

const aggregateExperiences = (data) => {
  const sums = getSumExperience(data);

  Object.keys(sums).forEach((key) => {
    sums[key] = (Math.round((sums[key] / data.length) * 10) / 10).toFixed(1);
  });
  return sums;
};

const getAggregatedReviewsData = (data) => {
  const initialReviewsData = {
    1: {count: 0, percentage: 0},
    2: {count: 0, percentage: 0},
    3: {count: 0, percentage: 0},
    4: {count: 0, percentage: 0},
    5: {count: 0, percentage: 0}
  };
  const aggregatedReviewsData = data.reduce((result, review) => {
    result[review.rating].count += 1;
    return result;
  }, initialReviewsData);

  Object.values(aggregatedReviewsData).forEach((review) => {
    review.percentage = (review.count / data.length) * 100;
  });

  return aggregatedReviewsData;
};

const getOverallRating = (data) => {
  const totalRatings = data.reduce((total, review) => {
    return total + review.rating;
  }, 0);
  return (Math.round((totalRatings / data.length) * 10) / 10);
};

const getOverallRecommendation = (data) => {

};

const aggregateData = function (data) {
  const aggregatedReviewsData = getAggregatedReviewsData(data);
  const aggregatedExperiences = aggregateExperiences(data);
  const overallRating = getOverallRating(data);
  const recommendationResult = data.reduce((total, review) => {
    return review.recommended ? total + 1 : total;
  }, 0) / data.length * 100;
  const overallRecommendation = Math.round(recommendationResult * 10) / 10;

  return {
    'data': {
      overallRating: overallRating || 1,
      overallReviewCount: data.length,
      overallRecommendation,
      aggregatedReviewsData,
      aggregatedExperiences
    }
  };
};
export default {aggregateData};