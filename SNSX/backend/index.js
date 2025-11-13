const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("DBと接続中・・・");
}).catch((err) => {
    console.log(err);
})

// ミドルウェア
app.use(cors());
app.use(express.json());

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.listen(PORT,() => console.log("さぁばぁ"));