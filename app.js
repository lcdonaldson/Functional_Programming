import React from 'react';
import ReactDOM from 'react-dom';

function makeBlue(e) {
  e.target.setAttribute('src', 'http://www.clipartmasters.com/clip-arts/29/blue-square-clip-art-29530.png');
  e.target.setAttribute('alt', 'blue');
}

function makeRed(e) {
  e.target.setAttribute('src', 'http://www.clipartmasters.com/clip-arts/29/red-square-clip-art-29531.png');
  e.target.setAttribute('alt', 'red');
}

function makeYellow(e) {
  e.target.setAttribute('src', 'http://www.clipartmasters.com/clip-arts/29/yellow-square-clip-art-29532.png');
  e.target.setAttribute('alt', 'yellow');
}

const colorBlock = () => {
  return (
    <div>
      <p>I am glad you could see this in action</p>
      <img onClick = { makeBlue } src="http://www.clker.com/cliparts/2/R/v/e/o/L/orange-square-md.png" 
      alt="orange" />
      <img onClick = { makeRed } src="http://www.clker.com/cliparts/2/R/v/e/o/L/orange-square-md.png" 
      alt="orange" />
    </div>
  );
};

export default Static;

ReactDOM.render(colorBlock, document.getElementById('app'));
