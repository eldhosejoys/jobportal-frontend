import './App.css';
import Head from './components/head';
import Navigation from './components/navigation';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Jplogin from './components/jplogin';
import Jslogin from './components/jslogin';
import Jpregister from './components/jpregister';
import Jsregister from './components/jsregister';


function App() {
  return (
    <div className="app-container">
     <Head/>
     <Navigation/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/jplogin' element={<Jplogin/>}/>
     <Route path='/jslogin' element={<Jslogin/>}/>
     <Route path='/jpregister' element={<Jpregister/>}/>
     <Route path='/jsregister' element={<Jsregister/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
