import React from "react";
import s from "./Header.module.scss";
import { ReactComponent as LogoIcon } from "../../images/logo-icon.svg";
import { ReactComponent as MenuIcon } from "../../images/menu-icon.svg";

export const Header = () => {
  return (
    <header className={s.header}>
      <a href='./'>
        <LogoIcon width='125' height='50' />
      </a>
      <button className={s.buttonMenu}>
        <MenuIcon width='50' height='50' fill='#00AEEF' />
      </button>
    </header>
  );
};
