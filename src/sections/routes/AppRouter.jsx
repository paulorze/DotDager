import { Route, Routes } from 'react-router-dom';
import { routes } from './menuRoutes';
import LayoutContainer from '../../layout/LayoutContainer';

const AppRouter = () => {
    return (
        <Routes>
            <Route
                element={<LayoutContainer/>}
            >
                {(routes).map(({key, path, Element})=>(
                    <Route
                        key={key}
                        path={path}
                        element={<Element/>}
                    />
                ))}
            </Route>
        </Routes>
    );
};

export default AppRouter;