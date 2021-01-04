import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
import Parent from "./components/Parent";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {[...Array(10)].map((x, i) => (
          <Hello id={i} />
        ))}
        <Parent value="muthusamy" />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
