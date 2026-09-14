EXPRESS.JS REST API - 100 PRODUCTS

1. Open this folder in VS Code.
2. Open Terminal.
3. Run:
   npm install
4. Run:
   npm start

Server:
http://localhost:3000

API endpoints:
GET    /api/products
GET    /api/products/1
POST   /api/products
PUT    /api/products/1
DELETE /api/products/1

POST/PUT JSON example:
{
  "name": "New Product",
  "price": 999,
  "category": "Electronics",
  "inStock": true
}

You can test all endpoints using Thunder Client or Postman.
