## Server API

### Get restaurant info
  * GET `/api/products/:product_id/reviews`

**Path Parameters:**
  * `product_id` : product id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "productName": "String",
      "productId": "Number",
      "count": "Number",
      "reviews": [
        {
          "id": "Number",
          "isHelpful": "Number",
          "isNotHelpful": "Number",
          "rating": "Number",
          "recommended": "Boolean",
          "createdAt": "Date",
          "subject": "Text",
          "description": "Text",
          "users" : {
            "age": "Number",
            "name": "Text"
          },
          "experience": {
            "playExperience": "Number",
            "difficulty": "Number",
            "value": "Number",
            "buildTime": "Number",
          }
        },
        ...
      ]
    }
```

---
</br>

### Get A review votes count by review ID
  * GET `/api/products/:product_id/reviews/:review_id/votes`

**Path Parameters:**
  * `product_id` : product id
  * `review_id` : review id

**Success Status Code:** `200`

**Return**: JSON

```json
    {
      "id": "Number",
      "is_helpful": "Number",
      "is_not_helpful": "Number",
    }
```
---
</br>

### Update helpful and not-helpful count
  * PUT `/api/products/:product_id/reviews/:review_id`

**Path Parameters:**
  * `product_id` : product id
  * `review_id` : review id

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys

```json
    {
      "feeback": "is_not_helpful" || "is_helpful",
      "action": "+" || "-",
    }
```
---
</br>

### Delete a review
  * DELETE `/api/reviews/:review_id`

**Path Parameters:**
  * `review_id` : review id

**Success Status Code:** `204`

---
<br/>

### Add a review to a product
  * POST `/api/products/reviews/`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "productId": "Number",
      "userId": "Number",
      "rating": "Number",
      "recommended": "Boolean",
      "subject": "Text",
      "description": "Text",
      "playExperience": "Number",
      "difficulty": "Number",
      "value": "Number",
      "buildTime": "Number",
    }
```