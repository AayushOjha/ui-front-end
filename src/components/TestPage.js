import React from "react";
import Button from "./Button";

export default function TestPage() {
  let pass = `{"color": "white","backgroundColor": "DodgerBlue", "padding": "10px", "fontFamily": "Arial", "&:hover": {"backgroundColor": "red"}}`;
  pass = JSON.parse(pass);
  return <div>{<Button text="A button" css={pass}></Button>}</div>;
}
