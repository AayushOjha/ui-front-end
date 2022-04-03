import React from "react";
import Button from "./Button";
import IFrames from "./IFrame";

export default function TestPage() {
  return (
    <div>
      <IFrames
        html="<h1> Ayush </h1>"
        css="h1{color:tomato}"
        js="console.log('beDev')"
      />
    </div>
  );
}
