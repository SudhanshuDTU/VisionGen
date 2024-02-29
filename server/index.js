import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDb/connect.js";
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);


app.get("/", (req, res) => {
  res.send("hello from AI");
});

const startServer = async () => {
    app.listen("4400", () => {
      console.log(`server started at port ${4400}`);
    });
  try {
    connectDB(process.env.MONGODB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};


startServer();
