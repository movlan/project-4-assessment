import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

class App extends Component {
  state = {
    selectedCircle: 1,
  };
  handleClick = (circle) => {
    this.setState({ selectedCircle: circle });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleClick={this.handleClick}
            selected={this.state.selectedCircle}
          />
          <Circles selected={this.state.selectedCircle} />
        </main>
      </div>
    );
  }
}

export default App;
