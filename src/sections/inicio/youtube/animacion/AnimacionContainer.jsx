import { DotLottiePlayer } from "@dotlottie/react-player";

const AnimacionContainer = ({src}) => {
    return (
        <DotLottiePlayer
            src={src}
            autoplay
            loop
            className='animacion'
            speed={0.5}
        />
    );
};

export default AnimacionContainer;