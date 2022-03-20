import React from "react";
import Grid from "@mui/material/Grid";
import "../cssFiles/Boxes.css";

export default function Boxes() {
  return (
    <div style={{ paddingTop: "150px" }}>
      <h1>UI Boxes</h1>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Item heading={"Hoverable-1"} ourClass={"button_slide slide_down"} />
        </Grid>
        <Grid item xs={3} className="gItem">
          <Item onclick={cb1} heading={"Hoverable-2"} ourClass={"button-1"} />
        </Grid>
        <Grid item xs={3}>
          <Item onclick={cb1} heading={"Hoverable-3"} ourClass={"button-53"} />
        </Grid>
        <Grid item xs={3}>
          <Item onclick={cb1} heading={"Distorted-1"} ourClass={"button-49"} />
        </Grid>
        <Grid item xs={3}>
          <Item onclick={cb1} heading={"Hoverable-4"} ourClass={"button-37"} />
        </Grid>
        <Grid item xs={3}>
          <Item onclick={cb1} heading={"Hoverable-5"} ourClass={"button-74"} />
        </Grid>
        <Grid item xs={3}>
          <Item onclick={cb1} heading={"Hoverable-5"} ourClass={"button-74"} />
        </Grid>
        <Grid item xs={3}>
          <Item onclick={cb1} heading={"Hoverable-5"} ourClass={"button-69"} />
        </Grid>
        <Grid item xs={3}>
          <div>A button</div>
        </Grid>
      </Grid>
    </div>
  );
}

const Item = (props) => {
  return (
    <div className="itemCard" onClick={() => cb1()}>
      <h2 style={{ marginBottom: "10px" }}>{props.heading}</h2>
      <div className={props.ourClass}>UI BUTTON</div>
    </div>
  );
};

const cb1 = () => {
  var value =
    "<!-- HTML !-->" +
    "\n" +
    '<button class="button-37" role="button">Button 37</button>' +
    "\n" +
    "/* CSS */" +
    "\n" +
    ".button-37 {" +
    "  background-color: #13aa52;" +
    "  border: 1px solid #13aa52;" +
    "  border-radius: 4px;" +
    "  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;" +
    "  box-sizing: border-box;" +
    "  color: #fff;" +
    "  cursor: pointer;" +
    '  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;' +
    "  font-size: 16px;" +
    "  font-weight: 400;" +
    "  outline: none;" +
    "  outline: 0;" +
    "  padding: 10px 25px;" +
    "  text-align: center;" +
    "  transform: translateY(0);" +
    "  transition: transform 150ms, box-shadow 150ms;" +
    "  user-select: none;" +
    "  -webkit-user-select: none;" +
    "  touch-action: manipulation;" +
    "}" +
    "\n" +
    ".button-37:hover {" +
    "  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;" +
    "  transform: translateY(-2px);" +
    "}" +
    "\n" +
    "@media (min-width: 768px) {" +
    "  .button-37 {" +
    "    padding: 10px 30px;" +
    "  }" +
    "}";

  navigator.clipboard.writeText(value);
  alert("code copide!!");
  console.log("hello world");
};
