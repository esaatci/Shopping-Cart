import React, {Component} from "react"
import "./Item.css"




class Item extends Component {

  render() {
    const {item,addtoCart} = this.props
    return (
    <div className="shopping-item item column">
      <img
        className="ui image"
        src={require(`./static/data/products/${item.sku}_1.jpg`)}
        alt="Clothing item to purchase"
      />
      <div className="header">{item.title}</div>
      <div className="content">
        <div className="description">
          <p>
            Description: {item.description}
            <br/>
            Available in: {item.availableSizes}
          </p>
        </div>
        <button onClick={() => addtoCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
    
  }
}

export default Item