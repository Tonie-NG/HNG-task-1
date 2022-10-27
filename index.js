const express = require('express')
const cors = require("cors");
const app = express();
const taskRoute = require("./taskRoute");
const dotenv = require("dotenv");


dotenv.config();
app.use(express.json())
app.use(cors({
    origin: "*"
}));

app.use("/task", taskRoute);

port = process.env.PORT || 5001

app.listen(port, () => {
    console.log(`Server is running`);
});