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
