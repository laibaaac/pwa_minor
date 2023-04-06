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


