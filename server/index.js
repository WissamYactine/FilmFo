import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import moviesRoutes from './routes/movies.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/movies", moviesRoutes);
app.use("/user", userRoutes);

// app.get('/', (res, req) => {
//     res.send('APP IS RUNNING.');
// })

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
