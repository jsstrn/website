import React from "react";
import Section from "./Section";
import styled from "styled-components";

const Block = styled.div`
  width: 60vw;
  padding: 0.5rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  background-color: #fbfbfb;
  box-shadow: 4px 4px 8px #b7b7b7, -4px -4px 8px #ffffff;
`;

function About() {
  return (
    <Section heading="About" icon="👋" iconLabel="Waving Hand">
      <Block>
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
      </Block>
    </Section>
  );
}

export default About;
