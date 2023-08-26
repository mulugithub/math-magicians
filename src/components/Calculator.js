import React from 'react';
import Display from './Display';
import Buttons from './Buttons';
import '../styles/calculator.css';

const Calculator = () => (
  <div className="app">
    <div className="calculator">
      <Display />
      <Buttons />
    </div>
  </div>
);

export default Calculator;
