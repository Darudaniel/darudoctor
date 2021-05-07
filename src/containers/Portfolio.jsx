import Project from '../components/Project'
import batatabitImage from '../assets/images/Batatabit.png'
const Portfolio = () => {
  return(
    <div className="Portfolio">
      <Project 
        title="Batatabit" 
        description="Un sitio web para una empresa que trabaja con criptomonedas"
        image={batatabitImage}
        link="https://darudaniel.github.io/Batatabit/"
      />
    </div>
  )
}

export default Portfolio