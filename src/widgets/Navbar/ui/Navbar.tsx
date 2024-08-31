import { classNames } from "shared/lib/helpers/classNames";
import { FC, ReactNode } from "react";
import css from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
    children?: ReactNode;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(css.Navbar, {}, [className])}>
            <div className={css.links}>
                <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
                    {t("ГЛАВНАЯ")}
                </AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
                    {t("О САЙТЕ")}
                </AppLink>
            </div>
        </div>
    );
};