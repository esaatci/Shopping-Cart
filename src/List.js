import React,{Component} from "react"
import Item from "./Item"



class List extends Component {
  render() {
  	const {items,addtoCart} = this.props 
  	const renderedList = items.map(item => {
    return <Item item={item} addtoCart={addtoCart} />
  })
  	return <div>{renderedList}</div>
    
  }
}

export default List