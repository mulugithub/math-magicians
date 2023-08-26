import { Button, Operator } from './Button';

const Buttons = () => (
  <div className="button-container">
    <div className="row">
      <Button symbol="AC" />
      <Button symbol="+/-" />
      <Button symbol="%" />
      <Operator symbol="÷" />
    </div>
    <div className="row">
      <Button symbol="7" />
      <Button symbol="8" />
      <Button symbol="9" />
      <Operator symbol="x" />
    </div>
    <div className="row">
      <Button symbol="4" />
      <Button symbol="5" />
      <Button symbol="6" />
      <Operator symbol="-" />
    </div>
    <div className="row">
      <Button symbol="1" />
      <Button symbol="2" />
      <Button symbol="3" />
      <Operator symbol="+" />
    </div>
    <div className="row last-row">
      <Button symbol="0" />
      <Button symbol="." />
      <Operator symbol="=" />
    </div>
  </div>
);
export default Buttons;
