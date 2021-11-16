import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { HomeBusinessCards } from "./components/HomeBusinessCards/HomeBusinessCards";
import { GiftCards } from "./components/GiftCards/GiftCards";
import { ProfitSteps } from "./components/ProfitSteps/ProfitSteps";
import { PoweredBy } from "./components/PoweredBy/PoweredBy";
import { MailingListForm } from "./components/MailingListForm/MailingListForm";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeBusinessCards />
      <GiftCards />
      <ProfitSteps />
      <PoweredBy />
      <MailingListForm />
      <Footer />
    </>
  );
};
