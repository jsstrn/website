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
  transition: box-shadow 0.5s;
  box-shadow: 4px 4px 8px #b7b7b7, -4px -4px 8px #ffffff;

  &:hover,
  &:active {
    cursor: pointer;
    box-shadow: inset 4px 4px 8px #b7b7b7, inset -4px -4px 8px #ffffff;
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
