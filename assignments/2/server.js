const express = require('express');
const products = require('./data/products');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Products REST API is running', totalProducts: products.length });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.post('/api/products', (req, res) => {
  const { name, price, category, inStock } = req.body;
  if (!name || price === undefined || !category) {
    return res.status(400).json({ message: 'name, price and category are required' });
  }
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price: Number(price),
    category,
    inStock: inStock !== undefined ? Boolean(inStock) : true
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products[index] = {
    ...products[index],
    ...req.body,
    id
  };
  res.json(products[index]);
});

app.delete('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = products.splice(index, 1)[0];
  res.json({ message: 'Product deleted successfully', product: deletedProduct });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
