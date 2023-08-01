
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
 
   
    </div>
  );
}

export default App;
