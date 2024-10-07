import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  {Login}  from './Login';
import { Home } from './Pages/Hom';
import {User} from './Pages/User'
import { Add } from './Pages/Add';
import { Profile } from './Pages/Profile';
import { Exit } from './Pages/Exit';
import { Nav } from './Nav';


function App() {
  
  return (
    <div className="App">
     <Login /> 
     {/* <Home/> */}
    </div>
  );
}

export default App;
