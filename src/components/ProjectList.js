import React from "react";
import Project from "./Project";
import { projects } from "../data";
import Section from "./Section";

function ProjectList() {
  return (
    <Section heading="Projects" icon="🏗" iconLabel="Building Construction">
      {projects &&
        projects.map(p => {
          return (
            <Project
              key={p.id}
              title={p.title}
              description={p.description}
              technologies={p.technologies}
              links={p.links}
            />
          );
        })}
    </Section>
  );
}

export default ProjectList;
