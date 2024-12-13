const express = require('express');
const app = express();
const port = 3000; // Or your preferred port

app.get('/status', (req, res) => {
  const uptime = process.uptime();
  res.json({ status: 'OK', uptime: uptime });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});