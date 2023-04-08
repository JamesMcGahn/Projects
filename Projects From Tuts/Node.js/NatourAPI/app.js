const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ success: true });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
