const express = require('express');
//express ophalen 
const app = express();
const axios = require('axios');
const port = 3000;
// waar het op draait 

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public/'));
// voor mijn public files
// app.use(express.static('Routes'));

app.set('view engine', 'ejs');
// hier spreek ik mijn ejs aan 
// data die ik wil renderen komt dan res.render dan id en parameter 



app.get('/', (req, res) => {
    let data;
    axios.get('https://opensheet.elk.sh/1W7nmmrM1C2uX6_nRSsXP5x3A7R1A9b5P6Q-fJhtwLQ8/blad1')
        .then((response) => {
            console.log('result', response.data)
            data = response.data
            res.render('index', {
                title: 'Home',
                data: data
            });

        }).catch((error) => {
            console.log('error', error)
        })
})

app.get('/quotes/:id', (req, res) => {
    let data;
    axios.get('https://opensheet.elk.sh/1W7nmmrM1C2uX6_nRSsXP5x3A7R1A9b5P6Q-fJhtwLQ8/blad1')
      .then((response) => {
        console.log('result', response.data);
        data = response.data;
        const filteredQuotes = data.filter(quote => quote.id === req.params.id); 
        res.render('quotes', {
          title: 'Random Quote',
          data: filteredQuotes 
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  });

  app.get('/about', (req, res) => {

    res.render('about', {
        title: 'About',
    });
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


// app.use( (req, res) => {
//     res.status(404).send('error 404: file not found');
// });
