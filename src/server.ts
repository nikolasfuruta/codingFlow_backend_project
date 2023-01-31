import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
  res.send("WORKING!")
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})