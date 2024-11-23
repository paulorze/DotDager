import AboutContainer from './about/AboutContainer';
import HeroContainer from './hero/HeroContainer';
import YoutubeContainer from './youtube/YoutubeContainer';
import MusicContainer from './music/MusicContainer'
import ContactContainer from './contact/ContactContainer';

const Home = () => {
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

export default Home;