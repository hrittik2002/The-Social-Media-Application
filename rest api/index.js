const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

const app = express();
dotenv.config();

/** CONNECTING TO MONGODB **/
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection;
db.on("error" , console.error.bind(console , "connection error:"))
db.once("open" , () =>{
    console.log("Database connected")
});

/** MIDDLEWARES **/
app.use(express.json())
app.use(helmet());
app.use(morgan("common"))

app.use("/api/users" , userRoute);
app.use("/api/auth" , authRoute);
app.use("/api/posts" , postRoute);

/** ROUTES **/
app.get("/", (req ,res)=>{
    res.send("welcome to homepage")
})

app.listen(8000 , ()=>{
    console.log("Backend server is running!");
})