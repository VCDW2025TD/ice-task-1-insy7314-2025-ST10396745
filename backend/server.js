const https = require('https');
const fs = require('fs');
const express = require('express');
require('dotenv').config();

const app = express();
app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
const options = {
  key: fs.readFileSync('ssl/privatekey.pem'),
  cert: fs.readFileSync('ssl/certificate.pem'),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Secure API running at https://localhost:${PORT}`);
});
