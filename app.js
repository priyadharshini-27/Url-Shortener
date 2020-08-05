const express = require("express");
const connectDB =require("./config/db");

const app = express();

app.set('view engine', 'ejs');
//connect to MongoDB
connectDB();


app.use(express.json({ extented: false }));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/url'));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`);});
