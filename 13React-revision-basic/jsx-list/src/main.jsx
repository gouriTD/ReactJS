import React from "react";
import ReactDOM  from "react-dom";

/**
 * jsx - html code inside javascript makes a file jsx.
 * babel -> babel is a compiler which converts the fancy javascript i.e jsx, es6, react into js which is    * understandable to the browser.
 */
const rootElement = document.getElementById('root')
const name = "Gouri"
const luckyNo = 9

ReactDOM.render(<>
<h1>My Favourite books :</h1>
<ol type="1" >
  <li>Harry Potter</li>
  <li>Shiva Trilogy</li>
  <li>The lost key of Krishna</li>
</ol>
<h2>Hello {name}</h2>
<p>My lucky number = {luckyNo}</p>
</>,rootElement)