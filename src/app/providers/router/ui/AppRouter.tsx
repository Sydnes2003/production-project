import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map((route) => (
                    <Route path={route.path} element={route.element} key={route.path} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;