import '../assets/styles/components/TotalPrice.css'
import { handleSumTotal } from '../utils/index'
import { useContext } from 'react'
import AppContext from '../context/AppContext'


const TotalPrice = () => {
  const {state} = useContext(AppContext)
  const {cart} = state

  return(
    <h3 className="total-price">{`Precio Total: $${handleSumTotal(cart)}`}</h3>
  )
}

export default TotalPrice