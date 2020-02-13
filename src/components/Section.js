import React from "react";
import PropTypes from "prop-types";

function Section({ heading, icon, iconLabel, children }) {
  return (
    <section className="flex-col-center">
      <h2>
        {heading}{" "}
        <span role="img" aria-label={iconLabel}>
          {icon}
        </span>
      </h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconLabel: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Section;
