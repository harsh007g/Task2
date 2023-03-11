const csvtojson = require('csvtojson');
const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  const date = new Date();
  csvtojson()                                  //  (To access data http://127.0.0.1:3002/api/data)  //
    .fromFile('./flipkartoppo_pages.csv')        // Path of file to fetch data and convert it in Json format
    .then((json) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');   //(Data will be Displayed on this locahost)
      res.json(json);
    });
  // console.log("Request received and response sent! ", Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
});

app.listen(3002, () => {
  console.log('Server listening on port 3002.');
});
