import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/index';
import Menu from './pages/menu';
import InfoSection from './components/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './components/InfoSection/Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConnectPage from './pages/connect';
import HistoryCard from './components/History';
import MakeOrder from './components/History/MakeOrder';
import UpdateOrder from './components/History/UpdateOrder';
import ViewOffers from './components/History/ViewOffers';
import InfoPage from './components/ExtraInfoPages/InfoPage';


function App() {
  return (
    <div className="App">
    <Router>
      <Menu/>
      <Routes>
        <Route path = "/" element = {<MakeOrder/>} exact/>
        <Route path = "/viewSusAF" element = {<ConnectPage/>} exact/>
        <Route path = "/about" element = {<InfoSection  { ...homeObjTwo }/>} exact/>
        <Route path = "/discover" element = {<InfoSection  { ...homeObjTwo }/>} exact/>
        <Route path = "/services" element = {<InfoSection  { ...homeObjThree }/>} exact/>
        <Route path = "/history" element = {<HistoryCard/>} exact/>
        <Route path = "/addImpact" element = {<MakeOrder/>} exact/>
        
        
        <Route path = "/updateOrder" element = {<UpdateOrder/>} exact/>
        <Route path = "/updateOrder/:id" element = {<UpdateOrder/>}/>
        
        <Route path = "/viewOffers/:name/:id" element = {<ViewOffers/>}/>
        <Route path = "/info" element = {<InfoPage/>} exact/>
        
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
