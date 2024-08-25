import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("App", {}, [theme])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path={"/"} element={<MainPageAsync />}/>
                        <Route path={"/about"} element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;