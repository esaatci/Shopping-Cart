import React, {Component} from "react"

import List from "./List"
import Categories from "./Categories"
import data from "./static/data/products.json"
import Cart from "./Cart"

class App extends Component {
  state = {
    filter: null,
    items: data["products"],
    cart: []
  }

  addtoCart = item => {
    this.setState({ cart: [...this.state.cart, item] });
  }
   
  removeFromCart = item => {
    console.log("click");
    this.setState({ cart });
  }

  render() {
    return (
      <div>
        <div>
          <Categories />
        </div>
        <div>
          <List items={this.state.items} addtoCart={this.addtoCart} />
        </div>
        <div>
          <Cart cart={this.state.cart} />
        </div>
      </div>
    )
  }
}

export default App