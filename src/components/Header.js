import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 10rem;
  border-radius: 50%;
  transition: filter 0.5s;
  box-shadow: 8px 8px 16px #b7b7b7, -8px -8px 16px #ffffff;
  &:hover {
    filter: grayscale(1);
  }
`;

const Heading = styled.h1`
  margin-bottom: 0;
`;

function Header() {
  return (
    <Container>
      <Image alt="Jesstern Rays" src="/images/profile-yellow.jpg" />
      <Heading>Jesstern Rays</Heading>
      <p>Software Engineer</p>
    </Container>
  );
}

export default Header;
