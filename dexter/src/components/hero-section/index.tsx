import "./index.scss"

import Background from "../../assets/hero-background.gif"
import HeroLogo from "../../assets/hero-logo.png"

const Hero = () =>{
    return(
        <section className="hero" id="home">
            <img src={Background} alt="background"/>
            <div>
                <img src={HeroLogo} alt="hero-logo"/>
                <p>Pitch us your wierd idea. We'll build it anyway.</p>
            </div>
        </section>
    )
}

export default Hero