import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { HomeBusinessCards } from "./components/HomeBusinessCards/HomeBusinessCards";
import { GiftCards } from "./components/GiftCards/GiftCards";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeBusinessCards />
      <GiftCards />
    </>
  );
};
