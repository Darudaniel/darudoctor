import '../assets/styles/containers/Portfolio.css'

import Project from '../components/Project'
import batatabitImage from '../assets/images/Batatabit.png'
import heladosImage from '../assets/images/Helados.png'
import aplastaosImage from '../assets/images/Aplastaos.png'
import hotRickAndMorty from '../assets/images/RickAndMortyHeadsOrTails.png'

const Portfolio = () => {
  return(
    <div className="Portfolio">
      <div className="projects-container">
        <Project 
          title="Batatabit" 
          description="Sitio web responsive para una empresa asociada a criptomonedas"
          image={batatabitImage}
          link="https://darudaniel.github.io/Batatabit/"
        />
        <Project
          title="Heads or tails app"
          description="Developed in react.js, obtaining the data from a public api"
          image={hotRickAndMorty}
          link="https://darudaniel.github.io/heads-or-tails/"
        />
        <Project
          title="Heladeria St.Clemente"
          description="Maqueta mobile first, para negocio local"
          image={heladosImage}
          link="https://darudaniel.github.io/heladeria/"
        />
        <Project
          title="Aplastaos de pacho"
          description="Maqueta mobile first, para negocio local"
          image={aplastaosImage}
          link="https://darudaniel.github.io/fast-food/"
        /> 
      </div>     
    </div>
  )
}

export default Portfolio