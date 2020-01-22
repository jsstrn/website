import React from "react";
import { social } from "../data";

function Social() {
  return (
    <section className="social">
      {social.map(s => (
        <a key={s.id} href={s.link}>
          <img alt={s.name} src={`images/${s.icon}`}></img>
        </a>
      ))}
    </section>
  );
}

export default Social;
