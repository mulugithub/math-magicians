import PropTypes from 'prop-types';
import { Button, Operator } from './Button';

const Buttons = ({ onButtonClick }) => (
  <div className="button-container">
    <div className="row">
      <Button onClick={onButtonClick} symbol="AC" />
      <Button onClick={onButtonClick} symbol="+/-" />
      <Button onClick={onButtonClick} symbol="%" />
      <Operator onClick={onButtonClick} symbol="÷" />
    </div>
    <div className="row">
      <Button onClick={onButtonClick} symbol="7" />
      <Button onClick={onButtonClick} symbol="8" />
      <Button onClick={onButtonClick} symbol="9" />
      <Operator onClick={onButtonClick} symbol="x" />
    </div>
    <div className="row">
      <Button onClick={onButtonClick} symbol="4" />
      <Button onClick={onButtonClick} symbol="5" />
      <Button onClick={onButtonClick} symbol="6" />
      <Operator onClick={onButtonClick} symbol="-" />
    </div>
    <div className="row">
      <Button onClick={onButtonClick} symbol="1" />
      <Button onClick={onButtonClick} symbol="2" />
      <Button onClick={onButtonClick} symbol="3" />
      <Operator onClick={onButtonClick} symbol="+" />
    </div>
    <div className="row last-row">
      <Button onClick={onButtonClick} symbol="0" />
      <Button onClick={onButtonClick} symbol="." />
      <Operator onClick={onButtonClick} symbol="=" />
    </div>
  </div>
);
export default Buttons;

Buttons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
