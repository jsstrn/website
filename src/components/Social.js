import React from "react";
import { social } from "../data";
import styled from "styled-components";

const Section = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled.img`
  padding: 0.5rem;
  margin: 1rem;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: whitesmoke;
  transition: background-color 0.5s;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;

function Social() {
  return (
    <Section>
      {social.map(s => (
        <a key={s.id} href={s.link}>
          <Icon alt={s.name} src={`images/${s.icon}`} />
        </a>
      ))}
    </Section>
  );
}

export default Social;
