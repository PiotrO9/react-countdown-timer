import Social from "./Social"
import './Socials.scss'

function Socials() {
    const SocialIconsNames = ['icon-facebook', 'icon-instagram', 'icon-pinterest']

    return (
        <div className="Socials">
            {
                SocialIconsNames.map(icon => {
                   return (<Social iconName={icon}/>)
                })
            }
        </div>
    )
}

export default Socials