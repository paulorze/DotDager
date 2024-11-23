import { DotLottiePlayer } from '@dotlottie/react-player';

const LogoContainer = ({logo}) => {
    return (
        <DotLottiePlayer
            src={logo}
            autoplay
            className='player'
            speed={1.5}
        />
    );
};

export default LogoContainer;