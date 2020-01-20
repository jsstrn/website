import React from "react";

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
          like to play board games. I might have a mild addiction to emojis.
        </p>
      </div>
    </section>
  );
}

export default About;
