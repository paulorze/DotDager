import { Box, Container, Grid2, Paper, Typography } from '@mui/material';
import Animacion from '../../../assets/img/Animacion.json';
import AnimacionContainer from './animacion/AnimacionContainer';

const Youtube = () => {
    return (
        <Paper
            id="youtube"
            square
            variant="even"
            sx={{
                padding: {xs: "2rem 0", md: "4rem"},
            }}
        >
            <Container
                maxWidth= "xl"
            >
                <Typography
                    variant='h1'
                >
                    YouTube
                </Typography>
                <Grid2
                    container
                >
                    <Grid2
                        size={{
                            md: 4
                        }}
                        sx={{
                            display: {xs: "none", md: "flex"},
                        }}
                    >
                        <Box
                            height={"400px"}
                        >
                            {Boolean(Animacion) && <AnimacionContainer src={Animacion} /> }
                        </Box>
                    </Grid2>
                    <Grid2
                        size={{
                            xs: 12,
                            md: 8
                        }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant='body1'
                        >
                            I like to make videos about different things, and that is why I have <b>four</b> channels for you to check out: 
                        </Typography>
                        <ul
                            className='youtube_ul'
                        >
                            <a
                                target='_blank'
                                href='https://www.youtube.com/@DotDager'
                                rel="noopener noreferrer"
                            >
                                <li>
                                    <Typography
                                        variant='body1'
                                    >
                                        Main channel, where I usually talk about programming-related stuff.
                                    </Typography>
                                </li>
                            </a>
                            <a
                                target='_blank'
                                href='https://www.youtube.com/c/DagerMusic'
                                rel="noopener noreferrer"
                            >
                                <li>
                                    <Typography
                                        variant='body1'
                                    >
                                        Music channel, where I upload my musical creations.
                                    </Typography>
                                </li>
                            </a>
                            <a
                                target='_blank'
                                href='https://www.youtube.com/c/DagerXIV'
                                rel="noopener noreferrer"
                            >
                                <li>
                                    <Typography
                                        variant='body1'
                                    >
                                        Philosophy channel, where I discourse about random stuff.
                                    </Typography>
                                </li>
                            </a>
                            <a
                                target='_blank'
                                href='https://www.youtube.com/@DagerLive'
                                rel="noopener noreferrer"
                            >
                                <li>
                                    <Typography
                                        variant='body1'
                                    >
                                        Clips channel, where I upload excerpts of my live transmissions.
                                    </Typography>
                                </li>
                            </a>
                        </ul>
                    </Grid2>
                </Grid2>
            </Container>
        </Paper>
    );
};

export default Youtube;