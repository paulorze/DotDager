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
                            Music
                        </Typography>
                        <Typography
                            variant='body1'
                        >
                            After consuming some sugar through my nose, I enjoy making music. Feel free to check some demos here, or the complete tracks directly on Spotify.
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