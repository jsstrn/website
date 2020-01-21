import React from "react";
import PropTypes from "prop-types";

function Project({
  title,
  description,
  technologies,
  links: { source, live }
}) {
  return (
    <div className="project">
      <header>
        <h3>{title}</h3>
        <div className="icons">
          <a href={source}>
            <img alt="project source code" src="images/fork.png" />
          </a>
          <a href={live}>
            <img alt="project website" src="images/web.png" />
          </a>
        </div>
      </header>
      <p>{description}</p>
      <p className="technologies">
        <span>technologies: </span>
        {technologies}
      </p>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired
};

export default Project;
