//import the css
import "./HeadingComponent.css"


// boiler plate for defining a react component
// function based component
function HeadingComponent(){
  return(
    <header className="HeadingComponent">
        <h1>Welcome to Colette's Store!</h1>
        <p>The store is open M-F, 9am-5pm</p>
    </header>
  )
}
export default HeadingComponent