import React from "react";
import Carousel from "./Carousel";
import Countdown from "./Countdown";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="artist_name">
        <div className="wrapper">Araina Grande</div>
      </div>
      <Carousel />
      <Countdown />
    </div>
  );
};

export default Featured;
