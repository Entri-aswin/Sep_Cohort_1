import express from 'express'
import { connectDB } from './config/db.js'
const app = express()
const port = 3000


connectDB();



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test/:id',(req,res)=>{
    const {id}= req.params;
    console.log(id);
    res.json(' api accessed')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})