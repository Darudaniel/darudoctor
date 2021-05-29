import '../assets/styles/components/Service.css'
// import {Link} from 'react-router-dom'

const Service = ({service, handleAddToCart}) => {
  return (
    // <Link to={link}>
      <div className="service-container">
        <div className="Service">
          <h3 className="service-title">{service.title}</h3>
          <h4 className="service-subtitle">{service.subtitle}</h4>
          <div>
            <h5 className="service-price">{`$${service.price}`}</h5> 
          </div>
          <button className="success-button" type="button" onClick={handleAddToCart(service)}>Comprar</button>
        </div>
      </div>
    // </Link>
  )
}

// const Service = ({title, subtitle, price, link}) => {
//   return (
//     <Link to={link}>
//       <div className="service-container">
//         <div className="Service">
//           <h3 className="service-title">{title}</h3>
//           <h4 className="service-subtitle">{subtitle}</h4>
//           <div>
//             <h5 className="service-price">{price}</h5> 
//           </div>
//           <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
//         </div>
//       </div>
//     </Link>
//   )
// }

export default Service