import React, { useState } from "react";
import styled, { css } from "styled-components";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.footer`
  ${containerStyle}
  margin: 2rem auto 1rem;
`;

const Image = styled.img`
  padding: 0.2rem 1.5rem;
  width: 1.5rem;
`;

const Text = styled.p`
  font-size: 0.7rem;
  line-height: 0.1em;
  color: grey;
`;

function Footer() {
  const year = new Date().getFullYear();
  const [image, setImageSource] = useState("/images/dancer.png");

  return (
    <Container>
      <Image src={image} onClick={() => setImageSource("/images/dancer.gif")} />
      <Text>Handcrafted by Jesstern Rays</Text>
      <Text>Copyright © {year} Jesstern Rays · All rights reserved</Text>
    </Container>
  );
}

export default Footer;
