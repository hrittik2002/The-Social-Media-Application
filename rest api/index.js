const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const cors = require('cors');
const multer = require("multer");
const path = require("path");

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
// app.use("/images", express.static(path.join(__dirname, "public/images")));

// app.use(express.json())
// app.use(helmet());
// app.use(morgan("common"))

// app.use("/api/users" , userRoute);
// app.use("/api/auth" , authRoute);
// app.use("/api/posts" , postRoute);

// // file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });
  
//   const upload = multer({ storage: storage });
//   app.post("/api/upload", upload.single("file"), (req, res) => {
//     try {
//       return res.status(200).json("File uploded successfully");
//     } catch (error) {
//       console.error(error);
//     }
//   });


// /** ROUTES **/
// // app.get("/", (req ,res)=>{
// //     res.send("welcome to homepage")
// // })
// // 
// app.listen(8000 , ()=>{
//     console.log("Backend server is running!");
// })

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8000, () => {
  console.log("Backend server is running!");
});