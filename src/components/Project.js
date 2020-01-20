import React from "react";
import PropTypes from "prop-types";

function Project({ title, description, links: { source, live } }) {
  return (
    <div className="project">
      <header>
        <h3>{title}</h3>
        <div className="icons">
          <a href={source}>
            <img
              alt="project source code"
              src="https://img.icons8.com/small/64/000000/code-fork.png"
            />
          </a>
          <a href={live}>
            <img
              alt="project website"
              src="https://img.icons8.com/small/64/000000/web-design.png"
            />
          </a>
        </div>
      </header>
      <p>{description}</p>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired
};

export default Project;
