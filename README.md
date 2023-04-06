# Progressive web app!
<img width="1434" alt="fototje" src="https://user-images.githubusercontent.com/94360732/230268673-b0b233f9-afdc-4922-a201-22c887e67dd5.png">

Voor het vak Progressive Web app, moeten wij een server side gerenderde webapplicatie maken. Ook moeten we functionaliteiten toevoegen op basis van de Service Worker. Ten slotte zullen we een reeks optimalisaties doorvoeren om de prestaties van de applicatie te verbeteren.
Kom meekijken naar het proces achter mijn project!

#Tools 
- EJS 
- CSS
- JavaScript
- Google sheet API
- NPM
- NodeJs
- Express
- Service worker 
- SASS
- Minify
- Uglify,js


# installatie

## npm installeren 
in je terminal zet je
```
nvm install 19.8.1
```
## express 
```
npm install express
<!-- npm install <package-name> -->
```
### express implementeren 
Om Express te kunne gebruiken moet je een aantal dingen toepassen in je code (in je server.js). 
** Exporteren van Express: **
```
const express = require('express');
//express ophalen 
const app = express();
const port = 3000;
```
** route creeeren **
Om je pagina te kunnen zien moet je in je server.js file dit zetten
```
app.get('/', function(req, res) {
  res.send('Hello World!');
});
```
** Server starten **
```

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
```
## package.json 
Een package.json aanmaken kan je heel makkelijk door in je terminal npm init te zetten, dan voer je een paar gegevens in! 
mijn package.json ziet er zo uit!
```
{
  "name": "pwa_minor",
  "version": "1.0.0",
  "description": "back-end 2.0 voor de minor web",
  "main": "server.js",
  "directories": {
    "example": "examples"
  },
  "scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "minify:server": "uglifyjs main.js -c -m -o main.min.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/laibaaac/pwa_minor.git"
  },
  "keywords": [
    "express",
    "ejs",
    "nodemon",
    "routing"
  ],
  "author": "Laiba Choudhry",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/laibaaac/pwa_minor/issues"
  },
  "homepage": "https://github.com/laibaaac/pwa_minor#readme",
  "dependencies": {
    "axios": "^1.3.4",
    "dotenv": "^16.0.3",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "express-minify-html": "^0.12.0",
    "request": "^2.88.2",
    "uglify-js": "^3.17.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.21"
  }
}
```
## EJS (Template engine)
Hier laat ik je zien hoe je EJS in je code implementeerd en hoe je het precies kan gebruiken. 

### installeren
``` 
npm install ejs

```
### Server.js 
in je server.js file zet je dan de volgende 
```
app.set('view engine', 'ejs');
app.use(express.static('public'));  
<!-- EJS bestanden komen in public te staan om die te zien moet je de bovenste code erin zetten -->
```
### Syntax
EJS is iets anders dan html, je hebt een bepaalde syntax nodig om ejs in je html te kunnen implementeren. 
Zo kan het bijvoorbeeld eruit zien:
```
<%= variable %> - voor een variabele
 <% if (condition) { %> ... <% } %> - Javascript kunnen gebruiken
 <% for (var i = 0; i < items.length; i++) { %> ... <% } %> - Array vanuit js 
 
 ```

## Quotes applicatie gebruiken 
Om mijn applicatie te kunnen gebruiken, moet je de volgende doen. 
Zet in je terminal 
```
git clone https://github.com/laibaaac/pwa_minor.git
```

## Server starten 
```
npm start

```
# User Story
"As a student front-end developer i want to look at affirmative web design quotes, so that imposter syndrome doesn't hit me hard." Is de user story die ik had gekozen tijdens WAFFS. Voor PWA is mijn user story "As a user, i want to look at a detailed page of authors that can inspire me and the website can be accessible at all times" 

# Build tools
Build tools zijn handige tools om in je code te kunnen implementeren. Zo kun je herhalende taken vermijden dmv een build tool.
Ik heb naar verschillende tools onderzoek gedaan zoals webpack, gulp, grunt. Uiteindelijk heb ik voor een paar build tools gekozen die handig leken voor mijn applicatie. 
Ik heb de volgende build tools gebruikt:
- SASS (voor css)
- Uglify js (voor client side javascript)
- minify (voor html en andere files, zo kan ik de files kleiner maken)

## SASS
Sass gebruik ik voornamelijk voor mijn css, je kan makkelijk met SASS elementen nesten, bij normale css moet je per element helemaal uitschrijven stap voor stap. Dit kan best langdradig zijn. Geen zorgen SASS to the rescue. 
**install **
``` 
npm install sass --save-dev
``` 
** voorbeeld code **
```
 nav ul {
    display: grid;
    grid-template-columns: 5em 5em;
    grid-template-rows: .5em;
    gap: 8em;
  
    li {
      list-style: none;
      position: relative;
      left: 65vmin;
  
      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 25px;
  
        &:hover {
          color: rgb(219, 112, 147);
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
```
## Uglify,js
Tijdens WAFFS had ik client side javascript files, maar voor het vak PWA moesten wij onze client side javascript omzetten naar server side. Hierdoor had ik geen client side javascript. Als ik in de toekomst mijn website wil uitbreiden en toch wel client side javascript wil gebruiken, heb ik alvast de build tool uglify gedownload. Zo kan ik makkelijk aan mijn client side javascript starten!

**install **
```
npm install uglify,js
```

## Build tools in npm scripts (minify) 
Ik heb een paar build tool npm scripts gemaakt, zodat ik makkelijk mijn bestanden kan minimaliseren, dit geldt voor css bestanden, html bestanden en zelfs javascript bestanden. Heel handig dus!

**install**
Minify is een extension die je kan downloaden, ik heb het zelf via vs code geactiveerd. Je hoeft het niet helemaal via je de terminal te downloaden. 

**implementeren**
in mijn server.js heb ik de volgende code gezet, hier wordt via de backend mijn html minified 
```

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
```
**CSS**
een voorbeeld hoe mijn minified file van css eruit ziet. Alles staat naast elkaar!
```
*,::after,::before{box-sizing:border-box}body{width:100%;height:100vh;background-color:#f8c8dc;font-family:Verdana,Geneva,Tahoma,sans-serif}header{background-color:#e0b0ff;position:fixed;height:8vmin;padding:0;top:0;left:0;right:-100px}nav ul{display:grid;grid-template-columns:5em 5em;grid-template-rows:.5em;gap:8em}nav ul li{list-style:none;position:relative;left:65vmin}nav ul li a{text-decoration:none;color:#000;font-weight:700;font-size:25px}nav ul li a:hover{color:#db7093;background-color:rgba(255,255,255,.5)}h1{font-size:1.5em;font-weight:700;text-align:center}h2{font-size:1.5em;font-weight:700}h3{font-size:1.5em;font-weight:700;text-align:center}a,h1,h2,h3,p{font-family:sans-serif}img{width:100vmin;position:absolute;left:22%;top:15%}#about,#home,#offline,#quotes{height:fit-content;width:80vmin;position:absolute;padding:0;transform:translate(60% ,150%)}#home{top:-65%;left:.1%}#home ul li{list-style:none;color:#000;text-decoration:none}#home ul li a{text-decoration:none;line-height:2em;color:#000}#home ul li:hover{background-color:#e0b0ff}#about{top:-5%;left:-.1%;transform:translate(60% ,80%)}#about p{font-size:1.2em;line-height:1.1em}#qoutes{top:-5%;left:-.1%}#quotes ul li{list-style:none;position:relative;font-size:1.45em;font-weight:400;top:2em}#quotes img{width:3.5em;
```

# API
Zoals ik al eerder zei de client side javascript moest verandert worden naar server side. Dit betekent dat ik op een andere manier mijn google sheet api moest gaan fetchen, daarvoor heb ik de package AXIOS gedownload. Het maakt fetchen makkelijker aan de server side!

## install
```
npm install axios
```

## Code 
Mijn fetch moet ik meteen onder mijn router plaatsen, dat betekent dat dit code in je server.js file komt. Axios is heel simpel, je gebruilt in plaats van fetch axios!
``` 
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
```
# Server.js 
Mijn server.js code ziet er uiteindelijk zo uit!!!

``` 
const express = require('express');
//express ophalen 
const app = express();
const axios = require('axios');
const port = 3000;
// waar het op draait 
const minifyHTML = require('express-minify-html');

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public/'));
// voor mijn public files
// app.use(express.static('Routes'));

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
}); 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


// app.use( (req, res) => {
//     res.status(404).send('error 404: file not found');
// });


module.exports = app;
```

# Service worker

```
const staticCacheName = 'site-static-v1';
const assets = [
    "/offline", 
    '/css/qt.min.css'
];

self.addEventListener("install", (event) => {

    // The promise that skipWaiting() returns can be safely ignored.
    // bron: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting 
    self.skipWaiting();
    
    // console.log("Service worker has been installed")
    event.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log("catching shell assets");
        cache.addAll(assets);
    })
  )
});
  
// activate service worker
self.addEventListener("activate", (event) => {
    // console.log("Service worker has been activated")

});

self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cacheRes) => {
        if (cacheRes) {
          return cacheRes;
        }
        return fetch(event.request).catch(() => {
          return caches.match("/offline");
        });
      })
    );
  });
 ```

## manifest.json
Manifest.json lijkt wel op een package.json, alleen de manifest is erg nodig tijdens de gebruik van mijn service worker. 
Ik geef in de manifest.json een paar dingen mee, net als een background color en theme color voor mijn website. 
Verder heb ik verschillende maten van de icon, zodat er een fallback is van mijn logo. 
```
{
    "name": "Imposter syndrome quotes",
    "short_name": "Imposter syndrome",
    "start_url": "/",
    "scope":"/",
    "display":"standalone",
    "background_color": "#E0B0FF",
    "theme_color": "#E0B0FF",
    "orientation":"portrait-primary",
    "icons": [
        {
            "src":"/img/icons/icon-192x192.png",
            "type": "image/png",
            "sizes:":"192x192", 
            "purpose": "any maskable"
        },

    {
        "src": "/img/icons/icon-256x256.png",
        "type": "image/png",
        "sizes:": "256x256",
        "purpose": "any maskable"
    },

    {
        "src": "/img/icons/icon-384x384.png",
        "type": "image/png",
        "sizes:": "384x384",
        "purpose": "any maskable"
    },

    {
    "src": "/img/icons/icon-512x512.png",
    "type": "image/png",
    "sizes": "512x512",
    "purpose": "any maskable"
    }
    
    ],
    "description":"An app with different quotes to cheer up a student"
}
```

## cache
In de cache bewaar ik files die ik terug wil zien, als mijn website bijvoorbeeld offline is. Dit heb ik geïmplementeerd door middel van een service worker. 
## cache
<img width="1200" alt="Schermafbeelding 2023-04-06 om 06 57 09" src="https://user-images.githubusercontent.com/94360732/230275650-dffafb7a-5ec8-4043-9035-6310f56cb7a2.png">

# Activity Diagram
![Untitled (3)](https://user-images.githubusercontent.com/94360732/230277341-b0ac44cf-ceb3-4309-ad62-7a46fca2c7d6.jpg)


# Critical Rendering Path
Om de performance te testen heb ik de extension lighthouse gebruikt, een hele handige extension om verschillende onderdelen te testen en dan krijg je de test score terug. Ook werd er aangegeven wat ik moet verbeteren om 100% voor verschillende onderdelen te krijgen. Zie afbeeldingen voor verbeteringen en resultaten. 
<img width="488" alt="Schermafbeelding 2023-04-05 om 18 33 37" src="https://user-images.githubusercontent.com/94360732/230275786-b16cb3fd-03ed-470b-98ca-415b45f623aa.png">

<img width="478" alt="Schermafbeelding 2023-04-05 om 18 33 58" src="https://user-images.githubusercontent.com/94360732/230277696-d52488a2-1f98-4c89-8259-e6ada633c19d.png">

<img width="476" alt="Schermafbeelding 2023-04-05 om 18 34 21" src="https://user-images.githubusercontent.com/94360732/230277708-72f805a8-b3cc-458f-abd0-5bef1982b550.png">

<img width="475" alt="Schermafbeelding 2023-04-05 om 18 34 30" src="https://user-images.githubusercontent.com/94360732/230277723-baa86f6e-66e4-4a3b-8ba1-2877dacd5aae.png">


<img width="1200" alt="Schermafbeelding 2023-04-06 om 00 55 29" src="https://user-images.githubusercontent.com/94360732/230275805-43ba15f0-4eff-4618-9be1-49355e42ad99.png">

<img width="1036" alt="Schermafbeelding 2023-04-06 om 07 20 03" src="https://user-images.githubusercontent.com/94360732/230278771-d15fd784-9fcd-487f-a8ee-c9b56d7b8a3c.png">

## extra
wat ik nog extra heb gedaan om mijn critical rendering path te verbeteren is het minifien van mijn css en html. (zie boven bij minify, hoe ik dat precies heb gedaan)

# Railway (hosting)
voor de hosting van mijn website heb ik de applicatie railway gebruikt, je kan railway toegang geven tot je github en kan je makkelijk je repo live zetten. Heel handig! hoef ik niet steeds mijn wijzigingen door te geven aan mijn hosting. 
Een kleine overzicht hoe railway eruit ziet:
<img width="1435" alt="Schermafbeelding 2023-04-06 om 06 58 44" src="https://user-images.githubusercontent.com/94360732/230275852-407343a1-1336-41bf-9134-53b50ee9ae52.png">





