import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p> Math Magicians App</p>
    </header>
    <Calculator />
    <Quotes />
  </div>
);

export default App;
