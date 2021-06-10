import '../assets/styles/components/Project.css'
import ReactGA from 'react-ga'

const Project = ({title, description, image, link}) => {

  const handleClick = () => {
    ReactGA.event({
        category: 'Button',
        action: `Project ${title} visited`
      })
  }
  
  return (
    <div className="Project">
      <a href={link} onClick={handleClick} >
        <div className="project-container">
          <h2 className="project-title">{title}</h2>
          <figure className="project-image-container">
            <img className="project-img" src={image} alt="" />
          </figure>
          <p className="project-description">
            {description}
          </p>
        </div>
      </a>
    </div>
  )
}

export default Project