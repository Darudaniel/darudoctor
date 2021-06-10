import '../assets/styles/components/About.css'
import CamisaProgramador from '../assets/images/CamisaProgramador.jpg'
import TriangleBetterment from '../assets/images/TriangleBetterment.png'
import ButtonLink from '../components/ButtonLink'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'

const About = () => {

  const handleClick = () => {
    ReactGA.event({
        category: 'Button',
        action: `Read more`
      })
  }

  return (
    <div className="About">
      <section className="about-hero--img">
        <div className="about-hero--cover">
          ""
        </div>
        <img 
          className="about-img" 
          src={CamisaProgramador} 
          alt="Programador haciendo codigo con un café al lado" 
        />
      </section>
      <div className="text-about-container">
        <h2 className="about-title">Se que es raro</h2>
        <h3 className="about-subtitle">Que el medico programe tu web pero...</h3>
      </div>
      <a href="#reading-zone" className="button-center--container">
        <button onClick={handleClick} type="button" className="dark-button button-center">
          Leer más ˇ
        </button>
      </a>
      <section id="reading-zone" className="reading-zone">
        <p>
          Para mejorar la vida de muchas personas  es necesario mejorar la economía de las regiones. Por eso estoy comprometido con los emprendedores, para mostrar su negocio al mercado en línea. <br />
          <br />
          He observado cómo a lo largo de la historia los países que mejoran su economía, también mejoran sus condiciones sociales, políticas y culturales. Por lo tanto mejorar la economia es prioritario si queremos mejorar nuestros servicios de salud. <br />
          <br />
          Por otro lado las empresas son las principales potenciadoras de la economía, y todos sabemos que internet es el principal potenciador de las empresas. <br />
        </p>
      </section>
      <figure className="triangle-betterment--container">
        <img
          className="triangle-betterment" 
          src={TriangleBetterment} 
          alt="Si crecen las empresas, crece la economia, si crece la economia, si crece la economia, mejora la calidad de vida y salud." />
      </figure>
      <section className="reading-zone">
        <p>
          
          Por eso estoy aquí, porque entiendo que mejorar la situación de nuestra región es responsabilidad de todos. <br />
          <br />
          Construir un sitio como este, despues de mucha dedicación, es la prueba de que no importa que papel cumplamos en la sociedad, siempre habra algo mas que podemos hacer por ella. <br />
          <br />
          En varios momentos de mi vida la curiosidad me ha llevado a lugares y momentos increibles, sumergirme en el mundo de la tecnologia ha sido una experiencia muy gratificante por el gran impacto que puede tener. <br />
          <br />
          Cada que visito una comunidad apartada de la sociedad por distintos factores, se me ocurren mil formas de ayudar. Se que eventualmente, gracias a la tecnologia, podremos crear mejores condiciones para todos los humanos en el planeta. <br />
          <br />
          Quiero que juntos construyamos un futuro mejor para nuestro querido planeta. No dudes en contactarme. <br />
        </p>
      </section>
      <div className="button-contact--container">
        <ButtonLink 
          title="Contacto" 
          link="/contacto" 
          color="success"
        />
      </div>
      <Footer/>
    </div>
  )
}

export default About