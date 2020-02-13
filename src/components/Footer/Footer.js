import React, { useState } from "react";
import { Text, Quote, Attribution, Image, Container } from "./styles";

function Footer() {
  const year = new Date().getFullYear();
  const [image, setImageSource] = useState("/images/dancer.png");
  const [quote, setQuote] = useState("");

  const fetchQuote = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then(res => res.json())
      .then(data => {
        setQuote(`"${data.en}" by ${data.author}`);
        window.scrollTo(0, document.body.scrollHeight);
      });
  };

  return (
    <Container>
      {!!quote && <Quote>{quote}</Quote>}
      <Image
        alt="dancer"
        src={image}
        onClick={() => {
          fetchQuote();
          setImageSource("/images/dancer.gif");
        }}
      />
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
