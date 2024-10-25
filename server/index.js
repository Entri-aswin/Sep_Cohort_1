import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";
import cors from "cors";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173",'https://sep-batch-learning-app-frontend.vercel'],
    credentials:true,
    methods:['GET',"POST","PUT","DELETE"]
}));
app.use(cookieParser());

connectDB();

app.get("/", (req, res, next) => {
    res.json({ message: "hello world" });
});

app.use("/api", apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
