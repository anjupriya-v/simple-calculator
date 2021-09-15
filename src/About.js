import React, { Component } from 'react';
import Calculator from './CalculatorIcon.png'
import './App.css'
import './About.css'
import Navbar from './Navbar';
class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section>
          <details open>
            <summary>Operations</summary>
            <div>
              <img src={Calculator} alt="calculator" />
              <ul>
                <li><span className="operation">AC</span> will clear all the entries at a time</li>
                <li><span className="operation">CE</span> will clear single entry at a time</li>
                <li><span className="operation">+</span> will return the addition of 2 values</li>
                <li><span className="operation">-</span> will return the subtraction of 2 values</li>
                <li><span className="operation">x</span>will return the multiplication of 2 values</li>
                <li><span className="operation">/</span>will return the quotient   with decimal values </li>
                <li><span className="operation">%</span>will return the remainder </li>
              </ul>
            </div>
          </details>
          <details open>
            <summary>Other Info</summary>
            <div>
              <p>Developed with ❤️ by Anju Priya V</p>
            </div>
          </details>
        </section>
      </div>
    );
  }
}
export default About;