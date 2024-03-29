import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade duration={700}>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">my first reactApp</div>
      </Fade>
    </footer>
  );
};

export default Footer;
