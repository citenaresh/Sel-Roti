import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/selroti', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
