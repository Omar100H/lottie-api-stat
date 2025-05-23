const express = require('express');
const app = express();
const path = require('path');

// Serve files from the current directory under /api
app.use('/api', express.static(path.join(__dirname, '.')));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running...');
});
