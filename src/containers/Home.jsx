import '../assets/styles/containers/Home.css'
import heroImage from '../assets/images/HeaderHomeImage.jpg'
import ButtonLink from '../components/ButtonLink'

const Home = () => {
	return(
		<div className="Home">
			<div className="home-container">
				<div className="hero-container">
					<img className="hero-image" src={heroImage} alt="Foto de mujer investigando un planeta virtual" />
					<div className="text-container">
						<h2 className="hero-title">Modernizate rápido.</h2>
						<h3 className="hero-subtitle">Puedo poner tu negocio en internet.</h3>
					</div>
					<div className="hero-button">
						<ButtonLink
							className="hero-button" 
							title="Contactar" 
							link="/contact"
							color="dark"
						/>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default Home 