import '../assets/styles/components/Project.css'

const Project = ({title, description, image, link}) => {
  
  return (
    <div className="Project">
      <a href={link}>
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