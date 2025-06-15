import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import {FaCheckCircle} from 'react-icons/fa'
import MainContext from '../../context/MainContext'
import Header from '../Header'
import Footer from '../footer'
import CartItem from '../CartItem'

import './index.css'

class Cart extends Component {
  state = {
    orderPlace: false,
  }

  renderCart = () => (
    <MainContext.Consumer>
      {value => {
        const {clearCartList} = value
        const localList = JSON.parse(localStorage.getItem('cartData'))
        const formattedData = localList === null ? [] : localList
        const {orderPlace} = this.state

        const totalCost = () => {
          const priceList = formattedData.map(each => each.count * each.cost)
          const reducer = (previousValue, currentValue) =>
            previousValue + currentValue
          const price = priceList.reduce(reducer)
          return (
            <div className="Rupees">
              <p className="Rupees" testid="total-price">
                {price}
              </p>
              <p className="Rupees">.00</p>
            </div>
          )
        }

        const onOrderPlaced = () => {
          localStorage.clear()
          this.setState(prevState => ({
            orderPlace: !prevState.orderPlace,
          }))
          clearCartList()
        }

        if (formattedData.length === 0 && orderPlace === false) {
          return (
            <div className="NoItem">
              <img
                className="EmptyImg"
                alt="empty cart"
                src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1633225925/tastyKitchen/Layer_2_pt2cfs.png"
              />
              <h1 className="NoOrder">No Order Yet!</h1>
              <p className="Empty">
                Your cart is empty. Add something from the menu.
              </p>
              <Link to="/">
                <button className="OrderBtn" type="button">
                  Order Now
                </button>
              </Link>
            </div>
          )
        }

        if (orderPlace) {
          return (
            <div>
              <div className="PaymentMain">
                <FaCheckCircle fontSize={45} color="#22C55E" />
                <h1 className="PayHeading">Payment Successful</h1>
                <p className="ThankU">
                  Thank you for ordering <br /> Your payment is successfully
                  completed.
                </p>
                <Link to="/">
                  <button className="HomeBtn" type="button">
                    Go To Home Page
                  </button>
                </Link>
              </div>
            </div>
          )
        }
        return (
          <div className="TotalPriceCon">
            <div className="PriceCon">
              <ul className="CartHeading">
                <li>Item</li>
                <li>Quantity</li>
                <li>Price</li>
              </ul>
              <ul className="CartItemsList">
                {formattedData.map(each => (
                  <li className="CartItemLi" key={each.id}>
                    <CartItem item={each} />
                  </li>
                ))}
              </ul>
              <hr className="Hr" />
              <div className="PriceLine">
                <h1 className="Cost">Order Total:</h1>
                <div className="Rupees">
                  <BiRupee /> {totalCost()}
                </div>
              </div>
              <button
                className="PlaceOrder"
                onClick={onOrderPlaced}
                type="button"
              >
                Place Order
              </button>
            </div>
            <Footer />
          </div>
        )
      }}
    </MainContext.Consumer>
  )

  render() {
    return (
      <div className="CartMain">
        <Header activeTab="Cart" />
        <div className="CartCon">{this.renderCart()}</div>
      </div>
    )
  }
}

export default Cart
