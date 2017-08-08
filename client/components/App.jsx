import React from "react";
import { foo, msg1, msg2 } from "../config";

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hello World</h1>

        <h3>Config Info</h3>
        <p>
          foo: {foo()}
        </p>
        <p>
          msg1: {msg1}
        </p>
        <p>
          msg2: {msg2}
        </p>
      </div>
    );
  }
}
