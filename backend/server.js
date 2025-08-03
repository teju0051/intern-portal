const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); 


const internData = {
  name: "Ashwini Panchal",
  referralCode: "ashwini26",
  donationsRaised: 261100
};

app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
