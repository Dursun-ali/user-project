import './App.css';
import { Routes, Route,Link,NavLink } from "react-router-dom";
import AboutUs from './pages/AddUser';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import { UserProvider } from './context/AddUserContext';

function App() {
  
 
  return (
  <>


  <UserProvider>
  <Routes>
    <Route path="/" element ={<UserList />} ></Route>
    <Route path="/AddUser" element ={<AboutUs/>} ></Route>
    <Route path="/UserDetails" element ={<UserDetails/>} ></Route>
  </Routes>
  </UserProvider>

  
  </>
  )
}

export default App;
