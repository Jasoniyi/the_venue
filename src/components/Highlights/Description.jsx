import React from "react";
import Fade from "react-reveal/Fade";

const Description = () => {
  return (
    <Fade duration={300}>
      <div className="center_wrapper">
        <h2>Highlights</h2>
        <div className="highlight_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
          sapien quis dolor aliquet dapibus et ut mi. Duis non justo
          condimentum, tincidunt augue id, ultrices lacus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam tellus ipsum, euismod ut massa et, aliquet scelerisque eros.
          Sed quam tortor, rutrum eu nisi sed, mattis porta elit. Curabitur quis
          elit id tortor mattis viverra eget vitae velit. Vivamus fermentum
          eleifend metus, eget cursus diam hendrerit ut. Pellentesque ac
          pellentesque libero, nec mattis lorem.
        </div>
      </div>
    </Fade>
  );
};

export default Description;
