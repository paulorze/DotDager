import { Box, Container, Grid2, Paper, Typography } from '@mui/material';

const Music = () => {
    return (
        <Paper
            id="music"
            square
            sx={{
                padding: {xs: "2rem 0", md: "4rem"}
            }}
            variant='odd'
        >
            <Container
                maxWidth="xl"
            >
                <Grid2
                    container
                    spacing={2}
                >
                    <Grid2
                        size={{
                            xs: 12,
                            md: 6,
                            lg: 7,
                            xl: 8
                        }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}
                    >
                        <Typography
                            variant='h1'
                        >
                            Música
                        </Typography>
                        <Typography
                            variant='body1'
                        >
                            <del>Despues de tomar un poco de falopa</del>, me gusta hacer algo de música. Escuchate algunas demos acá mismo, o si querés, los temas enteros en Spotify.
                        </Typography>
                    </Grid2>
                    <Grid2
                        size={{
                            xs: 12,
                            md: 6,
                            lg: 5,
                            xl: 4
                        }}
                        sx={{
                            marginTop: "2rem"
                        }}
                    >
                        <iframe src="https://open.spotify.com/embed/artist/6bkClBMJd4qKxJp0J5vHsz?utm_source=generator&theme=0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className='music_iframe' ></iframe>
                    </Grid2>
                </Grid2>
            </Container>
        </Paper>
    );
};

export default Music;