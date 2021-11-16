import React from "react";
import s from "./GiftCards.module.scss";

export const GiftCards = () => {
  return (
    <section>
      <ul className={s.giftCardsList}>
        <li className={s.giftCardsItem}>
          <div className={s.giftCardsThumb}>
            <img
              width='270'
              height='180'
              alt='The Home Depot'
              src='https://static.wixstatic.com/media/3629b4_d060888f064a4ceb8db1f86c4c725d57~mv2.png/v1/fill/w_236,h_169,al_c,q_85,usm_0.66_1.00_0.01/3629b4_d060888f064a4ceb8db1f86c4c725d57~mv2.webp'
            />
          </div>
        </li>
        <li className={s.giftCardsItem}>
          <div className={s.giftCardsThumb}>
            <img
              width='270'
              height='140'
              alt='Walmart'
              src='https://static.wixstatic.com/media/3629b4_ca66f2bff1004127ac0d2b32e8b6d77f~mv2.png/v1/fill/w_301,h_187,al_c,q_85,usm_0.66_1.00_0.01/3629b4_ca66f2bff1004127ac0d2b32e8b6d77f~mv2.webp'
            />
          </div>
        </li>
        <li className={s.giftCardsItem}>
          <div className={s.giftCardsThumb}>
            <img
              width='300'
              height='170'
              alt='Apple'
              src='https://static.wixstatic.com/media/3629b4_53a49c5f17174056b4ac4b61002e2407~mv2.jpeg/v1/fill/w_246,h_155,al_c,q_80,usm_0.66_1.00_0.01/3629b4_53a49c5f17174056b4ac4b61002e2407~mv2.webp'
            />
          </div>
        </li>
        <li className={s.giftCardsItem}>
          <div className={s.giftCardsThumb}>
            <img
              width='260'
              height='140'
              alt='Lowes'
              src='https://static.wixstatic.com/media/3629b4_d712a1eecab8409c9a268fda93ae6f94~mv2.jpeg/v1/fill/w_226,h_226,al_c,q_80,usm_0.66_1.00_0.01/3629b4_d712a1eecab8409c9a268fda93ae6f94~mv2.webp'
            />
          </div>
        </li>
        <li className={s.giftCardsItem}>
          <div className={s.giftCardsThumb}>
            <img
              width='280'
              height='150'
              alt='Target'
              src='https://static.wixstatic.com/media/3629b4_bdf6e2c6801c4297a728c0659a1b3cdd~mv2.png/v1/fill/w_244,h_164,al_c,q_85,usm_0.66_1.00_0.01/3629b4_bdf6e2c6801c4297a728c0659a1b3cdd~mv2.webp'
            />
          </div>
        </li>
        <li className={s.giftCardsItem}>
          <div className={s.giftCardsThumb}>
            <img
              width='350'
              height='220'
              alt='Amazon'
              src='https://static.wixstatic.com/media/3629b4_6063299b9d65440590115cadb17a7b13~mv2.png/v1/fill/w_295,h_166,al_c,q_85,usm_0.66_1.00_0.01/3629b4_6063299b9d65440590115cadb17a7b13~mv2.webp'
            />
          </div>
        </li>
      </ul>
    </section>
  );
};
