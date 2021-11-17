import React from "react";
import s from "./HomeBusinessCards.module.scss";
import { ReactComponent as HomeIcon } from "../../images/home-icon.svg";
import { ReactComponent as GiftCardsIcon } from "../../images/gift-cards-icon.svg";
import { ReactComponent as BusinessIcon } from "../../images/business-icon.svg";
import { ReactComponent as ArrowForwardIcon } from "../../images/arrow-forward-icon.svg";
import { ReactComponent as ArrowBack } from "../../images/arrow-back.svg";

export const HomeBusinessCards = () => {
  return (
    <section className={s.homeBusinessCards}>
      <ul className={s.homeBusinessList}>
        <li className='icon'>
          <HomeIcon width='145' height='145' className={s.giftCardsIconHome} />
          HOME IMPROVEMENT
        </li>
        <li className='arrow'>
          <ArrowForwardIcon
            width='110'
            height='80'
            fill='#00AEEF'
            className={s.arrowForwardIcon}
          />
        </li>
        <li className='icon'>
          <GiftCardsIcon
            width='105'
            height='105'
            className={s.giftCardsIconCard}
          />
          GIFT <br /> CARDS
        </li>
        <li className='arrow'>
          <ArrowBack
            width='110'
            height='80'
            fill='#00AEEF'
            className={s.arrowBackIcon}
          />
        </li>
        <li className='icon'>
          <BusinessIcon
            width='145'
            height='145'
            className={s.giftCardsIconBusiness}
          />
          BUSINESS INVESTMENTS
        </li>
      </ul>
    </section>
  );
};
