## No more Imposter syndrome!!!

<img width="600" alt="Schermafbeelding 2023-03-09 om 11 37 47" src="https://user-images.githubusercontent.com/94360732/223999596-5fc46be7-22fb-4af4-b402-169f2e12ac18.png">


## Intro 
De afgelopen 4 weken hebben we een client side Single Page web App (SPA) gemaakt.
Op basis van de data uit de API dat gelinked is met mijn user story, heb ik een prototype gebouwd. 

## User story 
Officiele user story is "As a student Digital Design, I want to look at inspiring web design quotes, to get some fresh energy when I'm down while working on crazy deadlines"

Maar de afgelopen weken heb ik mijn eigen user story uitgewerkt. 
"As a student front-end developer i want to look at affirmative web design quotes, so that imposter syndrome doesn't hit me hard"
Ik wou deze user story uitwerken, omdat ik zelf imposter syndrome heb meegemaakt. Met mijn applicatie hoop ik dat ik studenten kan helpen die imposter syndrome hebben. Om dit uit te werken moet ik wel een bijpassend api hebben. 

## Api
Ik was lang opzoek naar een api die past bij mijn user story, maar kon die jammer genoeg niet vinden. Ik heb uiteindelijk gekozen om mijn eigen api te maken door middel van een spreadsheet vanuit google spreadsheet. Ik heb de volgende tutorial gevolgd https://benborgers.com/posts/google-sheets-json. Ben Borgers heeft een uitgebreide en makkelijk te volgen tutorial gemaakt. 
Ik vertel nog heel even hoe ik mijn api gemaakt:
1. spreadsheet gemaakt met quotes 
<img width="1216" alt="Schermafbeelding 2023-03-09 om 11 49 27" src="https://user-images.githubusercontent.com/94360732/224002155-f3206ec3-adbc-4ab7-90a8-ce095e778640.png">

2. Daarna heb ik de link van Ben Borgers gebruikt
`https://opensheet.elk.sh/spreadsheet_id/tab_name`

3. Mijn eigen spreadsheet gelinked
`https://opensheet.elk.sh/1W7nmmrM1C2uX6_nRSsXP5x3A7R1A9b5P6Q-fJhtwLQ8/blad1`

4. Json file (automatisch gemaakt)
<img width="500" alt="Schermafbeelding 2023-03-09 om 11 54 46" src="https://user-images.githubusercontent.com/94360732/224003237-06540ba6-bfae-4d36-b011-f7f7221e9af3.png">



## Schetsen
Aan de hand van de User story en API heb ik de volgende schetsen gemaakt. 

1. <img width="200" alt="Schermafbeelding 2023-02-13 om 13 56 35" src="https://user-images.githubusercontent.com/94360732/218464349-8ac01f77-12a7-48c9-b9f8-9cf8c0e142b0.png">

2. <img width="200" alt="Schermafbeelding 2023-02-13 om 13 56 47" src="https://user-images.githubusercontent.com/94360732/218464366-ffad99f6-46c0-4a3d-aec6-bb3436a1defe.png">

3. <img width="200" alt="Schermafbeelding 2023-02-13 om 13 56 54" src="https://user-images.githubusercontent.com/94360732/218464375-d1d54a35-86e1-4621-baf5-0e8988a0f750.png">

4. ![Frame 1](https://user-images.githubusercontent.com/94360732/224000032-1cc2c88d-50a3-4d5d-acb5-46748f66c818.png)

## Gekozen design
Ik heb uiteindelijk voor de laatste schets gekozen om uit te werken. Ik vond dit design het leukste, het lijkt alsof de quotes constant worden geschreven op het notitieblok. 
![Frame 2](https://user-images.githubusercontent.com/94360732/224000147-5c213e7f-ff66-4234-814d-6c76c085c7a8.png)

## Installatie
1. Clone dit repository via de terminal
 git clone https://github.com/laibaaac/waffs.git

2. Packages installeren
npm install

## Features
De volgende features heeft mijn applicatie
- Loading state tijdens wanneer mijn data wordt geladen. 
- Empty state wanneer er niks wordt gedaan op mijn website
- Error state wanneer ik geen data binnen krijg (demo)

## Could have
- Filteren (ik had het geprobeerd bij about me te filteren op quotes en auteurs, maar het lukte mij niet zo goed)

## Activity Flow
### Wireflow
<img width="600" alt="Schermafbeelding 2023-03-09 om 11 59 38" src="https://user-images.githubusercontent.com/94360732/224004200-6b22ad48-c0ac-485c-975e-86c26ec4d65c.png">

<img width="800" alt="Schermafbeelding 2023-03-09 om 12 23 29" src="https://user-images.githubusercontent.com/94360732/224009232-ead092c5-8196-494f-bd73-39abf45ad308.png">




## Routie
Ik heb de router routie gebruikt, ik volgde de voorbeeld van joost. 
Ik heb de volgende gedaan:
- vendor map aangemaakt en de routie daarin gezet 
- daarna heb ik mijn router gemaakt 

`import './vendor/routie.min.js'
import { toggleNav } from './change.js';


export function handleRoutes() {
    console.log('hoiiii');
  routie(
    {
    'home': () => { 
      toggleNav('home')
    },
    'about': () => {
      toggleNav('about');
    }
  })
}`




