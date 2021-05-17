import '../assets/styles/components/Header.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className="Header">
      <Link to="/liquidos-neonatos" className="logo-container">
        <h1 className="logo">DD</h1>
      </Link>
      <Link to="/liquidos-neonatos" className="title-container">
        <h2>Daru</h2>
        <h2 className="doctor">doctor</h2>
      </Link>
      <Dropdown className="burger-menu">
        <Dropdown.Toggle className="burger-button" variant="Secondary" id="dropdown-basic">
          ____<br/>
          ___<br/>
          ____
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><Link to="/liquidos-neonatos" className="item-menu-button">App</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/about" className="item-menu-button">About</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/portfolio" className="item-menu-button">Portfolio</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/contact" className="item-menu-button">Contact</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="navbar">
        <ul className="nav-container">
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
            <Link to="/about">
              <button 
                  className="success-button navbar-button" 
                  type="button" 
                >About
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