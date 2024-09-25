import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log('hello');
console.log('hello2');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})