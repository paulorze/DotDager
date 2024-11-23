import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
    return (
        <Paper
            id="contact"
            square
            variant="even"
            sx={{
                padding: {xs: "2rem 0", md: "4rem"},
            }}
        >
            <Container
                maxWidth="xl"
            >
                <Typography
                    variant="h1"
                >
                    Contact
                </Typography>
                <Typography
                    variant='body1'
                >
                    I know that you love me now. So, please, reach out to me in any of the following social media to send me your feet pics. Also, check out my Discord server, where my lovely community resides.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >
                    <IconButton
                        className="redes__logo"
                        href='https://www.youtube.com/@DotDager'
                        target="_blank"
                    >
                        <YouTubeIcon
                            sx={{
                                width: {xs: 48, md: 64},
                                height: {xs: 48, md: 64}
                            }}
                        />
                    </IconButton>
                    <IconButton
                        sx={{
                            width: {xs: 48, md: 64},
                            height: {xs: 48, md: 64}
                        }}
                        className="redes__logo"
                        href='https://www.twitch.tv/dagerxiv'
                        target="_blank"
                    >
                        <svg fill="currentColor" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 470 470" xmlSpace="preserve">
                            <g>
                                <g>
                                    <g>
                                        <path d="M460,7.5H60c-2.817,0-5.504,1.189-7.399,3.273l-50,55C0.927,67.614,0,70.013,0,72.5v290c0,5.522,4.477,10,10,10h115v80
                                            c0,5.522,4.477,10,10,10h55c2.791,0,5.455-1.166,7.348-3.217l57.03-61.783H400c2.652,0,5.196-1.054,7.071-2.929l60-60
                                            c1.875-1.876,2.929-4.419,2.929-7.071v-310C470,11.977,465.523,7.5,460,7.5z M450,323.357L395.858,377.5H250
                                            c-2.791,0-5.455,1.166-7.348,3.217l-57.03,61.783H145v-80c0-5.522-4.477-10-10-10H20V76.366L64.424,27.5H450V323.357z"/>
                                        <path d="M85,322.5h80v45c0,3.714,2.058,7.121,5.345,8.851c1.462,0.769,3.061,1.149,4.654,1.149c1.988,0,3.968-0.592,5.666-1.76
                                            l77.441-53.24H350c2.652,0,5.196-1.054,7.071-2.929l55-55c1.875-1.876,2.929-4.419,2.929-7.071v-190c0-5.522-4.477-10-10-10H85
                                            c-5.523,0-10,4.478-10,10v245C75,318.022,79.477,322.5,85,322.5z M95,77.5h300v175.857L345.858,302.5H255
                                            c-2.023,0-3.999,0.613-5.665,1.76L185,348.489V312.5c0-5.522-4.477-10-10-10H95V77.5z"/>
                                        <path d="M215,232.5v-100c0-5.522-4.477-10-10-10h-40c-5.523,0-10,4.478-10,10v100c0,5.523,4.477,10,10,10h40
                                            C210.523,242.5,215,238.023,215,232.5z M195,222.5h-20v-80h20V222.5z"/>
                                        <path d="M265,242.5h40c5.523,0,10-4.477,10-10v-100c0-5.522-4.477-10-10-10h-40c-5.523,0-10,4.478-10,10v100
                                            C255,238.023,259.477,242.5,265,242.5z M275,142.5h20v80h-20V142.5z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </IconButton>
                    <IconButton
                        className="redes__logo"
                        href='https://www.instagram.com/dager.32/'
                        target="_blank"
                    >
                        <InstagramIcon
                            sx={{
                                width: {xs: 48, md: 64},
                                height: {xs: 48, md: 64}
                            }}
                        />
                    </IconButton>
                    <IconButton
                        sx={{
                            width: {xs: 48, md: 64},
                            height: {xs: 48, md: 64}
                        }}
                        className="redes__logo"
                        href='https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=GbLs3UPwQzCdJH-HU45lnA&nd=1&dlsi=ba52117cccc34a1d'
                        target="_blank"
                    >
                        <svg width="100%" height="100%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7479.000000)" fill="currentColor">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z" id="spotify-[#162]"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </IconButton>
                    <IconButton
                        className="redes__logo"
                        sx={{
                            width: {xs: 48, md: 64},
                            height: {xs: 48, md: 64}
                        }}
                        href='https://www.tiktok.com/@elantrodedager'
                        target="_blank"
                    >
                        <svg fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
                    </IconButton>
                    <IconButton
                        className="redes__logo"
                        href='https://github.com/MarianoVilla'
                        target="_blank"
                    >
                        <GitHubIcon
                            sx={{
                                width: {xs: 48, md: 64},
                                height: {xs: 48, md: 64}
                            }}
                        />
                    </IconButton>
                    <IconButton
                        className="redes__logo"
                        sx={{
                            width: {xs: 48, md: 64},
                            height: {xs: 48, md: 64}
                        }}
                        href='https://discord.com/invite/4NFk6TamAB'
                        target="_blank"
                    >
                        <svg width="100%" height="100%" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fillRule="nonzero">
                        </path>
                            </g>
                        </svg>
                    </IconButton>
                </Box>
            </Container>
        </Paper>
    );
};

export default Contact;