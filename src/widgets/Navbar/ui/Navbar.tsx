import { classNames } from "shared/lib/helpers/classNames";
import { FC, ReactNode } from "react";
import css from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
    children?: ReactNode;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(css.Navbar, {}, [className])}>
            <div className={css.links}>
                <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
                    Главная
                </AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};