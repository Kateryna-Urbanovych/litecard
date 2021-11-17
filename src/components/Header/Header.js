import React from "react";
import s from "./Header.module.scss";
import { ReactComponent as LogoIcon } from "../../images/logo-icon.svg";
import { ReactComponent as MenuIcon } from "../../images/menu-icon.svg";
import { Modal } from "../../components/Modal/Modal";

export const Header = () => {
  const toggleModal = () => {
    document.body.classList.toggle("modalOpen");

    if (document.body.classList.contains("modalOpen")) {
      document.querySelector("#modal").style.transform = "translateX(0%)";
      document.querySelector("#overlay").style.opacity = "1";
    } else {
      document.querySelector("#modal").style.transform = "translateX(100%)";
      document.querySelector("#overlay").style.opacity = "0";
    }
  };

  return (
    <header className={s.header}>
      <a href='./'>
        <LogoIcon width='125' height='50' />
      </a>
      <button className={s.buttonMenu}>
        <MenuIcon width='50' height='50' fill='#00AEEF' onClick={toggleModal} />
      </button>
      <Modal onClose={toggleModal} />
    </header>
  );
};
