import YoutubeContainer from "./youtube/YoutubeContainer";
import AboutContainer from "./about/AboutContainer";
import HeroContainer from "./hero/HeroContainer";
import MusicContainer from "./music/MusicContainer";
import ContactContainer from "./contact/ContactContainer";

const Inicio = () => {
    return (
        <>
            <HeroContainer/>
            <AboutContainer/>
            <YoutubeContainer/>
            <MusicContainer/>
            <ContactContainer/>
        </>
    );
};

export default Inicio;