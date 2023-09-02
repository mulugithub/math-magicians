import React, { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: '', operation: '' });

  const handleButtonClicks = (symbol) => {
    setState(calculate(state, symbol));
  };

  return (
    <div className="calculator-wrapper">
      <h3 data-testid="subtitle">Lets Do some math!</h3>
      <div className="calculator">
        <Display total={state.total} next={state.next} operation={state.operation} />
        <Buttons onButtonClick={handleButtonClicks} />
      </div>
    </div>
  );
};

export default Calculator;
