const express = require('express');
const app = express();
const port = 3000;

app.get('/cart', (req, res) => {
  res.send('Your cart is empty!');
});

app.listen(port, () => {
  console.log(`Cart app running on port ${port}`);
});

