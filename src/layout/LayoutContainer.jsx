import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { theme } from "../utils/theme";
import NavbarContainer from "./navbar/NavbarContainer";
import FooterContainer from "./footer/FooterContainer";

const LayoutContainer = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }, [location]);

    return (
        <ThemeProvider
            theme={theme}
        >
            <NavbarContainer/>
            <Outlet/>
            <FooterContainer/>
        </ThemeProvider>
    );
};

export default LayoutContainer;