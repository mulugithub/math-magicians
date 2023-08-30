import { Routes, Route } from 'react-router-dom';
import NotMatch from './components/NotMatch';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="*" element={<NotMatch />} />
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quotes" element={<Quotes />} />
    </Routes>
  </div>
);

export default App;
