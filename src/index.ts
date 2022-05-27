import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Express + Typescript Hello World.")
})

app.listen(port, ()=> {
  console.log(`Express and Typescript Demo app listening on port ${port}`)
})