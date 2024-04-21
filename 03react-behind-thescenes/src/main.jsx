import React from 'react'
import ReactDOM from 'react-dom/client'
import Hellotag from './Hello'

const reactEl2 = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
    style: {
      fontFamily: 'sans-serif',
      fontSize: 14
    }
  },
  'click to view google'
)

const reactEl3 = React.createElement(
  'p',
  {
    
    style: {
      fontFamily: 'cursive',
      fontSize: 18,
      color: '#777'
    }
  },
  'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...'
)
const reactEl1 = React.createElement(
  'h1',
  {
    style:{
      color:'#555',
      fontFamily: 'helvetica'
    }
  },
  
  'This is a custom react element !!!',
  <br/>,
  reactEl2,
  reactEl3
)

ReactDOM.createRoot(document.querySelector('#root'))
.render(
  reactEl1
)

/*
Thus the main takeaways from this example is,
1) The app starts from the index.html file, which has a single 'root' div defined.
2) Now with the help of ReactDOM createRoot, we create the root element to which the entire component tree would be injected.
3) Ideally when we are dealing with the React components we generally create a jsx file, this jsx file is nothing but plain javascript function which is returning html tags. One thing to note here is these functions which return html tags should start their naming with Capital letters.
4) Now when we need to inject the component we simply say, root.render(<jsx-element>)
5) Behind the scenes babel comes into action and it takes the jsx and converts into an object from which reactElement would be created as react doesnot understand jsx.
6) Babel converts the html tags coming as a part of jsx, as individual react elements.
7) A base react element is created using the React.createElement method, which takes a type, props(attributes use for configuring the element) and children.
8) Here the react element formed from the jsx coming becomes part of the children.

9) thus we have , react elements getting created for all the html tags, then all these react element further gets added as children to the one main react element, which can be a div,fragment,h1 etc. and then these are rendered via the "ReactDom.render" method on one root , which is created using "ReactDOM.createRoot" method
*/ 

