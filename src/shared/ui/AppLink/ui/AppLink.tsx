import css from "./AppLink.module.scss";
import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...restProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(css.AppLink, {}, [className, css[theme]])}
            {...restProps}
        >
            {children}
        </Link>
    );
};