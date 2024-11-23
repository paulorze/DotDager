import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const NavbarContainer = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleNavigate = (url) => {
        navigate(url);
    };

    const handleOpen = ()=> {
        setOpen(prev=>true);
    };

    const handleClose = () => {
        setOpen(prev=>false);
    };

    return (
        <Navbar
            handleNavigate={handleNavigate}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
        />
    );
};

export default NavbarContainer;