const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello from deployed version</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...\nhttp://localhost://${PORT}`);
});
