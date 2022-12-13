import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';

import Home from './components/Home';
import Resume from './components/Resume';
import { Card } from 'react-bootstrap';
function sayHello() {
  return <About></About>
}
function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar >
      <Home></Home>

</div>
  );
}

export default App;
