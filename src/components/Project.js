import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Block = styled.div`
  width: 60vw;
  padding: 0.5rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  background-color: #fbfbfb;
  box-shadow: 4px 4px 8px #b7b7b7, -4px -4px 8px #ffffff;
`;

const Icon = styled.img`
  margin: 0 0.3rem;
  width: 16px;
  padding: 8px;
  border-radius: 10%;
  box-shadow: 4px 4px 8px #b7b7b7, -4px -4px 8px #ffffff;
  &:hover,
  &:active {
    box-shadow: inset 4px 4px 8px #b7b7b7, inset -4px -4px 8px #ffffff;
  }
`;

function Project({ title, description, technologies, links }) {
  const renderIcon = (link, icon) => {
    return (
      link && (
        <a href={link}>
          <Icon alt="project icon" src={icon} />
        </a>
      )
    );
  };

  return (
    <Block className="project">
      <header>
        <h3>{title}</h3>
        <div>
          {renderIcon(links.source, "images/fork.png")}
          {renderIcon(links.live, "images/web.png")}
        </div>
      </header>
      <p>{description}</p>
      <p className="technologies">
        <span>technologies: </span>
        {technologies}
      </p>
    </Block>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired
};

export default Project;
