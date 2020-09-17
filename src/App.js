import React, { Component } from "react";
import "./styles/App.css";
import RouterView from "./RouterView";
import { ThemeProvider } from "styled-components";

const theme = {
  brown: "#44281d",
  skin: "#e4a788",
  yellow: "#f0e14a",
  green: "#97ce4c",
  pink: "#e79ac6",
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <RouterView></RouterView>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
