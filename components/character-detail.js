
class characterDetail extends HTMLElement {

    get character() {
        return this._character;
    }

    set character(value) {
        this._character = value;
        this._render();
    }

    constructor() {
        super();

        this.attachShadow({ mode: 'open'});
    }

    _render() {
        this.shadowRoot.innerHTML = `
        <h2>${this.character.name}</h2>
        <ul>
            <li>height: ${this.character.height}</li>
            <li>mass: ${this.character.mass}</li>
            <li>birth_year: ${this.character.birth_year}</li>
        </ul>
        `; 
    }
}

customElements.define('character-detail', characterDetail);