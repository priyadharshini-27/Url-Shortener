const express = require("express");
const bodyParser=require('body-parser')
const Url = require('./models/url');
const connectDB =require("./config/db");

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));

//ejs
app.set('view engine', 'ejs');

//connected to mongodb
connectDB();
//get method
app.get('/', (req, res) => {
  res.render("home");
  });

//post method
app.post('/shorturl', (req, res) => {
  const longurl=req.body.longurl;
  console.log(longurl);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
