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
                            Me gusta hacer videos de diferentes temáticas, y es por eso que tengo no uno, sino <b>cuatro</b> canales para que te entretengas:
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
                                        Mi canal principal, donde suelo hablar de cosas relacionadas a la programación.
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
                                        Canal de música, donde subo mis composiciones.
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
                                        Canal de filosofía, donde la flasheo un poco.
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
                                        Canal de clips que recorto de mis streams.
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