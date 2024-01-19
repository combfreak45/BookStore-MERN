import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json())

app.use(cors({
    origin: 'https://book-store-frontend-pied.vercel.app/',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.get("/", (req, res) => {
  res.status(200).send("HI ITS HOME");
});

app.use('/books',booksRoute)

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("APP IS CONNECTED");
    app.listen(PORT, (req, res) => {
      console.log(`I m listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
