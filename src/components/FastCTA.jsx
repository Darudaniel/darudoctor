import '../assets/styles/components/FastCTA.css'
import ButtonLink from './ButtonLink'

//buttonColor OPTIONS:
//*success
//*dark

const FastCTA = ({copywrite, buttonTitle, buttonLink, buttonColor}) => {
  return(
    <div className="FastCTA">
      <h3 className="copywrite">
        {copywrite}
      </h3>
      <ButtonLink
        title={buttonTitle}
        link={buttonLink}
        color={buttonColor}
      />
    </div>
  )
}

export default FastCTA