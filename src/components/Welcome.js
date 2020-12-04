// write code for Welcome component here
import React from "react";
export default function Welcome(props) {
  return (
    <>
      <h1>Hello {props.name}!</h1>
      <h2>
        We are suppose to create a welcome page for new students when they login
        on our site.
      </h2>
    </>
  );
}
