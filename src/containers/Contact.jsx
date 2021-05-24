import '../assets/styles/components/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import ContactForm from '../components/ContactForm'
import ProfileImage from '../components/ProfileImage'

import medicineProfile from '../assets/images/MedicineProfile.png'

const Contact = () => {
  const instagram = <FontAwesomeIcon icon={faInstagram} size="6x"/>
  const github = <FontAwesomeIcon icon={faGithub} size="6x"/>
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="6x"/>
  const twitter = <FontAwesomeIcon icon={faTwitter} size="6x"/>
  return(
    <div className="contact-container">
      <a href="#social-networks">
        <ProfileImage imagePath={medicineProfile} imageAlt="medic watching at infinite" />
      </a>
      <h2 className="contact-title">Estas pensando en crecer. <br /> Contactame y conoce todas las posibilidades.</h2> 
      <div className="form-container">
        <ContactForm/>
      </div>   
      <h2 className="contact-title">Don't be shy, contact me</h2> 
      <h3>habladaru@gmail.com</h3>
      <div id="social-networks" className="networks-container">  
        <a className="network-icon" href="https://www.instagram.com/danielruizen/?igshid=146eqhcu1h6ok">
          {instagram}
        </a>
        <a className="network-icon" href="https://www.linkedin.com/in/daniel-ruiz-9343521b8/">
          {linkedin}
        </a>
        <a className="network-icon" href="https://github.com/Darudaniel">
          {github}
        </a>
        <a className="network-icon" href="https://twitter.com/Darubeat">
          {twitter}
        </a>
      </div>
    </div>
  )
}

export default Contact