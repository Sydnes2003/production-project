import "app/styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/helpers/classNames";
import { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("App", {}, [theme])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage />}/>
                    <Route path={"/about"} element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;