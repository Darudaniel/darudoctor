import '../assets/styles/components/ProfileImage.css'

const ProfileImage = ({imagePath, imageAlt}) => {
  return(
    <div>
      <figure className="img-container">
        <img className="profile-image" src={imagePath} alt={imageAlt}/>
      </figure>
    </div>
  )
}

export default ProfileImage