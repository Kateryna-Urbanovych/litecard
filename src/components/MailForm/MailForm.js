import React, { useState } from "react";
import s from "./MailForm.module.scss";

export const MailForm = () => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit!");
  };

  return (
    <form className={s.mailingListForm} onSubmit={handleSubmit}>
      <b>Subscribe to Our Mailing List</b>
      <input
        id='inputMailForm'
        type='email'
        value={value}
        className={s.inputForm}
        onChange={handleChange}
        placeholder='Enter your email here'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
