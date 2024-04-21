import React from "react";
import ReactDOM  from "react-dom";

const rootElement = document.querySelector('#root')

const content = <div>
  <h1>Here my favourite dishes :</h1>
  <div className="image-container">
      <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800" alt="image1" id="image"/>
      <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800" alt="image2" id="image"/>
      <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800" alt="image3" id="image"/>
  </div>
  
</div>

ReactDOM.render(content,rootElement)

/**
 * In React we can do component styling or html element stying either via .css file , or we can define custome styling object and then assign it to the style attribute of the elements. Now eventhough the tagged elements look like html , they are not they are jsx elements , and if need to add any object it needs to be added as an expression. some thing like  style={{color:"white"}}
 */