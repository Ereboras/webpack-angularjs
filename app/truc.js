import { Class1 } from 'class1';
import { Class2 } from 'class2';
import { Chose } from 'chose';

function component () {
  var element = document.createElement('div');
  var class1 = new Class1();
  var class2 = new Class2();

  element.innerHTML = class1.getText();
  return element;
}
console.log("EXEC TRUC.JS");
document.body.appendChild(component());