import fruits from "../assets/fruits.png"
import vegetables from "../assets/vegetables.png"
import "./ProductListing.css"

function ProductListing(){
  return(
    <section className="ProductListing">
      <h1>Our Products</h1>    
      <div className="ProductListing-category">
          <img src={fruits}/>            
          <p>Fruits</p>
          <a href="#">Click to see more</a>
      </div>
      <div className="ProductListing-category">
          <img src={vegetables}/>            
          <p>Organic Vegetables</p>
          <a href="#">Click to see more</a>
      </div>
  </section>
  )
}
export default ProductListing