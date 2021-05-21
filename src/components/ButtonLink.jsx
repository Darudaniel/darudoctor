import '../assets/styles/components/ButtonLink.css'
import { Link } from 'react-router-dom'

const ButtonLink = ({title, link}) => {
    return (
        <Link to={link}>
            <button 
                className="success-button button-link" 
                type="button"
            >{title}
            </button>
        </Link>
    )
}

export default ButtonLink