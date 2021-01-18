//starting point of the server
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
//import router from "./routes/posts";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

// app.get("/",(req, res) => {
//     res.send("Hello to Memories API");
// })

//const CONNECTION_URL = "mongodb+srv://eswarraob1:Eswar412@cluster0.dxuoj.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)) )
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);