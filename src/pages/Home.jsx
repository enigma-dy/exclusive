import React, { useContext, useState } from "react";
import { DataContext } from "../components/Datacontext";
import Hero from "../components/Hero";

import Flashsales from "../components/Flashsales";
import Catogorynav from "../components/Catogorynav";
import BestSselling from "../components/Bestselling";
import Banner from "../components/Banner";
import Section from "../components/Section";
export default function Home() {
  const { loading, error } = useContext(DataContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="sm:w-full lg:w-4/5 font-sans  my-10 mx-auto">
      <Hero />
      <div className="container mx-auto px-4">
        <Flashsales />
        <Catogorynav />
        <BestSselling />
        <Section title="Sponsored Product" />
        <Section title="Top Selling Items" />
        <Section title="Appliance Upgrade" />
        <Section title="Spend and Save" />
        <Section title="Super Deals" />
        <Banner />
      </div>
    </div>
  );
}
