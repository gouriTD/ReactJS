import React from 'react';
import ReactDOM from 'react-dom/client';

// THE ABOVE 2 MODULES ARE THE MAIN MODULES WHEREIN REACT PROVIDES THE BASIC SUPPORT FOR REACT AND REACT DOM HELPS TO CREATE THE TREE STRUCTURE FOR DIFFERENT HTML ELEMENTS.

// THIS IMPORT APP IS NOTHING BUT A FUNCTION WHICH RETRUNS A JSX, JSX IS NOTHING BUT JAVASCRIPT FILE RETURNING HTML ELEMENTS. In React apps these jsx file represents reusable components, these are nothing but functions which are defined having capitalized function names and returned from a file whose extension is .jsx.
import App from './App';


// This just creates a rootelement to which other child elements would be appended. Behind the scene the html type tag returned from the function is converted to an object which is further used to create react element. React gives a virtual DOM this virtual dom is then compared with the browser DOM the difference between the 2 is then painted on the screen.

// Thus here we just take reference to our root , similarly what we do in vanilla js, by calling document.queryselector('#root'), then we create the necessary element, set its attributes and call appendChild on root element, which is exactly what is done in render method of ReactDOM.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

