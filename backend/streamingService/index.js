const express = require('express')
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

const cors = require('cors');


app.use(cors());

app.use(cookieParser());
app.use(express.json());

const healthRoutes = require('./routes/health.route')
const streamingRoutes = require('./routes/streaming.route')

app.use('/health', healthRoutes)
app.use('/streaming', streamingRoutes)

const port = process.env.PORT || 3002; 
app.listen(port, () => {
    console.log(`NPS Calculation service running at port ${process.env.PORT}`)
})