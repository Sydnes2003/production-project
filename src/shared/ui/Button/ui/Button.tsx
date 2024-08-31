import css from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";

export enum ButtonTheme {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...restProps
    } = props;

    return (
        <button
            className={classNames(css.Button, {}, [className, theme])}
            {...restProps}
        >
            {children}
        </button>
    );
};