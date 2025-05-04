const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

app.get('/', (req, res) => {
  res.send("Lottie Editor API is working!");
});

app.post('/api/preview', (req, res) => {
  const lottieData = req.body;
  if (!lottieData) return res.status(400).send("No Lottie JSON provided");
  res.json({ status: "success", data: lottieData });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
