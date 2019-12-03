import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyElement extends LitElement {

  static get properties() {
    return {
      mood: {type: String}
    }
  }

  render() {
    return html`Web Components are <span class="mood">${this.mood}</span>!`;
  }
  
  createRenderRoot() {
    // Disable Shadow DOM to simplify CSS.
    return this;
  }
}

customElements.define('my-element', MyElement);

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

// TODO: render this array onto the page

