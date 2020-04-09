import './components/character-list.js';
import './components/character-detail.js';

const characterListComponent = document.querySelector('character-list');
const characterDetailComponent = document.querySelector('character-detail');

characterListComponent.addEventListener('selectedCharacter', e => characterDetailComponent.character = e.detail);

fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then( data => {
        characterListComponent.characters = data.results;
        characterDetailComponent.character = data.results[0];
    })