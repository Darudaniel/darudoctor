import '../assets/styles/containers/Checkout.css';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import TotalPrice from '../components/TotalPrice'


const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext)
  const { cart } = state

  const handleRemove = product => () => {
    removeFromCart(product)
  }

  // const handleSumTotal = () => {
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  //   const sum = cart.reduce(reducer, 0);
  //   return sum;
  // }

  const trash = <FontAwesomeIcon icon={faTrashAlt} size="1x"/>

  return (
    <div className="Checkout-container">
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h2 className="checkout-title">Lista de pedidos</h2> : <h3>Sin pedidos</h3>}
          {cart.map((item) => (
            <div key={item.cartId} className="Checkout-item">
              <div className="Checkout-element">
                <h4 className="checkout-item--title">{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button className="remove-button" type="button" onClick={handleRemove(item.cartId)}>
                {trash}
              </button>
            </div>
          ))}
          
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <TotalPrice />
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
          )}
      </div>
    </div>
    
  );
};

export default Checkout;