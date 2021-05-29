import '../assets/styles/containers/Checkout.css';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext)
  const { cart } = state

  const handleRemove = product => () => {
    removeFromCart(product)
  }

  // const handleSumTotal = () => {
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue.price
  //   const sum = cart.reduce(reducer, 0)
  //   return sum
  // }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const trash = <FontAwesomeIcon icon={faTrashAlt} size="2x"/>

  return (
    <div className="Checkout-container">
      <div className="Checkout">
        <div className="Checkout-content">
          {/* <h3>Lista de Pedidos:</h3> */}
          {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
          {cart.map((item) => (
            <div key={item.cartId} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              {/* <button type="button" onClick={handleRemove(item)}> */}
              <button type="button" onClick={handleRemove(item.cartId)}>
                {trash}
              </button>
            </div>
          ))}
          
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
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