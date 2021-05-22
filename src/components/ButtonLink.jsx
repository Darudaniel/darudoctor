import '../assets/styles/components/ButtonLink.css'
import { Link } from 'react-router-dom'

//COLOR OPTIONS:
//*success
//*dark

const ButtonLink = ({title, link, color}) => {
    return (
        <Link to={link}>
            <button 
                className={`${color}-button button-link`} 
                type="button"
            >{title}
            </button>
        </Link>
    )
}

export default ButtonLink