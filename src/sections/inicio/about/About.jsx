import { Container, Grid2, Paper, Typography } from '@mui/material';
import './About.css';

const About = () => {
    return (
        <Paper
            id="about"
            square
            sx={{
                padding: {xs: "2rem 0", md: "4rem"}
            }}
            variant='odd'
        >
            <Container
                maxWidth="xl"
            >
                <Typography
                    variant='h1'
                >
                    Sobre Mí
                </Typography>
                <Grid2
                    container
                >
                    <Grid2
                        size={{
                            xs: 12,
                            md: 6,
                            lg: 8
                        }}
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant='body1'
                            
                        >
                            Soy un creador de contenido y programador argentino. Amo hacer videos sobre temas relacionados a la programación. En mi tiempo libre, también me gusta viciar jueguitos (arriba las manos los main Jhin, por favor) y hacer algo de música. También me interesa la filosofía y mezclar temáticas diversas con chistes de pitos. <i>Muchos</i> chistes de pitos y humor haría ofender a tu mamá.
                        </Typography>
                    </Grid2>
                    <Grid2
                        size={{
                            md: 6,
                            lg: 4
                        }}
                        sx={{
                            position: "relative",
                            display: {xs: "none", md: "block"},
                            height: "400px"
                        }}
                    >
                        <div id="fondo" ></div>
                        <div
                            className='about_parallax'
                            id="parallax"
                        >
                            <div className='about_parallax_layer parallax' id="layer_1" data-speed="20"></div>
                        </div>
                    </Grid2>
                </Grid2>
            </Container>
        </Paper>
    );
};

export default About;