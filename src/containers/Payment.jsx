import '../assets/styles/containers/Payment.css';
import { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button'
import AppContext from '../context/AppContext'
import { handleSumTotal } from '../utils/index'
import TotalPrice from '../components/TotalPrice'

const Payments = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state

  const paypalOptions = {
    clientId: 'Ae9bgjDTVzjHs1Er6ZU7Bm_P08iaXSEJePoJ7wP3OLVs8nHsnqlmBrQqPrZERyWs-hu3IQq4yEIwu-ld',
    // clientId: 'sb',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        service: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment-container">
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido:</h3>
          {cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4 className="payment-item-title">{item.title}</h4>
                <span>
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
          <div className="payment-total-price">
            <TotalPrice />
          </div>
          <div className="Payment-button">
            <PayPalButton
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal(cart)}
              onPaymentStart={() => console.log('Start Payment')}
              onPaymentSuccess={data => handlePaymentSuccess(data)}
              onPaymentError={error => console.log(error)}
              onPaymentCancel={data => console.log(data)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;