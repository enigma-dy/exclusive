import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import A from "../assets/images/A.jpg";
import B from "../assets/images/B.jpg";
import C from "../assets/images/C.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SimpleSlider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2000}
      className="w-full h-72 mx-auto"
    >
      <div data-src={A} className="w-full h-full object-cover" />
      <div data-src={B} className="w-full h-full object-cover" />
      <div data-src={C} className="w-full h-full object-cover" />
    </AutoplaySlider>
  );
};

export default SimpleSlider;
