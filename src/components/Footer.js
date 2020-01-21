import React, { useState } from "react";

function Footer() {
  const year = new Date().getFullYear();
  const [image, setImageSource] = useState("/images/dancer.png");

  return (
    <footer className="flex-col-center">
      <img src={image} onClick={() => setImageSource("/images/dancer.gif")} />
      <p>Handcrafted by Jesstern Rays</p>
      <p>Copyright © {year} Jesstern Rays · All rights reserved</p>
    </footer>
  );
}

export default Footer;
