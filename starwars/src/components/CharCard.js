import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function CharCard(props) {
  return (
    <Card>
      <div className="header">Name: {props.char.name}</div>
      <div className="meta">Birth Year: {props.char.birth_year}</div>
      <div className="description">Gender: {props.char.gender}</div>
    </Card>
  );
}
