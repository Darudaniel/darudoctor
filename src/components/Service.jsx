import '../assets/styles/components/Service.css'
import {Link} from 'react-router-dom'

const Service = ({title, subtitle, price, link}) => {
  return (
    <Link to={link}>
      <div className="service-container">
      <div className="Service">
        <h3 className="service-title">{title}</h3>
        <h4 className="service-subtitle">{subtitle}</h4>
        <div>
          <h5 className="service-price">{price}</h5> 
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Service