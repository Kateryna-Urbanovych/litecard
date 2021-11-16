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
        <li>
          <HomeIcon width='80' height='82' className={s.giftCardsIcon} />
          HOME IMPROVEMENT
        </li>
        <li className={s.homeBusinessItem}>
          <ArrowForwardIcon
            width='83'
            height='62'
            fill='#00AEEF'
            className={s.arrowForwardIcon}
          />
          <div>
            <GiftCardsIcon width='72' height='45' className={s.giftCardsIcon} />
            GIFT CARDS
          </div>
          <ArrowBack
            width='83'
            height='62'
            fill='#00AEEF'
            className={s.arrowBackIcon}
          />
        </li>
        <li>
          <BusinessIcon width='78' height='77' className={s.giftCardsIcon} />
          BUSINESS INVESTMENTS
        </li>
      </ul>
    </section>
  );
};
