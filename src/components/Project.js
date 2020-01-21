import React from "react";
import PropTypes from "prop-types";

function Project({ title, description, technologies, links }) {
  const renderIcon = (link, icon) => {
    return (
      link && (
        <a href={link}>
          <img alt="project icon" src={icon} />
        </a>
      )
    );
  };

  return (
    <div className="project">
      <header>
        <h3>{title}</h3>
        <div className="icons">
          {renderIcon(links.source, "images/fork.png")}
          {renderIcon(links.live, "images/web.png")}
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
