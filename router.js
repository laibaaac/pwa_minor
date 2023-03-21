import './vendor/routie.min.js'
// routie wordt hier geimporteerd 

import { toggleNav } from './change.js';
// hier haal ik mijn nav binnen om zo te togglen door mijn 2 pages 

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
}

