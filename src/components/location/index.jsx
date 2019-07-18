import React from "react";
import Fade from "react-reveal/Fade";

const Location = () => {
  return (
    <Fade duration={300}>
      <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7473669009037!2d3.4285587140172034!3d6.426494995350389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe6a84cddd53!2sEko+Hotels+%26+Suites!5e0!3m2!1sen!2sng!4v1563470313436!5m2!1sen!2sng"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        />

        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>
    </Fade>
  );
};

export default Location;
