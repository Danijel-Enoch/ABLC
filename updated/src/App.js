import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import P2P from './components/P2P';
import P2PDashboard from './components/P2PDashboard';
import TermsOfServices from './components/TermsOfServices';
import Fees from './components/Fees';
import Footer from './components/Footer';
function App() {
  return (

    <div className="App">

      <P2P />
      {/* <P2PDashboard /> */}


    </div>

  );
}

export default App;
