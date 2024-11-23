import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import LogoStatic from "../../assets/logo/LogoStatic.svg";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const Navbar = ({handleNavigate, open, handleOpen, handleClose}) => {
    return (
        <>
            <AppBar
                enableColorOnDark
                position="sticky"
                elevation={0}
            >
                <Container
                    maxWidth="xl"
                >
                    <Toolbar
                        disableGutters
                    >
                        <Box
                            height={"60px"}
                            width={"120px"}
                            className={"navbar__logo"}
                            onClick={()=>handleNavigate("/")}
                        >
                            <img src={LogoStatic} alt="Logo de DotDager" />
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: {xs: "none", sm: "flex"},
                                justifyContent: "flex-end",
                                alignItems: "center"
                            }}
                        >
                            <Button
                                variant="navbar"
                                className="btn__underlined__animation"
                                onClick={()=>handleNavigate("/")}
                            >
                                <span
                                    className="span__underlined__animation"
                                >
                                    Home
                                </span>
                            </Button>
                            <Button
                                variant="navbar"
                                className="btn__underlined__animation"
                                onClick={()=>handleNavigate("/#about")}
                            >
                                <span
                                    className="span__underlined__animation"
                                >
                                    About
                                </span>
                            </Button>
                            <Button
                                variant="navbar"
                                className="btn__underlined__animation"
                                onClick={()=>handleNavigate("/#youtube")}
                            >
                                <span
                                    className="span__underlined__animation"
                                >
                                    YouTube
                                </span>
                            </Button>
                            <Button
                                variant="navbar"
                                className="btn__underlined__animation"
                                onClick={()=>handleNavigate("/#music")}
                            >
                                <span
                                    className="span__underlined__animation"
                                >
                                    Music
                                </span>
                            </Button>
                            <Button
                                variant="navbar"
                                className="btn__underlined__animation"
                                onClick={()=>handleNavigate("/#contact")}
                            >
                                <span
                                    className="span__underlined__animation"
                                >
                                    Contact
                                </span>
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: {xs: "flex", sm: "none"},
                                justifyContent: "flex-end",
                                alignItems: "center"
                            }}
                        >
                            <IconButton
                                onClick={handleOpen}
                            >
                                <MenuOpenIcon
                                    sx={{
                                        width: 48,
                                        height: 48
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="top"
                open={open}
                onClose={handleClose}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: {xs: 'block', md: 'none'},
                }}
                elevation={0}
            >
                <Box
                    width={"100%"}
                    padding={"8px 16px"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                >
                    <Box
                        sx={{
                            width: "100px"
                        }}
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                        onClick={()=>{handleNavigate("/");handleClose();}}
                    >
                        <img src={LogoStatic} alt="Logo de DotDager" />
                    </Box>
                    <Box
                        onClick={handleClose}
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center"
                        }}
                    >
                        <IconButton
                            size="medium"
                            aria-label="open menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            tabIndex={0}
                            sx={{
                                margin: '8px 8px 0 0'
                            }}
                        >
                            <CloseIcon
                                sx={{
                                    width: 48,
                                    height: 48
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    sx={{
                        textAlign: 'right',
                        borderBottom: "2px solid #c4d8e3"
                    }}
                >
                    <List
                        sx={{
                            padding: '0 16px'
                        }}
                    >
                        <ListItem
                            disablePadding
                            sx={{
                                margin: '16px auto',
                            }}
                        >
                            <ListItemButton
                                onClick={()=>{handleNavigate("/"); handleClose()}}
                                >
                                <ListItemText
                                    color='primary'
                                    primaryTypographyProps={{fontSize: '16px', letterSpacing: "2px"}}
                                    primary={'Home'}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{
                                margin: '16px auto',
                            }}
                        >
                            <ListItemButton
                                onClick={()=>{handleNavigate("/#about"); handleClose()}}
                                >
                                <ListItemText
                                    color='primary'
                                    primaryTypographyProps={{fontSize: '16px', letterSpacing: "2px"}}
                                    primary={'About'}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{
                                margin: '16px auto',
                            }}
                        >
                            <ListItemButton
                                onClick={()=>{handleNavigate("/#youtube"); handleClose()}}
                                >
                                <ListItemText
                                    color='primary'
                                    primaryTypographyProps={{fontSize: '16px', letterSpacing: "2px"}}
                                    primary={'YouTube'}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{
                                margin: '16px auto',
                            }}
                        >
                            <ListItemButton
                                onClick={()=>{handleNavigate("/#music"); handleClose()}}
                                >
                                <ListItemText
                                    color='primary'
                                    primaryTypographyProps={{fontSize: '16px', letterSpacing: "2px"}}
                                    primary={'Music'}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{
                                margin: '16px auto',
                            }}
                        >
                            <ListItemButton
                                onClick={()=>{handleNavigate("/#contact"); handleClose()}}
                                >
                                <ListItemText
                                    color='primary'
                                    primaryTypographyProps={{fontSize: '16px', letterSpacing: "2px"}}
                                    primary={'Contact'}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;