import { Class1 } from 'class1';
import { truc } from 'truc';

function component () {
  var element = document.createElement('div');
  var class1 = new Class1();

  element.innerHTML = class1.getLabel();
  return element;
}
console.log("EXEC INDEX.JS");
document.body.appendChild(component());