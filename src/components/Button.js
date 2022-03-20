import React from "react";
import styled from "styled-components";

export default function Button(props) {
  const X = styled.button`
    ${props.css}
  `;
  return <X>{props.text}</X>;
}
