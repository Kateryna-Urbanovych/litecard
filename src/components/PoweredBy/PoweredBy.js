import React from "react";
import s from "./PoweredBy.module.scss";

export const PoweredBy = () => {
  return (
    <section className={s.poweredBy}>
      <p>Send or Use Gift Cards as QR Codes</p>
      <h2>
        WE HELP HOME & BUSINESS OWNERS CONVERT CRYPTO PROFITS INTO HOME
        IMPROVEMENTS & BUSINESS INVESTMENTS
      </h2>
      <p>Powered by</p>

      <ul>
        <li>
          <img
            width='442'
            height='66'
            alt='Coingrate'
            src='https://static.wixstatic.com/media/3629b4_943439d1244a43c7a2bbe5158070845b~mv2.png/v1/fill/w_442,h_66,al_c,q_85,usm_0.66_1.00_0.01/3629b4_943439d1244a43c7a2bbe5158070845b~mv2.webp'
          />
        </li>
        <li>
          <img
            width='600'
            height='137'
            alt='Coinbase Commerce'
            src='https://static.wixstatic.com/media/3629b4_5a4a90a9aa284d6ca9fbe3337b7ed45a~mv2.png/v1/fill/w_561,h_120,al_c,q_85,usm_0.66_1.00_0.01/3629b4_5a4a90a9aa284d6ca9fbe3337b7ed45a~mv2.webp'
          />
        </li>
        <li>
          <img
            width='310'
            height='240'
            alt='Bitpay'
            src='https://static.wixstatic.com/media/3629b4_2c7300620ea64c409afa8ca653d279e5~mv2.png/v1/fill/w_311,h_241,al_c,q_85,usm_0.66_1.00_0.01/3629b4_2c7300620ea64c409afa8ca653d279e5~mv2.webp'
          />
        </li>
        <li>
          <img
            width='380'
            height='127'
            alt='React'
            src='https://static.wixstatic.com/media/3629b4_a55a891f4d2b418c875c38f13960f7d7~mv2.png/v1/fill/w_381,h_127,al_c,q_85,usm_0.66_1.00_0.01/3629b4_a55a891f4d2b418c875c38f13960f7d7~mv2.webp'
          />
        </li>
      </ul>
    </section>
  );
};
