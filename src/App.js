import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { HomeBusinessCards } from "./components/HomeBusinessCards/HomeBusinessCards";
import { GiftCards } from "./components/GiftCards/GiftCards";
import { ProfitSteps } from "./components/ProfitSteps/ProfitSteps";
import { PoweredBy } from "./components/PoweredBy/PoweredBy";
import { MailingList } from "./components/MailingList/MailingList";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Header />
      <Hero />
      <HomeBusinessCards />
      <GiftCards />
      <ProfitSteps />
      <PoweredBy />
      <MailingList />
      <Footer />
    </>
  );
};
