import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 75 },
    { duration: '2m', target: 90 },
    { duration: '2m', target: 110 },
    { duration: '2m', target: 130 },
  ],
  // vus: 600,
  // duration: '2m',
};

export default function() {
  let productId = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:8080/api/products/${productId}/reviews`);
  check(res, {
    "Status 200: ": (result) => result.status == 200,
    "Error Rate": (r) => r.status !== 200,
    "Transaction time < 2000ms: ": (result) => result.timings.duration < 2000,
    })
    sleep(0.1);
};
