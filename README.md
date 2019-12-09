## Derivita JavaScript Challenge

This is a list component that displays an avatar placeholder, a person's name, number of books, and a star (inactive or active). It was built using [LitElement](https://lit-element.polymer-project.org/), which uses lit-html and Web Components.

To start, install polymer-cli

```
npm install -g polymer-cli
```
Then run 
```
polymer serve
```
in the project directory.

There is no need to install LitElement since it is imported via CDN. Styles are from [Material Design Lite](https://getmdl.io/), and only slightly customized.

Index.js is imported as a module into index.html. The class MyElement is rendered as a custom html element:
```
<my-element/>
```
Similar to a React component, we can pass properties to this element. In this case, we could pass in the prop peopleArray. However, I've kept the inital data in index.js. 

Two pieces of state are tracked: peopleArray and inputText. Two change handlers update state. Then, because the array is listed as a declared property (in the static properties getter), it triggers a re-render on update (whether by adding a person or clicking a star).
