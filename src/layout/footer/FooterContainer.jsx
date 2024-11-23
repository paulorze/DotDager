import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const FooterContainer = () => {
    const navigate = useNavigate();
    const handleNavigate = (url) => {
        navigate(url);
    };

    return (
        <Footer
            handleNavigate={handleNavigate}
        />
    );
};

export default FooterContainer;