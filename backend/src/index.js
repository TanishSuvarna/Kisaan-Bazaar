import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import path from 'path'
import cors from 'cors'
import userRouter from './routes/auth';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())


mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ca84dgx.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,)
.then(() => console.log("CONNECTION SUCCESSFULL"))
.catch((err) => console.log(err));



app.use("/api",userRouter); //SignIn/SignUp Normal Users

app.listen(process.env.PORT|| 5000, () => console.log("Listening"));
