import React from "react";
import Section from "./Section";

function About() {
  return (
    <Section heading="About" icon="👋" iconLabel="Waving Hand">
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
    </Section>
  );
}

export default About;
