const hierin = $('h1');
const auteur = $('h2');
// hier haal ik mijn html element

export function changeHTML(data) {
    // data = []; //zo kan ik mijn error laten zien, wanneer ik mijn error wil laten zien 

    // wanneer ik niks voor data krijg, krijg ik deze message in mijn html 
    if (data.length == 0) {

        showErrorMessage('Geen data!');
        return;
    } 

    const randomNummer = Math.floor(Math.random() * data.length);
    // code om mijn random quote te krijgen 

    const randomQuote = data[randomNummer].text;
    const randomAuthor = data[randomNummer].author;
    // hier pak ik een random quote 

    hierin.innerHTML = randomQuote;
    auteur.innerHTML = randomAuthor;
    // in h1 en h2 laat ik dmv innerhtml  mijn quote en mijn bij passende auteur zien
}

export function showErrorMessage(message) {
    hierin.innerHTML = message;
    // mijn error msg in mijn html laten zien (aka in mijn h1)
}

// algemene ui toggle
// elementToToggle = classname of id
//Dit gebruik ik voor mijn loading en error state
export function toggleElement(elementToToggle) {

    const targetSection = $(elementToToggle);

    if (targetSection.classList.contains('hide')) {
        targetSection.classList.remove('hide');

        return;
    }

// bij return stopt het

    targetSection.classList.add('hide');
    
}

//  toggle voor mijn nav
// zo kan ik naar verschillende pages zogenaamd 
export function toggleNav(id) {

    const allSections = $$('.page-content');

    allSections.forEach((element) => {
        element.classList.add('hide');
    });

    const targetSection = $(`#${id}`);
    // hier wordt de id uit mijn nav #home en #about gepakt

    if (targetSection.classList.contains('hide')) {
        targetSection.classList.remove('hide');

        return;
    }

    targetSection.classList.add('hide');

}


function $(element) {
    return document.querySelector(element)

}

function $$(elements) {
    return document.querySelectorAll(elements)
}