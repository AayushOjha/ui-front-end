import React from "react";
import Grid from "@mui/material/Grid";
import "../cssFiles/TextAni.css";

export default function TextAni() {
  return (
    <div style={{ paddingTop: "150px" }}>
    <h1>Text Animations</h1>
    <Grid container spacing={5}>
      <Grid item xs={3}>
        <Item  heading={"Hoverable-1"} ourClass={"button_slide slide_down"} />
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
    </Grid>
  </div>
  )
}
