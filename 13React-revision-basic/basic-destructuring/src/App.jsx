// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import cars from "./practice";


/**
 * DESTRUCTURING : 
 * This is a new concept which is introduced in ES6 of javascript. Here we can pull out data from arrays or objects via mechanism known as destructuring.
 * Now destructuring are of 2 kinds :
 * 1) Array destructuring, 2) Object destructuring.
 * 1) Array destructing : Array destructuring looks like follows:
 *  const [val1,val2] = Array // Here the val1 and val2 variable names should be unique which will take 1st and second values in an Array of 2. One thing t note is the name of the variables holding the array destructured values neednot be same as the element inside an array , but they have to be unique.
 * 
 * 2) Object destructuring : the object destructuring looks like follows:
 *  comst { prop1, prop2} = Obj // Here we should see that the prop variables holding the destructed value needs to be the same as the one inside the object. Mismatch in the name would lead to failure of destructuring.
 * 
 * 3)ASSIGNING DEFAULT VALUES TO DESTRUCTURED VARIABLES:
 *  The way to do is : const {prop1="defaultVal",prop2="SomeDefault" } = obj // this is done so that in case the object does not hold values in those properties then also app won't fail.
 * 
 * As we can see for destructuring arrays we need [] => square brackets and for destructuring the objects we need {} => curly braces.
 * 
 * 4) It is not neccessary that while doing object destructuring we need to follow the property naming convention as supported by the object, we can give a different name to the variables which is like :
 * 
 *    const {prop1 : newval} = obj 
 * 5) last but not the least we can carry destructuring of nested objects as well like:
 * 
 * const {prop1:{prop2}} = obj1
 * const {prop3:[prop4]} = obj2
 * 
 * Thus in this way destructuring provides a very developer friendly way of retriving data from inside the object.
 * 
 */


const App = ()=>{
  const [tesla,honda] = cars
  const {coloursByPopularity:[teslaTopColour]} = tesla
  const {speedStats:{topSpeed:teslaTopSpeed}} = tesla

  const {coloursByPopularity:[hondaTopColour]} = honda
  const {speedStats:{topSpeed:hondaTopSpeed}} = honda


  return(
    <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
  )
}


export default App
