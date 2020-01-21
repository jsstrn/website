import React from "react";
import Project from "./Project";
import projects from "../data/projects.json";

function ProjectList() {
  return (
    <section className="flex-col-center">
      <h2>
        Projects{" "}
        <span role="img" aria-label="Building Construction">
          🏗
        </span>
      </h2>

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
    </section>
  );
}

export default ProjectList;
