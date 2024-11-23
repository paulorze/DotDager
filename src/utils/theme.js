import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#140a1c',
        },
        secondary: {
            main: '#12081a',
        },
        font: {
            main: '#ffffff',
        },
        grey: {
            main: '#ede8e8'
        },
        success: {
            main: '#5be37f'
        },
        background: {
            paper: "#140a1c"
        }
    },
    typography: {
        fontFamily: '"Slabo 13px", serif',
    },
    components: {
        MuiPaper: {
            variants: [
                {
                    props: { variant: "even"},
                    style: {
                        backgroundColor: "#110f12"
                    }
                },
                {
                    props: {variant: "odd"},
                    style: {
                        backgroundColor: "#826293"
                    }
                }
            ]
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'p',
                    sobretitulo: "p",
                    hero: "p",
                    subtitulo: "p",
                    cardTitle: "p",
                    cardText: "p",
                },
            },
            variants: [
                {
                    props: {variant: "sobretitulo"},
                    style: {
                        fontSize: "clamp(1.5rem, 0.672rem + 4.138vi, 3rem)",
                        fontFamily: "'Slabo 13px', Roboto",
                    }
                },
                {
                    props: {variant: "subtitulo"},
                    style: {
                        fontSize: "clamp(2rem, 0.672rem + 4.138vi, 3rem)",
                        fontFamily: "'Slabo 13px', Roboto",
                        fontWeight: 600,
                        letterSpacing: "clamp(0.2rem, 0.672rem + 4.138vi, 0.4rem)"
                    }
                },
                {
                    props:{variant: "h1"},
                    style: {
                        fontSize: "clamp(3rem, 1.407rem + 2.963vi, 4rem)",
                        fontWeight: 700,
                        marginBottom: "clamp(1rem, 1.407rem + 2.963vi, 2rem)"
                    }
                },
                {
                    props:{variant: "body1"},
                    style: {
                        fontFamily: "'Slabo 13px', Roboto",
                        fontSize: "clamp(1.25rem, 0.731rem + 1.132vi, 1.75rem)",
                        fontWeight: 400,
                        textIndent: "1rem",
                        lineHeight: "clamp(2rem, 1.056rem + 2.222vi, 3rem)"
                    }
                },
                {
                    props:{variant: "body2"},
                    style: {
                        fontFamily: "Slabo 13px, Roboto",
                        fontSize: "12px",
                        margin: {xs: "2rem auto", md: "2rem auto"},
                        display: "block",
                        textAlign: "center",
                        lineHeight: "24px"
                    }
                },
            ]
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: "navbar"},
                    style: {
                        textTransform: "none",
                        margin: "0 16px",
                        padding: "6px 0",
                        fontFamily: "'Slabo 13px', Roboto",
                        fontSize: "18px",
                        letterSpacing: "2px",
                    }
                },
            ]
        },
    }
});