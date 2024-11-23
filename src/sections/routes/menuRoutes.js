import HomeContainer from "../home/HomeContainer";
import InicioContainer from "../inicio/InicioContainer";

export const routes = [
    {
        key: 'Home',
        path: '/',
        Element: HomeContainer
    },
    {
        key: 'Inicio',
        path: '/es',
        Element: InicioContainer
    },
]