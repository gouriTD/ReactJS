import React from "react";
import ReactDOM  from "react-dom";

/**
 * React allows us to add html elements inside javascript code and it also allows to add java script code inside an html element
 * To add js inside html we need to make use of curly braces {} => this denotes an expression : which in an executable piece of code.
 */

const rootElement = document.querySelector('#root')
const myFirstname = "Gouri"
const myLastname = "Tripathi"

ReactDOM.render(<>
<p>Created by {`${myFirstname} ${myLastname}` } </p>
<p>Copyright {new Date().getFullYear()}</p>
</>,rootElement)