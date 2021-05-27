// import heroImage from '../assets/images/HeaderHomeImage.jpg'
import ButtonLink from '../components/ButtonLink'
import '../assets/styles/components/Hero.css'

// image={heroImage} 
// alt="Foto de mujer investigando un planeta virtual" 
// title="Modernizate rápido."
// subtitle="Puedo poner tu negocio en internet." 
// buttonTitle="Contactar" 
// buttonLink="/contact"
// buttonColor="dark"

const Hero = ({image, alt, title, subtitle, buttonTitle, buttonLink, buttonColor}) => {
  return(
    <div className="hero-container">
    <img className="hero-image" src={image} alt={alt} />
    <div className="text-container">
      <h2 className="hero-title">{title}</h2>
      <h3 className="hero-subtitle">{subtitle}</h3>
    </div>
    <div className="hero-button">
      <ButtonLink
        className="hero-button" 
        title={buttonTitle} 
        link={buttonLink}
        color={buttonColor}
      />
    </div>
  </div>
  )
}

export default Hero
