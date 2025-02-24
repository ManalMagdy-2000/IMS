const app = require("./api/app");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const express = require('express');


app.get('/', (req, res) => {
  res.send('🚀 API is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
