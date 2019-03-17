import React, {Component} from "react"
import "./CartCard.css"



class CartCard extends React.Component {
  render() {
    const {item} = this.props
    return (
    <div>
      <div>
        <div>
          {item.title}
          <button>
            <i/>
          </button>
        </div>
        <p>Quantity: X</p>
      </div>
    </div>
  )
  }
}


export default CartCard