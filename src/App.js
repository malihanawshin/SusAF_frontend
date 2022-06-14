import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/index';
import Menu from './pages/menu';
import InfoSection from './components/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './components/InfoSection/Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConnectPage from './pages/connect';
import AddImpact from './components/Impact/AddImpact';
import InfoPage from './components/ExtraInfoPages/InfoPage';


function App() {
  return (
    <div className="App">
    <Router>
      <Menu/>
      <Routes>
        <Route path = "/" element = {<AddImpact/>} exact/>
        <Route path = "/viewSusAF" element = {<ConnectPage/>} exact/>
        
        
        
        <Route path = "/info" element = {<InfoPage/>} exact/>
        
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
