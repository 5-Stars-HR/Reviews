import React from 'react';
import ReactDOM from 'react-dom';

import ReviewsOverview from './components/ReviewsOverview';

const ReviewsOverviewEl = document.getElementById('reviews-overview');
if (ReviewsOverviewEl) {
  ReactDOM.render(<ReviewsOverview />, ReviewsOverviewEl);
}