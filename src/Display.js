import React, { Component } from 'react';
import './App.css';
class Display extends Component {
  render() {
    return (
      <div>
        <div className="card result">
          <div className="card-body display">
            <h2 id="display-value">{this.props.flag && this.props.value ? this.props.value : 0}</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Display;