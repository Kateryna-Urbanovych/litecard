import React from "react";
import s from "./Hero.module.scss";
import { ReactComponent as HeroIcon } from "../../images/hero-icon.svg";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <h1 className={s.heroTitle}>
        EASILY CONVERT CRYPTO <br /> TO GIFT CARDS
      </h1>
      <HeroIcon width='237.67' height='237.67' className={s.heroIcon} />
      <a href='#mailingListForm' className={s.signUp}>
        Sign Up
      </a>
    </section>
  );
};
