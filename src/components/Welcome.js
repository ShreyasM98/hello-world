import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { hero, heroName } = this.props;
    return (
      <div>
        <h1>
          Welcome {this.props.name} a.k.a {this.props.heroName}
        </h1>
      </div>
    );
  }
}

export default Welcome;
