import React, { useState } from "react";
import { Text, Quote, Attribution, Image, Container } from "./styledComponents";
import { quotes } from "../../data";

const staticImageSource = "/images/dancer.png";
const dynamicImageSource = "/images/dancer.gif";

function Footer() {
  const year = new Date().getFullYear();
  const [image, setImageSource] = useState(staticImageSource);
  const [quote, setQuote] = useState("");

  const scrollToBottomOfPage = () => {
    const element = document.scrollingElement || document.body;
    element.scrollTop = element.scrollHeight;
  };

  const activateEasterEgg = () => {
    setTimeout(() => {
      const index = new Date().getDay();
      const quote = quotes[index];

      setQuote(`"${quote.quote}" ― ${quote.author}`);
      setImageSource(dynamicImageSource);
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
