import React, { useContext, useState } from "react";
import { DataContext } from "../components/Datacontext";
import Hero from "../components/Hero";

import Flashsales from "../components/Flashsales";
import Catogorynav from "../components/Catogorynav";
import BestSselling from "../components/Bestselling";
import Banner from "../components/Banner";

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
    <div className="bg-gray-900 text-white font-sans">
      <Hero />
      <div className="container mx-auto px-4">
        <Flashsales />
        <Catogorynav />
        <BestSselling />
        <Banner />
      </div>
    </div>
  );
}
