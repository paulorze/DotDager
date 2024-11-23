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
                    About me
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
                            I am an argentinian content creator and programmer. I love making videos about stuff related to programming. On my free time, I also like to play video games (Jhin main right here) and play music. I am also interested in philosophy and mixing unexpected topics with dick jokes. <i>Lots</i> of dick jokes and over the top humour.
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