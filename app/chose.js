import { Class1 } from 'class1';

function component () {
  var element = document.createElement('div');
  var class1 = new Class1();

  element.innerHTML = class1.getText();
  return element;
}

console.log("EXEC CHOSE.JS");
document.body.appendChild(component());