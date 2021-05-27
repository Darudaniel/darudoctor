import '../assets/styles/containers/Home.css'
import heroImage from '../assets/images/HeaderHomeImage.jpg'
import Hero from '../components/Hero'
import FastCTA from '../components/FastCTA'
import Footer from '../components/Footer'

const Home = () => {
	return(
		<div className="Home">
			<div className="home-container">
				<Hero 
					image={heroImage} 
					alt="Foto de mujer investigando un planeta virtual" 
					title="Modernizate rápido."
					subtitle="Puedo poner tu negocio en internet." 
					buttonTitle="Contactar" 
					buttonLink="/contact"
					buttonColor="dark"
				/>
				<div className="CTA-zone">
					<FastCTA
						copywrite="Puedo diseñar y programar justo lo que tu empresa necesita."
						buttonTitle="Portafolio"
						buttonLink="/portfolio"
						buttonColor="success"
					/>
					<FastCTA
						copywrite="Precios de promocion, alta calidad, seguimiento personalizado"
						buttonTitle="Contacto"
						buttonLink="/contact"
						buttonColor="success"
					/>
				</div>
				<Footer/>
			</div>
		</div>	
	)
}

export default Home 