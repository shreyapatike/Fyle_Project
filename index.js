const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000


app.get('/shreya', (req, res) => {
  res.send('working!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port} 🔥`)
})