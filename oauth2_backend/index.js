const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();
const cors = require('cors');

const authRouter = require('./routes/authRouter')
require('./models/dbConnection')


app.use(cors());
app.use('/auth/', authRouter); 



app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT} `);
})