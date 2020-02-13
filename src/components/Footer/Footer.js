import React, { useState } from "react";
import { Text, Quote, Attribution, Image, Container } from "./styledComponents";
import { quotes } from "../../data";

function Footer() {
  const year = new Date().getFullYear();
  const [image, setImageSource] = useState("/images/dancer.png");
  const [quote, setQuote] = useState("");

  const scrollToBottomOfPage = () => {
    const element = document.scrollingElement || document.body;
    element.scrollTop = element.scrollHeight;
  };

  const activateEasterEgg = () => {
    setTimeout(() => {
      setQuote(`${quotes[0].quote} ― ${quotes[0].author}`);
      setImageSource("/images/dancer.gif");
      scrollToBottomOfPage();
    }, 0);
  };

  return (
    <Container>
      {!!quote && <Quote>{quote}</Quote>}
      <Image alt="dancer" src={image} onClick={activateEasterEgg} />
      <Text>Handcrafted by Jesstern Rays</Text>
      <Text>Copyright © {year} Jesstern Rays · All rights reserved ·</Text>
      <Attribution>
        Icons by <a href="https://icons8.com">Icons8</a> · Emoji by{" "}
        <a href="https://www.joypixels.com/">JoyPixels</a>
      </Attribution>
    </Container>
  );
}

export default Footer;
