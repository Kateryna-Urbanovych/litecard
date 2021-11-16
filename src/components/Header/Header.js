import React, { useState } from "react";
import s from "./Header.module.scss";
import { ReactComponent as LogoIcon } from "../../images/logo-icon.svg";
import { ReactComponent as MenuIcon } from "../../images/menu-icon.svg";
import { Modal } from "../../components/Modal/Modal";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((state) => !state);
    document.body.classList.toggle("modalOpen");
  };

  return (
    <header className={s.header}>
      <a href='./'>
        <LogoIcon width='125' height='50' />
      </a>
      <button className={s.buttonMenu}>
        <MenuIcon width='50' height='50' fill='#00AEEF' onClick={toggleModal} />
      </button>
      {showModal && <Modal onClose={toggleModal} />}
    </header>
  );
};
