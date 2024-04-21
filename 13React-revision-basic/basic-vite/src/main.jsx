import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {render} from 'react-dom'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


/**
 * Learnings from this basic application:
 * 1) In the good old vanilla javascript world access to DOM elements in js and then addition of a child element happend via the following:
 *    a) for h1 creation: const h1 = document.createElement('h1')
 *    b) h1.innerHTML = "Hello World !!!"
 *    c) const rootElement = document.getElelementById('root')/document.querySelector('#root')
 *    d) rootElement.appendChild(h1)
 * 2) But with advent of React library we make use of :
 *  ReactDOM.render(<h1>Hello World!!!</h1>,document.querySelector('#roort')) // this api is deprecated and recommended to use createRoot.
 *                  OR
 *  ReactDOM.createRoot(<h1>Hello World!!</h1>,document.querySelector('#root'))
 */

const rootElement = document.querySelector('#root')

// Simple dom createElement used for creating the component tree.
const h1 = document.createElement('h1');
h1.innerHTML = "Hello World"

const para = document.createElement('p')
para.innerHTML = "What a lovely day!!!"

h1.appendChild(para)
rootElement.appendChild(h1)

// OR

render(<h2>This is awesome</h2>,rootElement)

//OR

ReactDOM.createRoot(rootElement).render(<a href='wwww.google.com'>Visit google</a>)



