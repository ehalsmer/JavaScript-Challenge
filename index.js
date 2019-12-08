import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyElement extends LitElement {

  static get properties() {
    return {
      mood: {type: String}
    }
  }

  static get styles() {
    return css`
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
    `;
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
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>Bryan Cranston</span>
          <span class="mdl-list__item-sub-title">2 Books</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star_border</i></a>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>Aaron Paul</span>
          <span class="mdl-list__item-sub-title">62 Books</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>Bob Odenkirk</span>
          <span class="mdl-list__item-sub-title">0 Books</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star_border</i></a>
        </span>
      </li>
    </ul>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="sample3">
      <label class="mdl-textfield__label" for="sample3">Name</label>
    </div>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
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

