import { Class1 } from 'class1';

function component () {
  var element = document.createElement('div');
  var class1 = new Class1();

  element.innerHTML = class1.getLabel();
  return element;
}

document.body.appendChild(component());