import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex-col-center">
      <span role="img" aria-label="Waving Hand">
        🕺
      </span>
      <p>Handcrafted by Jesstern Rays</p>
      <p>Copyright © {year} Jesstern Rays · All rights reserved</p>
    </footer>
  );
}

export default Footer;
