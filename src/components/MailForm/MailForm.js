import React, { useState } from "react";
import s from "./MailForm.module.scss";

export const MailForm = () => {
  const [value, setValue] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmited(true);
    setValue("");

    setTimeout(() => {
      setIsSubmited(false);
    }, 5000);
  };

  const handleValidate = () => {
    if (value === "" || !value.includes("@")) {
      document.querySelector("#inputMailForm").style.borderColor = "#ff0000";
      document.querySelector("#inputMailForm").style.borderWidth = "2px";
    } else {
      document.querySelector("#inputMailForm").style.borderColor = "#000000";
      document.querySelector("#inputMailForm").style.borderWidth = "1px";
    }
  };

  return (
    <form
      className={s.mailingListForm}
      id='mailingListForm'
      onSubmit={handleSubmit}
    >
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
      <button type='submit' onClick={handleValidate}>
        Submit
      </button>
      {isSubmited && <span className={s.submited}>Thanks for submitting!</span>}
    </form>
  );
};
