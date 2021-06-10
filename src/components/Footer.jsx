import '../assets/styles/components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ButtonLink from './ButtonLink'
import ReactGA from 'react-ga'

const Footer = () => {
  const instagram = <FontAwesomeIcon icon={faInstagram} size="4x"/>
  const github = <FontAwesomeIcon icon={faGithub} size="4x"/>
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x"/>
  const twitter = <FontAwesomeIcon icon={faTwitter} size="4x"/>

  const handleClick = () => {
    ReactGA.event({
        category: 'Icon',
        action: `Social network visited`
      })
  }

  return(
    <div className="Footer-container">
      <footer className="Footer">
        <h3 className="footer-copywrite">Esta es mi aplicación médica más reciente</h3>
        <ButtonLink
          title="App"
          link="/liquidos-neonatos"
          color="success"
        />
      </footer>
      <div className="social-networks">
        <a onClick={handleClick} className="network-icon" href="https://www.instagram.com/danielruizen/?igshid=146eqhcu1h6ok">
            {instagram}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://github.com/Darudaniel">
          {github}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://www.linkedin.com/in/daniel-ruiz-9343521b8/">
          {linkedin}
        </a>
        <a onClick={handleClick} className="network-icon" href="https://twitter.com/Darubeat">
          {twitter}
        </a>
      </div>
    </div>
  )
}

export default Footer