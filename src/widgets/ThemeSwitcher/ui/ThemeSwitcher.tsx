import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import css from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(css.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            <ThemeIcon fill={theme === Theme.LIGHT ? '#FFC700' : '#0115C6'} />
        </Button>
    );
};
