import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function Header() {
  return (
    <header className="main flex-col-center">
      <img
        alt="Jesstern Rays"
        src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png"
      />
      <h1>Jesstern Rays</h1>
      <p>Software Engineer</p>
    </header>
  );
}

function Social() {
  return (
    <section className="social">
      <a href="https://t.me/jsstrn">
        <img
          alt="telegram"
          src="https://img.icons8.com/windows/64/000000/telegram-app.png"
        ></img>
      </a>
      <a href="https://github.com/jsstrn">
        <img
          alt="github"
          src="https://img.icons8.com/windows/64/000000/github.png"
        ></img>
      </a>
      <a href="https://twitter.com/jsstrn">
        <img
          alt="twitter"
          src="https://img.icons8.com/windows/64/000000/twitter.png"
        ></img>
      </a>
      <a href="mailto:hello@jsstrn.me">
        <img
          alt="email"
          src="https://img.icons8.com/windows/64/000000/email.png"
        ></img>
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="flex-col-center">
      <h2>
        About{" "}
        <span role="img" aria-label="Waving Hand">
          👋
        </span>
      </h2>
      <div className="about">
        <p>
          I believe in delivering quality software through test driven
          development and clean code.
        </p>
        <p>
          I love nature walks, yoga by the beach, and beautiful sunsets. I also
          like to play board games and emojis.
        </p>
      </div>
    </section>
  );
}

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

function Projects() {
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
      description:
        "A personal configuration for macOS built with Bash scripts.",
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

function Footer() {
  return (
    <footer className="flex-col-center">
      <span role="img" aria-label="Waving Hand">
        🕺
      </span>
      <p>Lovingly designed and developed by Jesstern Rays</p>
      <p>Copyright © Jesstern Rays · All rights reserved</p>
    </footer>
  );
}

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Social />
      <About />
      <Projects />
      <Social />
      <Footer />
    </React.Fragment>
  );
}

export default App;
