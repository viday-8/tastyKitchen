import {Component} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import Login from './components/LoginRoute'
import Home from './components/home'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import RestaurantDetails from './components/restaurantsDetails'
import NotFound from './components/NotFound'
import MainContext from './context/MainContext'
import './App.css'

const localList = JSON.parse(localStorage.getItem('cartData'))
const formattedData = localList === null ? [] : localList

class App extends Component {
  state = {
    cartList: formattedData,
  }

  getData = () => {
    const NLocalList = JSON.parse(localStorage.getItem('cartData'))
    this.setState({cartList: NLocalList})
  }

  clearCartList = () => {
    this.setState({cartList: []})
  }

  onAddToCart = item => {
    const {cartList} = this.state
    this.setState({cartList: [...cartList, item]})
  }

  increaseCount = name => {
    console.log(name)
    const {cartList} = this.state
    const newList = cartList.filter(each => each.name !== name)
    const incList = cartList.filter(each => each.name === name)
    this.setState({
      cartList: [
        ...newList,
        {
          id: incList[0].id,
          cost: incList[0].cost,
          count: incList[0].count + 1,
          imageUrl: incList[0].imageUrl,
          name: incList[0].name,
        },
      ],
    })
  }

  decreaseCount = name => {
    const {cartList} = this.state
    const newList = cartList.filter(each => each.name !== name)
    const incList = cartList.filter(each => each.name === name)
    if (incList[0].count > 1) {
      this.setState({
        cartList: [
          ...newList,
          {
            id: incList[0].id,
            cost: incList[0].cost,
            count: incList[0].count - 1,
            imageUrl: incList[0].imageUrl,
            name: incList[0].name,
          },
        ],
      })
    } else {
      this.setState({cartList: [...newList]})
    }
  }

  render() {
    const {cartList} = this.state
    if (cartList.length > 0) {
      localStorage.setItem('cartData', JSON.stringify(cartList))
    }
    return (
      <MainContext.Provider
        value={{
          cartList,
          getData: this.getData,
          onAddToCart: this.onAddToCart,
          increaseCount: this.increaseCount,
          decreaseCount: this.decreaseCount,
          clearCartList: this.clearCartList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute
            exact
            path="/restaurant/:id"
            component={RestaurantDetails}
          />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </MainContext.Provider>
    )
  }
}

export default App
