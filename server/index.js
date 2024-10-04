import express from "express";
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";
const app = express();
const port = 3000;

connectDB();


app.get('/',(req,res,next)=>{
  res.json({message:'hello world'})
})



app.use('/api',apiRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

