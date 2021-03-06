//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import route from "./routes/index.js";
//import cors
import cors from "cors";
// construct express function
const app = express();

const url = "mongodb://localhost:27017/dht11";
// const url = "mongodb+srv://root:root123@dht11.h2rfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// connect ke database mongoDB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/dht11", route);

// listening to port
app.listen("3000", () => console.log("Server Running at port: 3000"));