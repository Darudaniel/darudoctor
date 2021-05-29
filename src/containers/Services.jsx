import '../assets/styles/containers/Services.css'
import Service from '../components/Service'
import ContactForm from '../components/ContactForm'
import Programadora from '../assets/images/Programadora.jpg'

import { useContext } from 'react'
import AppContext from '../context/AppContext'

const Services = () => {
  const {state, addToCart} = useContext(AppContext)
  const { services } = state

  // const handleAddToCart = service => () => {
  //   addToCart(service)
  // }

  const handleAddToCart = service => () =>{
    const random = Math.floor(Math.random() * 1000);
    const newProduct = {...service, cartId : `${service.id}-${random}`};
    console.log(newProduct);
    addToCart(newProduct)
  }

  return(
    <div className="Services">
      <figure>
        <img className="hero-services-image" src={Programadora} alt="Mujer programando" />
      </figure>
      <h2 className="title-services">Desarrollo la pagina web ideal para <br />
        tu negocio.
      </h2>
      <h3 className="title-services bigger-title">Servicios</h3>
      <section className="services-section">
      {services.map(service => (
          <Service key={service.id} service={service} handleAddToCart={handleAddToCart} />
        ))}
      </section>
      {/* <section className="services-section">
        <Service
          title="Digitalizar tu negocio"
          subtitle="para llegar a muchos clientes."
          price="$96"
          link="/contact"
        />
        <Service
          title="Creación de tiendas"
          subtitle="en línea."
          price="25%"
          link="/contact"
        />
        <Service
          title="Desarrollo aplicaciones específicas"
          subtitle="Facilita tu trabajo medico."
          price="$200"
          link="/contact"
        />
      </section> */}
      <h4 className="title-services">Contactame y obten descuentos especiales.</h4>
      <ContactForm/>
      <div className="caracteristicas">
        <h4 className="caracteristicas-title">Caracteristicas:</h4>
        <p>
          Fácil contratación, servicio personalizado
          <br />
          Una vez me contrates me pondre en contacto contigo en las siguientes 24 horas.
        </p>
      </div>
    </div>
  )
}

export default Services