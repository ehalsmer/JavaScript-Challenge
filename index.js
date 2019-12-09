import {LitElement, html} from 'https://unpkg.com/lit-element/lit-element.js?module';

const data = [
  {
    name: "Bryan Cranston",
    books: 3,
    starred: false,
  },
  {
    name: "Aaron Paul",
    books: 62,
    starred: true,
  },
  {
    name: "Bob Odenkirk",
    books: 0,
    starred: false,
  }
];

class MyElement extends LitElement {
  constructor(peopleArray){
    super();
    this.peopleArray = peopleArray || data; // this gives us the option to pass in the initial data as a property
    this.inputText = ''
  }

  static get properties() {
    return {
      peopleArray: {type: Array},
      inputText: {type: String}
    }
  }

  // Saves text from input to state
  handleInputChange = (e) => {
    this.inputText = e.target.value
  }

  // Adds a person to the data array with default values of 0 books, unstarred. Resets text input to empty string.
  handleAddClick = async () => {
    if (this.inputText !== ''){
      const inputArea = document.querySelector('.mdl-textfield__input')
      inputArea.value = '';
      this.peopleArray = [...this.peopleArray, {
        name: this.inputText,
        books: 0,
        starred: false
      }]
      this.inputText = '';
    }
  }

  // Updates 'starred' value of person without re-ordering array
  handleStarClick = (index) => {
    let updatedPerson = {
      ...this.peopleArray[index],
      starred: !this.peopleArray[index].starred
    }
    this.peopleArray = [
      ...this.peopleArray.slice(0,index),
      updatedPerson,
      ...this.peopleArray.slice(index + 1)
    ]
  }

  render() {
    return html`
      <style>
      body{
        background-color: #eee;
      }
      .container{
        padding: 0 20px 30px;
        width: 300px;
        background: white;
        border: 2px solid #eaeaea;
        position: fixed;
        top: 100px;
        left: 100px;
      }
      button{
        position: absolute !important;
        right: 20px;
        bottom: -28px;
      }
      </style>
      <div class="container">
        <ul class="demo-list-two mdl-list">
          ${this.peopleArray.map((person, index) => 
            html`<li class="mdl-list__item mdl-list__item--two-line">
            <span class="mdl-list__item-primary-content">
              <i class="material-icons mdl-list__item-avatar">person</i>
              <span>${person.name}</span>
              <span class="mdl-list__item-sub-title">${person.books} Books</span>
            </span>
            <span class="mdl-list__item-secondary-content">
              <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons" @click=${() => this.handleStarClick(index)}>${person.starred ? 'star' : 'star_border'}</i></a>
            </span>
          </li>`
            )}
        </ul>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="sample3" value=${this.inputText} @keyup=${this.handleInputChange}>
          <label class="mdl-textfield__label" for="sample3">Name</label>
        </div>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" @click=${this.handleAddClick}>
          <i class="material-icons">add</i>
        </button>
      </div>`;
  }
  
  createRenderRoot() {
    // Disable Shadow DOM to simplify CSS.
    return this;
  }
}

customElements.define('my-element', MyElement);
