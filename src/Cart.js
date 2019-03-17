import React,{Component} from "react"
import CartCard from "./CartCard"




class Cart extends Component {
  render() {
    const {cart} = this.props
    const renderedList = cart.map(item => {
    return <CartCard key={item.id} item={item} />
  })
  return (
    <div>
      <div>
        <i/>
        <div> Current Shopping Cart</div>
      </div>
      <div>{renderedList}</div>
    </div>
  )
  }
}

export default Cart