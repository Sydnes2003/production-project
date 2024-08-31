import "app/styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/helpers/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const TestComponent = () => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language == "ru" ? "en" : "ru");
    }

    return (
        <div>
            <button onClick={toggleLanguage}>{t("ПЕРЕВЕСТИ")}</button>
            {t("ТЕСТОВЫЙ ПЕРЕВОД")}
        </div>
    )
}

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("App", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <TestComponent />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;