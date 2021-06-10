import '../assets/styles/components/ButtonLink.css'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga'
//COLOR OPTIONS:
//*success
//*dark

const ButtonLink = ({title, link, color}) => {

    const handleButtonLink = () => {
        ReactGA.event({
            category: 'Button',
            action: `Link to ${title}`
          })
    }

    return (
        <Link to={link}>
            <button 
                className={`${color}-button button-link`} 
                type="button"
                onClick={handleButtonLink}
            >{title}
            </button>
        </Link>
    )
}

export default ButtonLink