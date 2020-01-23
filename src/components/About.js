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
          development and clean code. I've developed both front and backend
          applications for over a decade and worked with clients from small
          startups to large enterprises.
        </p>
        <p>
          I am a co-organizer of{" "}
          <a href="https://www.meetup.com/Junior-Developers-Singapore">
            Junior Developers Singapore
          </a>{" "}
          and remain deeply involved in the tech community in Singapore. I also
          enjoy contributing to open source projects.
        </p>
        <p>
          When not programming, I like board games, yoga by the beach, and
          emojis.
        </p>
      </div>
    </section>
  );
}

export default About;
