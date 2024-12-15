const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const filePath = __dirname + '/index.html';
  try {
    res.sendFile(filePath);
  } catch (err) {
    console.error('Error sending file:', err);
    res.status(404).send('File not found');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});