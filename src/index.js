import 'normalize.css';
import './style.scss';
import hao123 from './images/hao123.png';
import print from './print';

function component(){
  let element = document.createElement('div');
  let image = new Image();
  image.src = hao123;
  element.appendChild(image);

  element.addEventListener('click', () => {
    print();
  });

  return element;
}

document.body.appendChild(component());
