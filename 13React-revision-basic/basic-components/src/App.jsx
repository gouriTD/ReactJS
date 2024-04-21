/**
 * Components are react elements which are repeated and can be re-used in different sections of the application. These components are written as jsx files and we should see that there is only one component per jsx file. JSX file eventhough looks like an html file but it isn't one. More over to add javascript we need to make use of {} which marks the use of evaluated expressions, i.e something which is executable is written inside the expression not plain code or instructions.
 * 
 * When we import a module the first name that we use serves as a variable acting as a handler for that very module.
 */
import Heading from './components/Heading'
import List from './components/List'

const APP_HEADING = "These are my Favourite food items:"


function App() {
  return (
    <>
      <Heading title={APP_HEADING}/>
      <List />
    </>
  )
}

export default App
