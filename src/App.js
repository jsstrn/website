import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function Header() {
  return (
    <header className="main flex">
      <img
        alt="Jesstern Rays"
        src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png"
      />
      <h1>Jesstern Rays</h1>
      <p>Software Engineer at ThoughtWorks</p>
    </header>
  );
}

function About() {
  return (
    <section className="flex">
      <h2>
        About{" "}
        <span role="img" aria-label="Waving Hand">
          👋
        </span>
      </h2>
      <div className="about">
        <p>
          Jesstern delivers quality software through test driven development and
          clean code principles.
        </p>
        <p>
          Jesstern loves nature walks, yoga by the beach, and beautiful sunsets.
        </p>
      </div>
    </section>
  );
}

function Project({ title, description }) {
  return (
    <div className="project">
      <header>
        <h3>{title}</h3>
        <div className="icons">
          <a href="/#">
            <img
              alt="project source code"
              src="https://img.icons8.com/small/64/000000/code-fork.png"
            />
          </a>
          <a href="/#">
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
  description: PropTypes.string.isRequired
};

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Daily Dad Jokes",
      description:
        "Dad jokes delivered to you everyday rain or shine powered by event-driven serverless lambdas."
    },
    {
      id: 2,
      title: "BBC Earth Daily",
      description:
        "BBC Earth videos sourced from YouTube delivered daily and powered by event-driven serverless lambdas."
    }
  ];

  return (
    <section className="flex">
      <h2>
        Projects{" "}
        <span role="img" aria-label="Building Construction">
          🏗
        </span>
      </h2>

      {projects &&
        projects.map(p => {
          return (
            <Project key={p.id} title={p.title} description={p.description} />
          );
        })}
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex">
      <p>Lovingly designed and developed by Jesstern Rays</p>
      <p>Copyright © Jesstern Rays · All rights reserved</p>
    </footer>
  );
}

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
