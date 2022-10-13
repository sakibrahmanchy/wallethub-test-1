/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type Props = { };
type State = { count: number };
class Counter extends React.Component <Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  render() {
    const { count = 0 } = this.state;
    return (
      <div id="mainArea">
        <p>button count: <span>{count}</span></p>
        <button id="mainButton" onClick={() => this.setState({ count: count + 1})}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);