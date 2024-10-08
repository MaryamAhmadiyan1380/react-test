
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {BrowserRouter as Router , Routes , Route ,Link } from 'react-router-dom'
import { Add } from './Add';
import { Profile } from './Profile';
import { Exit } from './Exit';
// import { Carousel } from 'react-responsive-carousel';
// import img1 from '../images/one.jpg'
// import img2 from '../images/two.jpg'
// import img3 from '../images/three.jpg'

export const Home = () => {
    
      return (

            <Router>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/user">userList</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/add">addPost</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/profile">profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/exit">exit</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/add" element={<Profile/> } />
                <Route path="/add" element={<Exit />} />
              </Routes>
            </div>
          </Router>
          )
      }
      //  <Carousel>
      //    <div>
      //    <img src={img1} />
      //    <h2>sample caption</h2>
      //    </div>
      //    <div>
      //    <img src={img2} />
      //    <h2>sample caption</h2>
      //    </div>
      //    <div>
      //    <img src={img3} />
      //    <h2>sample caption</h2>
      //    </div>
      //  </Carousel>
      
    
    
//     )
    