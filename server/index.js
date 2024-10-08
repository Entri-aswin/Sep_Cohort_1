import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/", (req, res, next) => {
    res.json({ message: "hello world" });
});

app.use("/api", apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


