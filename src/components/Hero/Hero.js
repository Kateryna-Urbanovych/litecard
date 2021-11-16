import React from "react";
import s from "./Hero.module.scss";
import { ReactComponent as HeroIcon } from "../../images/hero-icon.svg";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <h1 className={s.heroTitle}>
        Easily convert crypto <br /> to gift cards
      </h1>
      <HeroIcon width='378' height='378' className={s.heroIcon} />
      <a href='#mailingListForm' className={s.signUp}>
        Sign Up
      </a>
    </section>
  );
};
