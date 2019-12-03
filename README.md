The designer created the markup for a new page in designer.html
You need to create a dynamic version of the page in index.html, using the LitElement framework. Clicking on a star should toggle between filled/unfilled. Also, clicking the button should add a new row to the list using the value from the text field.

See https://lit-element.polymer-project.org/guide for an introduction to LitElement.

The designer used MDL Lite for the css styles of buttons, fonts, etc. Feel free to use this also. 

When you are finished, create a Readme file. Provide a short description of what you built,  and any comments you have on the assignment.

Hint: modifying an array doesn't cause LitElement to re-render. Use 
```javascript
this.data = newArray
```
instead of 
```javascript
this.data.push(...)
```