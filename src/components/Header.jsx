import '../assets/styles/components/Header.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBasket, faHome, faAddressCard, faDesktop, faFileCode, faCalculator, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ReactGA from 'react-ga'

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state
  
  const bars = <FontAwesomeIcon icon={faBars} size="4x"/>
  const basket = <FontAwesomeIcon icon={faShoppingBasket} size="1x"/>
  const homeIcon = <FontAwesomeIcon icon={faHome} size="1x"/>
  const aboutIcon = <FontAwesomeIcon icon={faAddressCard} size="1x"/>
  const desktopIcon = <FontAwesomeIcon icon={faDesktop} size="1x"/>
  const fileIcon = <FontAwesomeIcon icon={faFileCode} size="1x"/>
  const calulatorIcon = <FontAwesomeIcon icon={faCalculator} size="1x"/>
  const blogIcon = <FontAwesomeIcon icon={faBlog} size="1x"/>
  const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} size="1x"/>

  const handleClick = () => {
    ReactGA.event({
        category: 'Menu',
        action: `Burger menu`
      })
  }
  
  return(
    <div className="Header">
      <Link to="/home" className="logo-container">
        <h1 className="logo">DD</h1>
      </Link>
      <Link to="/home" className="title-container">
        <h2>Daru</h2>
        <h2 className="doctor">doctor</h2>
      </Link>
      
      <Dropdown className="burger-menu" onClick={handleClick}>
        <Dropdown.Toggle className="burger-button" variant="Secondary" id="dropdown-basic">
          {bars}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><Link to="/home" className="item-menu-button">{homeIcon} Inicio</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/checkout" className="item-menu-button">{basket} Ver carrito</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/about" className="item-menu-button">{aboutIcon} About</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/services" className="item-menu-button">{desktopIcon} Servicios</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/portfolio" className="item-menu-button">{fileIcon} Portfolio</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/liquidos-neonatos" className="item-menu-button">{calulatorIcon} App</Link></Dropdown.Item>
          <Dropdown.Item href="https://darudoctor.wordpress.com/"> <div className="item-menu-button">{blogIcon} Blog</div> </Dropdown.Item>
          <Dropdown.Item><Link to="/contact" className="item-menu-button">{envelopeIcon} Contact</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="navbar">
        <ul className="nav-container">
          <li className="item-list">
            <Link to="/checkout">
              <button className="success-button navbar-button" type="button">
                {basket}
              </button>
              {cart.length > 0 && <div className="Header-alert">{cart.length}</div> }
            </Link>
          </li>
          <li className="item-list">
            <Link to="/home">
              <button 
                  className="success-button navbar-button" 
                  type="button"
                >Inicio 
              </button>
            </Link>
          </li>
          <li className="item-list">
            <Link to="/about">
              <button 
                  className="success-button navbar-button" 
                  type="button" 
                >About 
              </button>
            </Link>
          </li>
          <li className="item-list">
            <Link to="/services">
              <button 
                  className="success-button navbar-button" 
                  type="button" 
                >Services
              </button>
            </Link>
          </li>
          <li className="item-list">
            <Link to="/portfolio">
              <button 
                  className="success-button navbar-button" 
                  type="button" 
                >Portfolio  
              </button>
            </Link>
          </li>
          <li className="item-list">
            <Link to="/liquidos-neonatos">
              <button 
                  className="success-button navbar-button" 
                  type="button"
                >App 
              </button>
            </Link>
          </li>
          <li className="item-list">
            <a href="https://darudoctor.wordpress.com/">
              <button 
                  className="success-button navbar-button" 
                  type="button" 
                >Blog 
              </button>
            </a>
          </li>
          <li className="item-list">
            <Link to="/contact">
              <button 
                  className="success-button navbar-button" 
                  type="button" 
                >Contact  
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header