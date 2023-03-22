const express = require('express');
//express ophalen 
const app = express()
const port = 3000
// waar het op draait 

app.use(express.static('public'));
// voor mijn public files
app.use(express.static('Routes'));

app.set('view engine', 'ejs');
// hier spreek ik mijn ejs aan 
// data die ik wil renderen komt dan res.render dan id en parameter 

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


app.use( (req, res) => {
    res.status(404).send('error 404: file not found');
});
