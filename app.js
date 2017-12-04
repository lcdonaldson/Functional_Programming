import React from 'react';
import ReactDOM from 'react-dom';

// Creating a function to change images on click event of original image and 
// setting jsx elements to variables for original image

function makeBlue(e) {
  e.target.setAttribute('src', 'http://www.clipartmasters.com/clip-arts/29/blue-square-clip-art-29530.png');
  e.target.setAttribute('alt', 'blue');
}

const orange = ( <img onClick = {makeBlue} src="http://www.clker.com/cliparts/2/R/v/e/o/L/orange-square-md.png" 
	alt="orange" />
);

ReactDOM.render(orange, document.getElementById('app'));
