import supertest from 'supertest';
import db from '../../db';
import server from '../server';
import fixture from '../../legos/fixtures';

const request = supertest(server);

describe('tests api', () => {
  afterAll(async(done) => {
    db.connection.end();
    done();
  });

  // Test reviews apis
  it('should get a reviews for a product', async (done) => {
    const res = await request.get(`/api/products/${fixture.id}/reviews`);

    const expectedObjKeys = ['productName', 'reviews', 'count'];
    const expectedReviewKeys = ['id', 'createdAt', 'rating', 'recommended', 'subject', 'isHelpful', 'isNotHelpful', 'experience', 'user'];
    const expectedExperienceKeys = ['playExperience', 'difficulty', 'value', 'buildTime'];
    const expectedUserKeys = ['name', 'age'];
    const review = res.body.reviews[0];

    expect(res.statusCode).toEqual(200);
    expect(review).toBeDefined();
    expect(review.experience).toBeDefined();
    expect(review.user).toBeDefined();
    expect(Object.keys(res.body)).toEqual(expect.arrayContaining(expectedObjKeys));
    expect(Object.keys(review)).toEqual(expect.arrayContaining(expectedReviewKeys));
    expect(Object.keys(review.experience)).toEqual(expect.arrayContaining(expectedExperienceKeys));
    expect(Object.keys(review.user)).toEqual(expect.arrayContaining(expectedUserKeys));
    done();
  });

  it('should 404 if the id does not exist', async (done) => {
    const res = await request.get('/api/products/null/reviews');
    expect(res.statusCode).toEqual(404);
    done();
  });

  it('should update a review incrementing helpfulness', async () => {
    // Get initial state of review
    const initialStateRes = await request.get('/api/products/1/reviews');
    const review = initialStateRes.body.reviews[0];

    const res = await request.put('/api/products/1/reviews/1')
      .send({action: '+', feedback: 'is_helpful'})
      .expect(200);

    // Test that review's is_helpful was incremented
    const updatedStateRes = await request.get('/api/products/1/reviews');
    const updatedReview = updatedStateRes.body.reviews[0];

    expect(updatedReview.isHelpful).toEqual(review.isHelpful + 1);
  });

  it('should update a review incrementing is_not_helpful', async () => {
    // Get initial state of review
    const initialStateRes = await request.get('/api/products/1/reviews');
    const review = initialStateRes.body.reviews[0];

    const res = await request.put('/api/products/1/reviews/1')
      .send({action: '+', feedback: 'is_not_helpful'})
      .expect(200);

    // Test that review's is_helpful was incremented
    const updatedStateRes = await request.get('/api/products/1/reviews');
    const updatedReview = updatedStateRes.body.reviews[0];

    expect(updatedReview.isNotHelpful).toEqual(review.isNotHelpful + 1);
  });
  it('should update a review with decrement is_helpful count', async () => {
    // Get initial state of review
    const initialStateRes = await request.get('/api/products/1/reviews');
    const review = initialStateRes.body.reviews[0];

    const res = await request.put('/api/products/1/reviews/1')
      .send({action: '-', feedback: 'is_helpful'})
      .expect(200);

    // Test that review's is_helpful was incremented
    const updatedStateRes = await request.get('/api/products/1/reviews');
    const updatedReview = updatedStateRes.body.reviews[0];

    expect(updatedReview.isHelpful).toEqual(review.isHelpful - 1);
  });

  it('should undo a review with decremnting is_not_helpful count', async () => {
    // Get initial state of review
    const initialStateRes = await request.get('/api/products/1/reviews');
    const review = initialStateRes.body.reviews[0];

    const res = await request.put('/api/products/1/reviews/1')
      .send({action: '-', feedback: 'is_not_helpful'})
      .expect(200);

    // Test that review's is_helpful was incremented
    const updatedStateRes = await request.get('/api/products/1/reviews');
    const updatedReview = updatedStateRes.body.reviews[0];

    expect(updatedReview.isNotHelpful).toEqual(review.isNotHelpful - 1);
  });

  it('should fetch a review', async () => {
    const res = await request.get('/api/products/1/reviews/1')
      .expect(response => {
        const body = response.body;
        expect(response.statusCode).toEqual(200);
        expect(body.id).toEqual(1);
      });
  });
});