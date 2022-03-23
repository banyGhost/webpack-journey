import _ from 'lodash';
import './styles/style.css';
import icon from './assets/icons/invite.png';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = document.createElement('img');
  myIcon.src = icon;
  element.appendChild(myIcon);

  const i = document.createElement('i');
  i.classList.add('fa');
  i.classList.add('fa-undo');
  i.ariaHidden = true;
  element.appendChild(i);

  const btn = document.createElement('button');
  btn.innerText = 'Click Me';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
