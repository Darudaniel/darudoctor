import '../assets/styles/containers/Information.css';
import { useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext'
import TotalPrice from '../components/TotalPrice'

const Information = () => {
  const {state, addToBuyer} = useContext(AppContext)
  const form = useRef(null)
  const history = useHistory()
  const {cart} = state

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer)
    history.push('/checkout/payment')
  }
  return (
  <div className="Information-container">
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4 className="information-title">{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="infortmation-total-price">
          <TotalPrice />
        </div>
      </div>
      <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button 
              className="success-button" 
              type="button"
              onClick={handleSubmit}
            >
              Pagar
            </button>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Information;