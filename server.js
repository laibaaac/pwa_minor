const express = require('express');
//express ophalen 
const app = express()
const port = 3000
// waar het op draait 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

