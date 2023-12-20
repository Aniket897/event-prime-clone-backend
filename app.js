import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import router from "./routes/index.js";


const app = express();
app.use(express.json());
app.use(bodyParser.json());



app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
}));


app.use(router)

export default app;