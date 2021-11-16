import React from "react";
import s from "./MailingListForm.module.scss";

export const MailingListForm = () => {
  return (
    <section className={s.mailingSection}>
      <p>Invest in yourself</p>
      <h2>
        Have your cake & <br /> eat it too
      </h2>
      <h2>
        token launch & <br /> staking coming soon...
      </h2>

      <form id='mailingListForm' className={s.mailingListForm}>
        <b>Subscribe to Our Mailing List</b>
        <input type='email' placeholder='Enter your email here' required />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};
