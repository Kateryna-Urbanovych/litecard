import React from "react";
import s from "./MailingList.module.scss";
import { MailForm } from "../MailForm/MailForm";

export const MailingList = () => {
  return (
    <section className={s.mailingSection}>
      <p>Invest in yourself</p>
      <h2>
        Have your cake & <br /> eat it too
      </h2>
      <h2>
        token launch & <br /> staking coming soon...
      </h2>

      <MailForm />
    </section>
  );
};
