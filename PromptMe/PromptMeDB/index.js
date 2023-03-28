import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import Prompts from './Models/prompts.js'

import authRoutes from './routes/auth.js';


dotenv.config();



const app = express();
const PORT = process.env.PORT || 8000;

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB CONNECTION ERROR: ", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api", authRoutes);

app.get('/', (req, res) => {
    res.json({ success: true, message: 'Database Connected' })
})


const server = app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});





