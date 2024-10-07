import{BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom'
import { Home } from './Pages/Hom'
import { User } from './Pages/User'
import { Add } from './Pages/Add'
import { Profile } from './Pages/Profile'
import { Exit } from './Pages/Exit'
export const Nav = () => {
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/user">UserList</Link> |
        <Link to="/add">AddPost</Link> |
        <Link to="/profile">Profile</Link> |
        <Link to="/exit">Exit</Link>
        </nav>
    return( 
        <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/exit' element={<Exit/>}/>
          <Route path='*' element={<div>this page is not foun</div>}  />
        </Routes>
      </Router>
    
    )
}