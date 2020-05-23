import React from 'react'
import Cart from '../cart/cart.component'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isEnable : false
    }
  }

  viewCart = (prevState) => (
    this.setState({isEnable : !this.state.isEnable})
  )

  render() {
    return(
      <div className="header">
        <button onClick={this.viewCart}>Carrinho</button>
        {
          this.state.isEnable && <Cart />
        }
      </div>
     
    )
  }
}
export default Header