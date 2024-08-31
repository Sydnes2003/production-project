import css from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { Button, ButtonTheme } from "shared/ui/Button";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div className={classNames(css.Sidebar, {[css.collapsed]: collapsed}, [className])}>
            <Button onClick={toggleCollapsed} theme={ButtonTheme.CLEAR}>__TOGGLE__</Button>
            <div className={css.switchers}>
                <ThemeSwitcher />
                {/* LangSwitcher */}
            </div>
        </div>
    );
};