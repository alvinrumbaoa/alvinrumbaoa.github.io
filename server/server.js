const express = require('express');
const app = express();
const cors = require("cors");
const port = 5000;   
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config.js"); //  connecting to mongoose
require("./routes/")(app);


app.listen(port , () => console.log("Connected to  localhost " + port ));

