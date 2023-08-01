
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App b-o">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>HellO</h1>} />
      </Routes>
 
   
    </div>
  );
}

export default App;
