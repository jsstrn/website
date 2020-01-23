import React, { useState } from "react";
import { Text } from "./Text";
import { Image } from "./Image";
import { Container } from "./Container";

function Footer() {
  const year = new Date().getFullYear();
  const [image, setImageSource] = useState("/images/dancer.png");

  return (
    <Container>
      <Image src={image} onClick={() => setImageSource("/images/dancer.gif")} />
      <Text>Handcrafted by Jesstern Rays</Text>
      <Text>
        Copyright © {year} Jesstern Rays · All rights reserved · Icons by{" "}
        <a href="https://icons8.com">Icons8</a> · Emoji by{" "}
        <a href="https://www.joypixels.com/">JoyPixels</a>
      </Text>
    </Container>
  );
}

export default Footer;
