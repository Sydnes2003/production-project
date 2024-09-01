import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import css from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
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
            type="button"
            className={classNames(css.Button, {}, [className, css[theme]])}
            {...restProps}
        >
            {children}
        </button>
    );
};
