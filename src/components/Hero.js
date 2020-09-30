import React from "react";

export default function Hero(props) {
  return (
    <div>
      <header className={props.hero}>{props.children}</header>
    </div>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
