const express = require('express');
//express ophalen 
const app = express();
const axios = require('axios');
const compression = require('compression');
let options = { maxAge: '2y' };
const port = 3000;
// waar het op draait 
const minifyHTML = require('express-minify-html');

app.use(express.static('public', options));
app.use('/public', express.static(__dirname + '/public/'));
app.use(compression());
// voor mijn public files


app.set('view engine', 'ejs');
// hier spreek ik mijn ejs aan 
// data die ik wil renderen komt dan res.render dan id en parameter 

app.use(minifyHTML({
  override:      true,
  exception_url: false,
  htmlMinifier: {
      removeComments:            true,
      collapseWhitespace:        true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes:     true,
      removeEmptyAttributes:     true,
      minifyJS:                  true
  }
}));

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
        data = response.data;
        const filteredQuotes = data.filter(quote => quote.quoteId === req.params.id); 
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

// Offline
app.get('/offline', (req, res) => {

  res.render('offline', {
      title: 'offline',
      pageTitle: 'You are offline'
  });
  console.log("hello")
}); 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


// app.use( (req, res) => {
//     res.status(404).send('error 404: file not found');
// });


module.exports = app;