import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Daily Dad Jokes",
    description:
      "Dad jokes delivered to you everyday rain or shine powered by event-driven serverless lambdas.",
    links: {
      source: "/#",
      live: "/#"
    }
  },
  {
    id: 2,
    title: "BBC Earth Daily",
    description:
      "BBC Earth videos sourced from YouTube delivered daily and powered by event-driven serverless lambdas.",
    links: {
      source: "/#",
      live: "/#"
    }
  },
  {
    id: 3,
    title: "dotfiles",
    description: "A personal configuration for macOS built with Bash scripts.",
    links: {
      source: "/#",
      live: "/#"
    }
  },
  {
    id: 4,
    title: "jsstrn.me",
    description: "The personal website of Jesstern Rays built in React.",
    links: {
      source: "/#",
      live: "/#"
    }
  }
];

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
              links={p.links}
            />
          );
        })}
    </section>
  );
}

export default ProjectList;
