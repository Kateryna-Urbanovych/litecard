import React from "react";
import s from "./ProfitSteps.module.scss";

export const ProfitSteps = () => {
  return (
    <section className={s.profitsSteps}>
      <h2>
        Improve your home & business
        <br /> with crypto profits
      </h2>
      <p>Simple Steps :</p>
      <ul>
        <li>
          1. Select <br /> gift card & amount to purchase
        </li>
        <li>2. Connect account select crypto to convert</li>
      </ul>
    </section>
  );
};
