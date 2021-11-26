import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import s from "./MailForm.module.scss";

export const MailForm = () => {
  const [value, setValue] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [error, setError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail) {
      // POST запрос для отправки email
      postEmail(value);

      setIsSubmited(true);
      setValue("");

      setTimeout(() => {
        setIsSubmited(false);
      }, 5000);
    }
  };

  const handleValidate = () => {
    if (value === "" || !/.+@.+\..+/i.test(value)) {
      setIsValidEmail(false);
      toast.warning("❗❗ Enter a valid email");
      document.querySelector("#inputMailForm").style.borderColor = "#ff0000";
      document.querySelector("#inputMailForm").style.borderWidth = "2px";
    } else {
      setIsValidEmail(true);
      document.querySelector("#inputMailForm").style.borderColor = "#000000";
      document.querySelector("#inputMailForm").style.borderWidth = "1px";
    }
  };

  const postEmail = async (email) => {
    try {
      // для проверки
      console.log(`POST to URL_API with ${email}`);

      const response = await axios.post("URL_API", email);
      toast.success("✔️ Thanks for subscription!");
      setError(false);
      return response; // если нужно что-то возвращать...
    } catch (error) {
      setError(true);
      // пройтись по ошибкам которые возращает API
      if (error) {
        toast.error("❌ Sorry, something went wrong!");
      }
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
      {isSubmited && !error && (
        <span className={s.submited}>Thanks for submitting!</span>
      )}
    </form>
  );
};
