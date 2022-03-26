import _ from 'lodash';
import Print from './print';

function createComponent() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'hellow Webpack!');
  return element;
}

document.body.appendChild(createComponent());
