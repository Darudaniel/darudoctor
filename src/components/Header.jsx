import '../assets/styles/components/Header.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state
  const basket = <FontAwesomeIcon icon={faShoppingBasket} size="1x"/>
  return(
    <div className="Header">
      <Link to="/home" className="logo-container">
        <h1 className="logo">DD</h1>
      </Link>
      <Link to="/home" className="title-container">
        <h2>Daru</h2>
        <h2 className="doctor">doctor</h2>
      </Link>
      <Dropdown className="burger-menu">
        <Dropdown.Toggle className="burger-button" variant="Secondary" id="dropdown-basic">
          ______<br/>
          ______<br/>
          ______
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><Link to="/home" className="item-menu-button">Inicio</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/about" className="item-menu-button">About</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/services" className="item-menu-button">Servicios</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/portfolio" className="item-menu-button">Portfolio</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/liquidos-neonatos" className="item-menu-button">App</Link></Dropdown.Item>
          <Dropdown.Item href="https://darudoctor.wordpress.com/"> <div className="item-menu-button">Blog</div> </Dropdown.Item>
          <Dropdown.Item><Link to="/contact" className="item-menu-button">Contact</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="navbar">
        <ul className="nav-container">
          <li className="item-list">
            <Link to="/checkout">
              <button className="success-button navbar-button" type="button">
                {basket}
              </button>
            </Link>
            {cart.length > 0 && <div className="Header-alert">{cart.length}</div> }
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