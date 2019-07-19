import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function CharCard(props) {
  return (
    <div class="ui card">
      <div class="content">
        <div class="header">Name: {props.char.name}</div>
        <div class="meta">Birth Year: {props.char.birth_year}</div>
        <div class="description">Gender: {props.char.gender}</div>
      </div>
    </div>
  );
}
