import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import  {Login}  from './Login';
import { User } from './Pages/User';
import { Home } from './Pages/Hom';



function App() {
  
  return (
    <div className="App">
      
      
      
      
      <Routes>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
